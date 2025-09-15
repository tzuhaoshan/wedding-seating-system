// 賓客資料 - 從 guests.json 載入
let guestData = [];

// 載入賓客資料
async function loadGuestData() {
    try {
        const response = await fetch('guests.json');
        guestData = await response.json();
    } catch (error) {
        console.error('載入賓客資料失敗:', error);
        guestData = [];
    }
}

// DOM 元素
let searchInput, suggestionsList, resultCard, overviewView, detailView, viewControls;
let currentGuest = null;
let filteredGuests = [];

// 初始化
document.addEventListener('DOMContentLoaded', async function() {
    await loadGuestData();
    initializeElements();
    setupEventListeners();
    generateOverviewGrid();
    displayResultCard('initial');
});

// 初始化 DOM 元素
function initializeElements() {
    searchInput = document.getElementById('searchInput');
    suggestionsList = document.getElementById('suggestionsList');
    resultCard = document.getElementById('resultCard');
    overviewView = document.getElementById('overviewView');
    detailView = document.getElementById('detailView');
    viewControls = document.getElementById('viewControls');
}

// 設置事件監聽器
function setupEventListeners() {
    // 搜尋輸入事件
    searchInput.addEventListener('input', debounce(function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length === 0) {
            hideSuggestions();
            displayResultCard('initial');
            clearHighlights();
            return;
        }
        
        performSearch(searchTerm);
    }, 200));

    // 搜尋建議點擊事件
    suggestionsList.addEventListener('click', function(e) {
        const suggestionItem = e.target.closest('.suggestion-item');
        if (suggestionItem) {
            const guestIndex = parseInt(suggestionItem.dataset.index);
            const guest = filteredGuests[guestIndex];
            selectGuest(guest);
        }
    });

    // 鍵盤導航
    searchInput.addEventListener('keydown', function(e) {
        const selectedItem = suggestionsList.querySelector('.suggestion-item.selected');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                updateSelectedItem(1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                updateSelectedItem(-1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedItem) {
                    const guestIndex = parseInt(selectedItem.dataset.index);
                    const guest = filteredGuests[guestIndex];
                    selectGuest(guest);
                }
                break;
            case 'Escape':
                hideSuggestions();
                break;
        }
    });

    // 點擊外部隱藏建議
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
            hideSuggestions();
        }
    });

    // 視圖切換控制
    document.getElementById('backToOverview').addEventListener('click', function() {
        showOverviewView();
    });
}

// 防抖函數
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 執行搜尋
function performSearch(searchTerm) {
    filteredGuests = guestData.filter(guest => 
        guest.name && guest.name.trim() !== '' && guest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (filteredGuests.length > 0) {
        showSuggestions(filteredGuests);
    } else {
        hideSuggestions();
        displayResultCard('no-result');
        clearHighlights();
    }
}

// 顯示搜尋建議
function showSuggestions(guests) {
    suggestionsList.innerHTML = '';
    
    guests.forEach((guest, index) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.dataset.index = index;
        
        suggestionItem.innerHTML = `
            <span class="material-icons-outlined">person</span>
            <div class="guest-name">${guest.name}</div>
            <div class="guest-info">桌${guest.tableNumber} - 座位${guest.seatNumber}</div>
        `;
        
        suggestionsList.appendChild(suggestionItem);
    });
    
    suggestionsList.classList.add('show');
}

// 隱藏搜尋建議
function hideSuggestions() {
    suggestionsList.classList.remove('show');
}

// 更新選中的建議項目
function updateSelectedItem(direction) {
    const items = suggestionsList.querySelectorAll('.suggestion-item');
    const currentSelected = suggestionsList.querySelector('.suggestion-item.selected');
    let nextIndex = 0;
    
    if (currentSelected) {
        const currentIndex = parseInt(currentSelected.dataset.index);
        nextIndex = (currentIndex + direction + items.length) % items.length;
        currentSelected.classList.remove('selected');
    }
    
    if (items[nextIndex]) {
        items[nextIndex].classList.add('selected');
    }
}

// 選擇賓客
function selectGuest(guest) {
    currentGuest = guest;
    searchInput.value = guest.name;
    hideSuggestions();
    displayResultCard('found', guest);
    highlightGuestTable(guest);
    showOverviewView();
}

// 顯示結果卡片
function displayResultCard(state, data = null) {
    let html = '';
    
    switch(state) {
        case 'initial':
            html = `
                <div class="result-card initial">
                    <span class="material-icons-outlined icon">search</span>
                    <h2>歡迎使用座位查詢</h2>
                    <p>請在上方輸入您的姓名，我們將為您找到專屬座位</p>
                </div>
            `;
            break;
            
        case 'no-result':
            html = `
                <div class="result-card no-result">
                    <span class="material-icons-outlined icon">person_off</span>
                    <h2>找不到您的名字</h2>
                    <p>請確認姓名是否正確，或聯繫工作人員協助</p>
                </div>
            `;
            break;
            
        case 'found':
            html = `
                <div class="result-card found">
                    <span class="material-icons-outlined icon">check_circle</span>
                    <h2>找到您的座位了！</h2>
                    <p>${data.name}，您的座位資訊如下：</p>
                    <div class="seat-details">
                        <div class="detail-item">
                            <span class="detail-label">桌次</span>
                            <span class="detail-value">${data.tableNumber}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">座位</span>
                            <span class="detail-value">${data.seatNumber}</span>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    resultCard.innerHTML = html;
}

// 生成概覽網格 - 根據平面圖實際桌子大小佈局
function generateOverviewGrid() {
    const overviewGrid = document.getElementById('overviewGrid');
    overviewGrid.innerHTML = '';
    
    // 根據平面圖創建配置
    const floorPlan = document.createElement('div');
    floorPlan.className = 'floor-plan';
    
    // 第一排 - 只有 B8桌（12個座位，較長）
    const firstRow = document.createElement('div');
    firstRow.className = 'floor-row';
    firstRow.appendChild(createOverviewTableCard('B8'));
    
    // 第二排 - A7（菱形，4個座位）, B2（最長，14個座位）, C2（10個座位）
    const secondRow = document.createElement('div');
    secondRow.className = 'floor-row';
    secondRow.appendChild(createOverviewTableCard('A7'));
    secondRow.appendChild(createOverviewTableCard('B2'));
    secondRow.appendChild(createOverviewTableCard('C2'));
    
    // 第三排 - A2（10個座位）, B1（6個座位，較短）, C1（10個座位）
    const thirdRow = document.createElement('div');
    thirdRow.className = 'floor-row';
    thirdRow.appendChild(createOverviewTableCard('A2'));
    thirdRow.appendChild(createOverviewTableCard('B1'));
    thirdRow.appendChild(createOverviewTableCard('C1'));
    
    // 第四排 - 只有 A1桌（8個座位）
    const fourthRow = document.createElement('div');
    fourthRow.className = 'floor-row';
    fourthRow.appendChild(createOverviewTableCard('A1'));
    
    floorPlan.appendChild(firstRow);
    floorPlan.appendChild(secondRow);
    floorPlan.appendChild(thirdRow);
    floorPlan.appendChild(fourthRow);
    overviewGrid.appendChild(floorPlan);
}

// 創建概覽桌次卡片
function createOverviewTableCard(tableNum) {
    const tableCard = document.createElement('div');
    tableCard.className = 'overview-table-card';
    tableCard.dataset.table = tableNum;
    
    // 統計該桌次的賓客數量
    const guestCount = guestData.filter(guest => guest.tableNumber === tableNum.toString()).length;
    const maxSeats = getMaxSeatsForTable(tableNum);
    
    tableCard.innerHTML = `
        <div class="overview-table-number">桌${tableNum}</div>
        <div class="overview-table-info">
            <span class="guest-count">${guestCount}/${maxSeats}</span>
        </div>
    `;
    
    // 點擊事件 - 切換到詳細視圖
    tableCard.addEventListener('click', function() {
        showDetailView(tableNum);
    });
    
    return tableCard;
}

// 獲取桌次的最大座位數
function getMaxSeatsForTable(tableNum) {
    const seatConfigs = {
        'A7': 4,  // 菱形桌
        'A2': 10, // 長桌
        'A1': 8,  // 長桌
        'B8': 12, // 長桌
        'B2': 14, // 長桌
        'B1': 6,  // 長桌
        'C2': 10, // 長桌
        'C1': 10  // 長桌
    };
    return seatConfigs[tableNum] || 0;
}

// 高亮賓客桌次
function highlightGuestTable(guest) {
    // 清除所有高亮
    document.querySelectorAll('.overview-table-card').forEach(table => {
        table.classList.remove('highlighted');
    });
    
    // 高亮對應桌次
    const targetTable = document.querySelector(`.overview-table-card[data-table="${guest.tableNumber}"]`);
    if (targetTable) {
        targetTable.classList.add('highlighted');
    }
}

// 清除所有高亮
function clearHighlights() {
    document.querySelectorAll('.overview-table-card').forEach(table => {
        table.classList.remove('highlighted');
    });
    document.querySelectorAll('.detail-seat').forEach(seat => {
        seat.classList.remove('highlighted');
    });
}

// 顯示概覽視圖
function showOverviewView() {
    overviewView.classList.add('active');
    detailView.classList.remove('active');
    viewControls.style.display = 'none';
    
    // 更新描述文字
    document.getElementById('floorPlanDescription').textContent = '點擊桌次可查看詳細座位';
    
    // 如果有當前賓客，高亮其桌次
    if (currentGuest) {
        highlightGuestTable(currentGuest);
    }
}

// 顯示詳細視圖
function showDetailView(tableNum) {
    overviewView.classList.remove('active');
    detailView.classList.add('active');
    viewControls.style.display = 'flex';
    
    // 更新控制列資訊
    document.getElementById('currentTableInfo').textContent = `桌${tableNum} 詳細圖`;
    
    // 生成詳細座位圖
    generateDetailSeats(tableNum);
    
    // 如果有當前賓客且在相同桌次，高亮其座位
    if (currentGuest && currentGuest.tableNumber === tableNum.toString()) {
        highlightGuestSeat(currentGuest);
    }
}

// 生成詳細座位圖
function generateDetailSeats(tableNum) {
    const detailSeats = document.getElementById('detailSeats');
    const maxSeats = getMaxSeatsForTable(tableNum);
    
    // 更新標題
    document.getElementById('detailTableTitle').textContent = `桌${tableNum} 詳細圖`;
    
    // 創建座位網格
    const seatsGrid = document.createElement('div');
    seatsGrid.className = 'detail-seats-grid';
    seatsGrid.dataset.table = tableNum;
    
    // 生成座位
    for (let seatNum = 1; seatNum <= maxSeats; seatNum++) {
        const seat = document.createElement('div');
        seat.className = 'detail-seat';
        seat.dataset.seat = seatNum;
        seat.textContent = seatNum;
        
        // 檢查是否有賓客在此座位
        const guest = guestData.find(g => g.tableNumber === tableNum.toString() && g.seatNumber === seatNum.toString());
        if (guest && guest.name.trim() !== '') {
            seat.classList.add('occupied');
            seat.title = `${guest.name} - 桌${guest.tableNumber} 座位${guest.seatNumber}`;
        } else {
            seat.classList.add('available');
            seat.title = `空位 - 桌${tableNum} 座位${seatNum}`;
        }
        
        // 點擊事件
        seat.addEventListener('click', function() {
            if (guest && guest.name.trim() !== '') {
                // 顯示賓客資訊在右側面板
                showGuestInfo(guest);
                currentGuest = guest;
                highlightGuestSeat(guest);
            } else {
                // 顯示空位資訊
                showEmptySeatInfo(tableNum, seatNum);
            }
        });
        
        seatsGrid.appendChild(seat);
    }
    
    detailSeats.innerHTML = '';
    detailSeats.appendChild(seatsGrid);
}

// 顯示賓客資訊
function showGuestInfo(guest) {
    const guestInfoContent = document.querySelector('.guest-info-content');
    guestInfoContent.innerHTML = `
        <div class="guest-info-card">
            <div class="guest-info-avatar">
                <span class="material-icons-outlined">person</span>
            </div>
            <div class="guest-info-details">
                <h5 class="guest-name">${guest.name}</h5>
                <div class="guest-seat-info">
                    <div class="info-item">
                        <span class="material-icons-outlined">table_restaurant</span>
                        <span>桌次 ${guest.tableNumber}</span>
                    </div>
                    <div class="info-item">
                        <span class="material-icons-outlined">event_seat</span>
                        <span>座位 ${guest.seatNumber}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 顯示空位資訊
function showEmptySeatInfo(tableNum, seatNum) {
    const guestInfoContent = document.querySelector('.guest-info-content');
    guestInfoContent.innerHTML = `
        <div class="guest-info-card empty">
            <div class="guest-info-avatar">
                <span class="material-icons-outlined">event_seat</span>
            </div>
            <div class="guest-info-details">
                <h5 class="guest-name">空位</h5>
                <div class="guest-seat-info">
                    <div class="info-item">
                        <span class="material-icons-outlined">table_restaurant</span>
                        <span>桌次 ${tableNum}</span>
                    </div>
                    <div class="info-item">
                        <span class="material-icons-outlined">event_seat</span>
                        <span>座位 ${seatNum}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 高亮賓客座位
function highlightGuestSeat(guest) {
    // 清除所有座位高亮
    document.querySelectorAll('.detail-seat').forEach(seat => {
        seat.classList.remove('highlighted');
    });
    
    // 高亮對應座位
    const targetSeat = document.querySelector(`.detail-seat[data-seat="${guest.seatNumber}"]`);
    if (targetSeat) {
        targetSeat.classList.add('highlighted');
        targetSeat.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}