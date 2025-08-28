// 賓客資料
const guestData = [
    { name: "子豪", table: 1, seat: 1 },
    { name: "子豪爸爸", table: 1, seat: 2 },
    { name: "子豪媽媽", table: 1, seat: 3 },
    { name: "子豪爺爺", table: 1, seat: 4 },
    { name: "子豪奶奶", table: 1, seat: 5 },
    { name: "子豪外公", table: 1, seat: 6 },
    { name: "子豪外婆", table: 1, seat: 7 },
    { name: "子豪舅舅", table: 1, seat: 8 },
    { name: "子豪舅媽", table: 1, seat: 9 },
    { name: "子豪表哥", table: 1, seat: 10 },
    { name: "子豪表姐", table: 1, seat: 11 },
    { name: "子豪表弟", table: 1, seat: 12 },
    { name: "美美", table: 2, seat: 1 },
    { name: "美美爸爸", table: 2, seat: 2 },
    { name: "美美媽媽", table: 2, seat: 3 },
    { name: "美美爺爺", table: 2, seat: 4 },
    { name: "美美奶奶", table: 2, seat: 5 },
    { name: "美美外公", table: 2, seat: 6 },
    { name: "美美外婆", table: 2, seat: 7 },
    { name: "美美舅舅", table: 2, seat: 8 },
    { name: "美美舅媽", table: 2, seat: 9 },
    { name: "美美表哥", table: 2, seat: 10 },
    { name: "美美表姐", table: 2, seat: 11 },
    { name: "美美表弟", table: 2, seat: 12 },
    { name: "小明", table: 3, seat: 1 },
    { name: "小明爸爸", table: 3, seat: 2 },
    { name: "小明媽媽", table: 3, seat: 3 },
    { name: "小明爺爺", table: 3, seat: 4 },
    { name: "小明奶奶", table: 3, seat: 5 },
    { name: "小明外公", table: 3, seat: 6 },
    { name: "小華", table: 4, seat: 1 },
    { name: "小華爸爸", table: 4, seat: 2 },
    { name: "小華媽媽", table: 4, seat: 3 },
    { name: "小華爺爺", table: 4, seat: 4 },
    { name: "小華奶奶", table: 4, seat: 5 },
    { name: "小華外公", table: 4, seat: 6 },
    { name: "小芳", table: 5, seat: 1 },
    { name: "小芳爸爸", table: 5, seat: 2 },
    { name: "小芳媽媽", table: 5, seat: 3 },
    { name: "小芳爺爺", table: 5, seat: 4 },
    { name: "小芳奶奶", table: 5, seat: 5 },
    { name: "小芳外公", table: 5, seat: 6 },
    { name: "小芳外婆", table: 5, seat: 7 },
    { name: "小芳舅舅", table: 5, seat: 8 },
    { name: "小芳舅媽", table: 5, seat: 9 },
    { name: "小芳表哥", table: 5, seat: 10 },
    { name: "小芳表姐", table: 5, seat: 11 },
    { name: "小芳表弟", table: 5, seat: 12 },
    { name: "小芳表妹", table: 5, seat: 13 },
    { name: "小芳堂哥", table: 5, seat: 14 },
    { name: "小芳堂姐", table: 5, seat: 15 },
    { name: "小芳堂弟", table: 5, seat: 16 },
    { name: "小強", table: 6, seat: 1 },
    { name: "小強爸爸", table: 6, seat: 2 },
    { name: "小強媽媽", table: 6, seat: 3 },
    { name: "小強爺爺", table: 6, seat: 4 },
    { name: "小強奶奶", table: 6, seat: 5 },
    { name: "小強外公", table: 6, seat: 6 },
    { name: "小強外婆", table: 6, seat: 7 },
    { name: "小強舅舅", table: 6, seat: 8 },
    { name: "小強舅媽", table: 6, seat: 9 },
    { name: "小強表哥", table: 6, seat: 10 },
    { name: "小麗", table: 7, seat: 1 },
    { name: "小麗爸爸", table: 7, seat: 2 },
    { name: "小麗媽媽", table: 7, seat: 3 },
    { name: "小麗爺爺", table: 7, seat: 4 },
    { name: "小麗奶奶", table: 7, seat: 5 },
    { name: "小麗外公", table: 7, seat: 6 },
    { name: "小麗外婆", table: 7, seat: 7 },
    { name: "小麗舅舅", table: 7, seat: 8 },
    { name: "小麗舅媽", table: 7, seat: 9 },
    { name: "小麗表哥", table: 7, seat: 10 }
];

// DOM 元素
let searchInput, suggestionsList, resultCard, overviewView, detailView, viewControls;
let currentGuest = null;
let filteredGuests = [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
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
        guest.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div class="guest-info">桌${guest.table} - 座位${guest.seat}</div>
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
                            <span class="detail-value">${data.table}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">座位</span>
                            <span class="detail-value">${data.seat}</span>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    resultCard.innerHTML = html;
}

// 生成概覽網格
function generateOverviewGrid() {
    const overviewGrid = document.getElementById('overviewGrid');
    overviewGrid.innerHTML = '';
    
    // 統計每個桌次的賓客數量
    const tableStats = {};
    guestData.forEach(guest => {
        if (!tableStats[guest.table]) {
            tableStats[guest.table] = 0;
        }
        tableStats[guest.table]++;
    });
    
    // 生成桌次卡片
    for (let tableNum = 1; tableNum <= 7; tableNum++) {
        const tableCard = document.createElement('div');
        tableCard.className = 'overview-table';
        tableCard.dataset.table = tableNum;
        
        const guestCount = tableStats[tableNum] || 0;
        const maxSeats = getMaxSeatsForTable(tableNum);
        
        tableCard.innerHTML = `
            <div class="overview-table-number">桌${tableNum}</div>
            <div class="overview-table-seats">${guestCount}/${maxSeats} 座位</div>
            <div class="overview-table-status">${guestCount > 0 ? '已安排' : '空桌'}</div>
        `;
        
        // 點擊事件 - 切換到詳細視圖
        tableCard.addEventListener('click', function() {
            showDetailView(tableNum);
        });
        
        overviewGrid.appendChild(tableCard);
    }
}

// 獲取桌次的最大座位數
function getMaxSeatsForTable(tableNum) {
    const seatConfigs = {
        1: 12, // 6x2
        2: 14, // 2x7
        3: 6,  // 2x3
        4: 6,  // 2x3
        5: 16, // 2x8
        6: 10, // 2x5
        7: 10  // 2x5
    };
    return seatConfigs[tableNum] || 0;
}

// 高亮賓客桌次
function highlightGuestTable(guest) {
    // 清除所有高亮
    document.querySelectorAll('.overview-table').forEach(table => {
        table.classList.remove('highlighted');
    });
    
    // 高亮對應桌次
    const targetTable = document.querySelector(`.overview-table[data-table="${guest.table}"]`);
    if (targetTable) {
        targetTable.classList.add('highlighted');
    }
}

// 清除所有高亮
function clearHighlights() {
    document.querySelectorAll('.overview-table').forEach(table => {
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
    if (currentGuest && currentGuest.table === tableNum) {
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
        const guest = guestData.find(g => g.table === tableNum && g.seat === seatNum);
        if (guest) {
            seat.classList.add('occupied');
            seat.title = `${guest.name} - 桌${guest.table} 座位${guest.seat}`;
        } else {
            seat.classList.add('available');
            seat.title = `空位 - 桌${tableNum} 座位${seatNum}`;
        }
        
        // 點擊事件
        seat.addEventListener('click', function() {
            if (guest) {
                // 顯示賓客資訊
                displayResultCard('found', guest);
                currentGuest = guest;
                highlightGuestSeat(guest);
            }
        });
        
        seatsGrid.appendChild(seat);
    }
    
    detailSeats.innerHTML = '';
    detailSeats.appendChild(seatsGrid);
}

// 高亮賓客座位
function highlightGuestSeat(guest) {
    // 清除所有座位高亮
    document.querySelectorAll('.detail-seat').forEach(seat => {
        seat.classList.remove('highlighted');
    });
    
    // 高亮對應座位
    const targetSeat = document.querySelector(`.detail-seat[data-seat="${guest.seat}"]`);
    if (targetSeat) {
        targetSeat.classList.add('highlighted');
        targetSeat.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
