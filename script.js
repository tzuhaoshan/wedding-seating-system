// 賓客資料
const guestData = [
    { "name": "子豪爸爸", "seatNumber": "1", "tableNumber": "1" },
    { "name": "子豪媽媽", "seatNumber": "2", "tableNumber": "1" },
    { "name": "子豪", "seatNumber": "3", "tableNumber": "1" },
    { "name": "瀞瀅", "seatNumber": "4", "tableNumber": "1" },
    { "name": "瀞瀅媽媽", "seatNumber": "5", "tableNumber": "1" },
    { "name": "瀞瀅爸爸", "seatNumber": "6", "tableNumber": "1" },
    { "name": "子豪阿公", "seatNumber": "7", "tableNumber": "1" },
    { "name": "子豪阿嬤", "seatNumber": "8", "tableNumber": "1" },
    { "name": "子豪阿嬤2", "seatNumber": "9", "tableNumber": "1" },
    { "name": "子豪姑姑", "seatNumber": "10", "tableNumber": "1" },
    { "name": "子豪姑丈", "seatNumber": "11", "tableNumber": "1" },
    { "name": "子豪叔叔", "seatNumber": "12", "tableNumber": "1" },
    
    { "name": "楊俊佑院長", "seatNumber": "1", "tableNumber": "2" },
    { "name": "高雅慧老師", "seatNumber": "2", "tableNumber": "2" },
    { "name": "李莘", "seatNumber": "3", "tableNumber": "2" },
    { "name": "花筠庭", "seatNumber": "4", "tableNumber": "2" },
    { "name": "陳姿穎", "seatNumber": "5", "tableNumber": "2" },
    { "name": "胡嘉倩", "seatNumber": "6", "tableNumber": "2" },
    { "name": "黎孟勳", "seatNumber": "7", "tableNumber": "2" },
    { "name": "趙子揚", "seatNumber": "8", "tableNumber": "2" },
    { "name": "張嘉璇", "seatNumber": "9", "tableNumber": "2" },
    { "name": "陳姿樺", "seatNumber": "10", "tableNumber": "2" },
    { "name": "阮垂蓉", "seatNumber": "11", "tableNumber": "2" },
    { "name": "邱詠庭", "seatNumber": "12", "tableNumber": "2" },
    { "name": "黃元佑", "seatNumber": "13", "tableNumber": "2" },
    { "name": "蘇子廷", "seatNumber": "14", "tableNumber": "2" },
    
    { "name": "周伊謙", "seatNumber": "1", "tableNumber": "3" },
    { "name": "李宥菁", "seatNumber": "2", "tableNumber": "3" },
    { "name": "施佳亨", "seatNumber": "3", "tableNumber": "3" },
    { "name": "葉睿穎", "seatNumber": "4", "tableNumber": "3" },
    { "name": "劉書丞", "seatNumber": "5", "tableNumber": "3" },
    { "name": "劉宗翰", "seatNumber": "6", "tableNumber": "3" },
    
    { "name": "子恩", "seatNumber": "1", "tableNumber": "4" },
    { "name": "蝌蚪", "seatNumber": "2", "tableNumber": "4" },
    { "name": "子豪大舅", "seatNumber": "3", "tableNumber": "4" },
    { "name": "鈴瀅", "seatNumber": "4", "tableNumber": "4" },
    { "name": "子豪阿姨", "seatNumber": "5", "tableNumber": "4" },
    { "name": "子豪大舅媽", "seatNumber": "6", "tableNumber": "4" },
    
    { "name": "方", "seatNumber": "1", "tableNumber": "5" },
    { "name": "謝", "seatNumber": "2", "tableNumber": "5" },
    { "name": "進財", "seatNumber": "3", "tableNumber": "5" },
    { "name": "賴", "seatNumber": "4", "tableNumber": "5" },
    { "name": "勝利", "seatNumber": "5", "tableNumber": "5" },
    { "name": "蕭", "seatNumber": "6", "tableNumber": "5" },
    { "name": "堃", "seatNumber": "7", "tableNumber": "5" },
    { "name": "金安", "seatNumber": "8", "tableNumber": "5" },
    { "name": "方", "seatNumber": "9", "tableNumber": "5" },
    { "name": "謝", "seatNumber": "10", "tableNumber": "5" },
    { "name": "謝", "seatNumber": "11", "tableNumber": "5" },
    { "name": "賴", "seatNumber": "12", "tableNumber": "5" },
    { "name": "進村", "seatNumber": "13", "tableNumber": "5" },
    { "name": "蕭", "seatNumber": "14", "tableNumber": "5" },
    { "name": "堃", "seatNumber": "15", "tableNumber": "5" },
    { "name": "金安", "seatNumber": "16", "tableNumber": "5" },
    
    { "name": "小舅", "seatNumber": "1", "tableNumber": "6" },
    { "name": "小舅", "seatNumber": "2", "tableNumber": "6" },
    { "name": "小舅", "seatNumber": "3", "tableNumber": "6" },
    { "name": "益民", "seatNumber": "4", "tableNumber": "6" },
    { "name": "元智", "seatNumber": "5", "tableNumber": "6" },
    { "name": "小舅", "seatNumber": "6", "tableNumber": "6" },
    { "name": "小舅", "seatNumber": "7", "tableNumber": "6" },
    { "name": "宇翔", "seatNumber": "8", "tableNumber": "6" },
    { "name": "益民", "seatNumber": "9", "tableNumber": "6" },
    { "name": "元智", "seatNumber": "10", "tableNumber": "6" },
    
    { "name": "雷", "seatNumber": "1", "tableNumber": "7" },
    { "name": "愛芸", "seatNumber": "2", "tableNumber": "7" },
    { "name": "助理", "seatNumber": "3", "tableNumber": "7" },
    { "name": "助理", "seatNumber": "4", "tableNumber": "7" },
    { "name": "宗哲", "seatNumber": "5", "tableNumber": "7" },
    { "name": "顥宜", "seatNumber": "6", "tableNumber": "7" },
    { "name": "助理", "seatNumber": "7", "tableNumber": "7" }
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

// 生成概覽網格 - 使用原來的平面圖配置
function generateOverviewGrid() {
    const overviewGrid = document.getElementById('overviewGrid');
    overviewGrid.innerHTML = '';
    
    // 使用原來的平面圖配置
    const floorPlan = document.createElement('div');
    floorPlan.className = 'floor-plan';
    
    // 最上面橫排 - 桌1
    const topRow = document.createElement('div');
    topRow.className = 'top-row';
    const table1 = createOverviewTableCard(1);
    topRow.appendChild(table1);
    
    // 主要區域 - 三條直排
    const mainArea = document.createElement('div');
    mainArea.className = 'main-area';
    
    // 左排 - 桌2, 桌3
    const leftColumn = document.createElement('div');
    leftColumn.className = 'table-column';
    leftColumn.appendChild(createOverviewTableCard(2));
    leftColumn.appendChild(createOverviewTableCard(3));
    
    // 中排 - 桌4, 桌5
    const centerColumn = document.createElement('div');
    centerColumn.className = 'table-column';
    centerColumn.appendChild(createOverviewTableCard(4));
    centerColumn.appendChild(createOverviewTableCard(5));
    
    // 右排 - 桌6, 桌7
    const rightColumn = document.createElement('div');
    rightColumn.className = 'table-column';
    rightColumn.appendChild(createOverviewTableCard(6));
    rightColumn.appendChild(createOverviewTableCard(7));
    
    mainArea.appendChild(leftColumn);
    mainArea.appendChild(centerColumn);
    mainArea.appendChild(rightColumn);
    
    floorPlan.appendChild(topRow);
    floorPlan.appendChild(mainArea);
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
        <div class="overview-table-header">
            <div class="overview-table-number">桌${tableNum}</div>
            <div class="overview-table-seats">${guestCount}/${maxSeats}</div>
        </div>
        <div class="overview-table-status">${guestCount > 0 ? '已安排' : '空桌'}</div>
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
        if (guest) {
            seat.classList.add('occupied');
            seat.title = `${guest.name} - 桌${guest.tableNumber} 座位${guest.seatNumber}`;
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
    const targetSeat = document.querySelector(`.detail-seat[data-seat="${guest.seatNumber}"]`);
    if (targetSeat) {
        targetSeat.classList.add('highlighted');
        targetSeat.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

