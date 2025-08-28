// 賓客座位資料 - 根據實際座位圖配置
const guestData = [
    // 最上面橫排12個位置 (桌號1)
    { name: "子豪爸爸", seatNumber: "1", tableNumber: "1" },
    { name: "子豪媽媽", seatNumber: "2", tableNumber: "1" },
    { name: "子豪", seatNumber: "3", tableNumber: "1" },
    { name: "瀞瀅", seatNumber: "4", tableNumber: "1" },
    { name: "瀞瀅媽媽", seatNumber: "5", tableNumber: "1" },
    { name: "瀞瀅爸爸", seatNumber: "6", tableNumber: "1" },
    { name: "子豪阿公", seatNumber: "7", tableNumber: "1" },
    { name: "子豪阿嬤", seatNumber: "8", tableNumber: "1" },
    { name: "子豪阿嬤2", seatNumber: "9", tableNumber: "1" },
    { name: "子豪姑姑", seatNumber: "10", tableNumber: "1" },
    { name: "子豪姑丈", seatNumber: "11", tableNumber: "1" },
    { name: "子豪叔叔", seatNumber: "12", tableNumber: "1" },
    
    // 最左邊第一桌 (14個位置)
    { name: "楊俊佑院長", seatNumber: "1", tableNumber: "2" },
    { name: "高雅慧老師", seatNumber: "2", tableNumber: "2" },
    { name: "李莘", seatNumber: "3", tableNumber: "2" },
    { name: "花筠庭", seatNumber: "4", tableNumber: "2" },
    { name: "陳姿穎", seatNumber: "5", tableNumber: "2" },
    { name: "胡嘉倩", seatNumber: "6", tableNumber: "2" },
    { name: "黎孟勳", seatNumber: "7", tableNumber: "2" },
    { name: "趙子揚", seatNumber: "8", tableNumber: "2" },
    { name: "張嘉璇", seatNumber: "9", tableNumber: "2" },
    { name: "陳姿樺", seatNumber: "10", tableNumber: "2" },
    { name: "阮垂蓉", seatNumber: "11", tableNumber: "2" },
    { name: "邱詠庭", seatNumber: "12", tableNumber: "2" },
    { name: "黃元佑", seatNumber: "13", tableNumber: "2" },
    { name: "蘇子廷", seatNumber: "14", tableNumber: "2" },
    
    // 最左邊第二桌 (6個位置)
    { name: "周伊謙", seatNumber: "1", tableNumber: "3" },
    { name: "李宥菁", seatNumber: "2", tableNumber: "3" },
    { name: "施佳亨", seatNumber: "3", tableNumber: "3" },
    { name: "葉睿穎", seatNumber: "4", tableNumber: "3" },
    { name: "劉書丞", seatNumber: "5", tableNumber: "3" },
    { name: "劉宗翰", seatNumber: "6", tableNumber: "3" },
    
    // 中間第一桌 (6個位置)
    { name: "子恩", seatNumber: "1", tableNumber: "4" },
    { name: "蝌蚪", seatNumber: "2", tableNumber: "4" },
    { name: "子豪大舅", seatNumber: "3", tableNumber: "4" },
    { name: "鈴瀅", seatNumber: "4", tableNumber: "4" },
    { name: "子豪阿姨", seatNumber: "5", tableNumber: "4" },
    { name: "子豪大舅媽", seatNumber: "6", tableNumber: "4" },
    
    // 中間第二桌 (16個位置)
    { name: "方", seatNumber: "1", tableNumber: "5" },
    { name: "謝", seatNumber: "2", tableNumber: "5" },
    { name: "進財", seatNumber: "3", tableNumber: "5" },
    { name: "賴", seatNumber: "4", tableNumber: "5" },
    { name: "勝利", seatNumber: "5", tableNumber: "5" },
    { name: "蕭", seatNumber: "6", tableNumber: "5" },
    { name: "堃", seatNumber: "7", tableNumber: "5" },
    { name: "金安", seatNumber: "8", tableNumber: "5" },
    { name: "方", seatNumber: "9", tableNumber: "5" },
    { name: "謝", seatNumber: "10", tableNumber: "5" },
    { name: "謝", seatNumber: "11", tableNumber: "5" },
    { name: "賴", seatNumber: "12", tableNumber: "5" },
    { name: "進村", seatNumber: "13", tableNumber: "5" },
    { name: "蕭", seatNumber: "14", tableNumber: "5" },
    { name: "堃", seatNumber: "15", tableNumber: "5" },
    { name: "金安", seatNumber: "16", tableNumber: "5" },
    
    // 最右邊第一桌 (10個位置)
    { name: "小舅", seatNumber: "1", tableNumber: "6" },
    { name: "小舅", seatNumber: "2", tableNumber: "6" },
    { name: "小舅", seatNumber: "3", tableNumber: "6" },
    { name: "益民", seatNumber: "4", tableNumber: "6" },
    { name: "元智", seatNumber: "5", tableNumber: "6" },
    { name: "小舅", seatNumber: "6", tableNumber: "6" },
    { name: "小舅", seatNumber: "7", tableNumber: "6" },
    { name: "宇翔", seatNumber: "8", tableNumber: "6" },
    { name: "益民", seatNumber: "9", tableNumber: "6" },
    { name: "元智", seatNumber: "10", tableNumber: "6" },
    
    // 最右邊第二桌 (10個位置，座位8-10為空位)
    { name: "雷", seatNumber: "1", tableNumber: "7" },
    { name: "愛芸", seatNumber: "2", tableNumber: "7" },
    { name: "助理", seatNumber: "3", tableNumber: "7" },
    { name: "助理", seatNumber: "4", tableNumber: "7" },
    { name: "宗哲", seatNumber: "5", tableNumber: "7" },
    { name: "顥宜", seatNumber: "6", tableNumber: "7" },
    { name: "助理", seatNumber: "7", tableNumber: "7" }
    // 座位8、9、10為空位，不加入賓客資料
];

// DOM 元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultSection = document.getElementById('resultSection');
const guestName = document.getElementById('guestName');
const seatNumber = document.getElementById('seatNumber');
const tableNumber = document.getElementById('tableNumber');
const floorPlan = document.getElementById('floorPlan');

// 當前搜尋到的賓客
let currentGuest = null;

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultCardContainer = document.getElementById('resultCard');
    const suggestionsList = document.getElementById('suggestionsList');
    const floorPlan = document.getElementById('floorPlan');
    
    console.log('DOM loaded, elements found:', {
        searchInput: !!searchInput,
        resultCardContainer: !!resultCardContainer,
        suggestionsList: !!suggestionsList,
        floorPlan: !!floorPlan
    });
    
    // 賓客資料直接嵌入在 JavaScript 中
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
    
    console.log('Guest data loaded:', guestData.length, 'guests');
    
    let searchTimeout;
    let selectedIndex = -1;
    let filteredGuests = [];
    let currentHighlightedGuest = null;

    // 生成座位平面圖
    function generateFloorPlan() {
        console.log('Generating floor plan...');
        floorPlan.innerHTML = '';
        
        // 最上面橫排 (桌號1)
        const topRow = document.createElement('div');
        topRow.className = 'table-row';
        const topTable = createTableCard("1", Array.from({length: 12}, (_, i) => (i + 1).toString()));
        topRow.appendChild(topTable);
        
        // 主要區域 - 三條直排
        const mainArea = document.createElement('div');
        mainArea.className = 'table-columns-container';
        
        // 最左邊直排 (桌號2: 14個位置, 桌號3: 6個位置)
        const leftColumn = document.createElement('div');
        leftColumn.className = 'table-column';
        const leftTable1 = createTableCard("2", Array.from({length: 14}, (_, i) => (i + 1).toString()));
        const leftTable2 = createTableCard("3", Array.from({length: 6}, (_, i) => (i + 1).toString()));
        leftColumn.appendChild(leftTable1);
        leftColumn.appendChild(leftTable2);
        
        // 中間直排 (桌號4: 6個位置, 桌號5: 16個位置)
        const centerColumn = document.createElement('div');
        centerColumn.className = 'table-column';
        const centerTable1 = createTableCard("4", Array.from({length: 6}, (_, i) => (i + 1).toString()));
        const centerTable2 = createTableCard("5", Array.from({length: 16}, (_, i) => (i + 1).toString()));
        centerColumn.appendChild(centerTable1);
        centerColumn.appendChild(centerTable2);
        
        // 最右邊直排 (桌號6: 10個位置, 桌號7: 10個位置)
        const rightColumn = document.createElement('div');
        rightColumn.className = 'table-column';
        const rightTable1 = createTableCard("6", Array.from({length: 10}, (_, i) => (i + 1).toString()));
        const rightTable2 = createTableCard("7", Array.from({length: 10}, (_, i) => (i + 1).toString()));
        rightColumn.appendChild(rightTable1);
        rightColumn.appendChild(rightTable2);
        
        mainArea.appendChild(leftColumn);
        mainArea.appendChild(centerColumn);
        mainArea.appendChild(rightColumn);
        
        floorPlan.appendChild(topRow);
        floorPlan.appendChild(mainArea);
        
        console.log('Floor plan generated');
    }

    // 創建桌子卡片
    function createTableCard(tableNum, seats) {
        const tableCard = document.createElement('div');
        tableCard.className = 'table-card';
        tableCard.dataset.table = tableNum;
        
        const tableHeader = document.createElement('div');
        tableHeader.className = 'table-header';
        tableHeader.innerHTML = `<div class="table-number">桌號 ${tableNum}</div>`;
        
        const seatsGrid = document.createElement('div');
        seatsGrid.className = 'seats-grid';
        
        seats.forEach(seatCode => {
            const seat = document.createElement('div');
            seat.className = 'seat available';
            seat.textContent = seatCode;
            seat.dataset.seat = seatCode;
            seat.dataset.table = tableNum;
            
            // 檢查是否有賓客坐在這個位置
            const guest = guestData.find(g => g.seatNumber === seatCode && g.tableNumber === tableNum);
            if (guest) {
                seat.classList.remove('available');
                seat.classList.add('occupied');
                seat.title = guest.name;
                
                // 添加點擊事件顯示賓客資訊
                seat.addEventListener('click', () => {
                    displayResultCard('found', guest);
                    highlightSeat(guest);
                });
        } else {
                // 空位點擊事件
                seat.addEventListener('click', () => {
                    seat.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        seat.style.transform = '';
                    }, 150);
                });
            }
            
            seatsGrid.appendChild(seat);
        });
        
        tableCard.appendChild(tableHeader);
        tableCard.appendChild(seatsGrid);
        
        return tableCard;
    }

    // 高亮顯示座位
    function highlightSeat(guest) {
        clearHighlights();
        
        const seatElement = document.querySelector(`[data-seat="${guest.seatNumber}"][data-table="${guest.tableNumber}"]`);
        if (seatElement) {
            seatElement.classList.remove('occupied');
            seatElement.classList.add('highlighted');
            currentHighlightedGuest = guest;
            
            // 滾動到座位位置
            seatElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }

    // 清除所有高亮
    function clearHighlights() {
        const highlightedSeats = document.querySelectorAll('.seat.highlighted');
        highlightedSeats.forEach(seat => {
            seat.classList.remove('highlighted');
            // 恢復原本的狀態
            const guest = guestData.find(g => 
                g.seatNumber === seat.dataset.seat && 
                g.tableNumber === seat.dataset.table
            );
            if (guest) {
                seat.classList.add('occupied');
            } else {
                seat.classList.add('available');
            }
        });
        currentHighlightedGuest = null;
    }

    // 智能搜尋功能
    function performSearch(searchTerm) {
        console.log('Performing search for:', searchTerm);
        
        if (!searchTerm) {
            hideSuggestions();
            displayResultCard('initial');
            clearHighlights();
        return;
    }
    
        // 模糊搜尋：包含搜尋詞的所有賓客
        filteredGuests = guestData.filter(guest => 
        guest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
        console.log('Found guests:', filteredGuests.length, filteredGuests);

        if (filteredGuests.length > 0) {
            showSuggestions(filteredGuests);
            displayResultCard('initial'); // 隱藏結果卡片，顯示建議清單
            clearHighlights();
    } else {
            hideSuggestions();
            displayResultCard('no-result', { name: searchTerm });
            clearHighlights();
        }
    }

    // 顯示建議清單
    function showSuggestions(guests) {
        console.log('Showing suggestions for:', guests.length, 'guests');
        suggestionsList.innerHTML = '';
        selectedIndex = -1;

        guests.forEach((guest, index) => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.dataset.index = index;
            
            item.innerHTML = `
                <span class="material-icons-outlined">person</span>
                <div class="guest-name">${guest.name}</div>
                <div class="guest-info">桌${guest.tableNumber} - 座${guest.seatNumber}</div>
            `;

            item.addEventListener('click', () => {
                selectGuest(guest);
            });

            item.addEventListener('mouseenter', () => {
                selectedIndex = index;
                updateSelectedItem();
            });

            suggestionsList.appendChild(item);
        });

        suggestionsList.classList.add('show');
        console.log('Suggestions list shown');
    }

    // 隱藏建議清單
    function hideSuggestions() {
        console.log('Hiding suggestions');
        suggestionsList.classList.remove('show');
        selectedIndex = -1;
    }

    // 更新選中的項目
    function updateSelectedItem() {
        const items = suggestionsList.querySelectorAll('.suggestion-item');
        items.forEach((item, index) => {
            item.classList.toggle('selected', index === selectedIndex);
        });
    }

    // 選擇賓客
    function selectGuest(guest) {
        console.log('Guest selected:', guest);
        searchInput.value = guest.name;
        hideSuggestions();
        displayResultCard('found', guest);
        highlightSeat(guest);
    }

    // 事件監聽器
    searchInput.addEventListener('input', (e) => {
        console.log('Input event:', e.target.value);
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(searchInput.value.trim());
        }, 200);
    });

    // 鍵盤導航
    searchInput.addEventListener('keydown', (e) => {
        const items = suggestionsList.querySelectorAll('.suggestion-item');
        
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (suggestionsList.classList.contains('show')) {
                    selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                    updateSelectedItem();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (suggestionsList.classList.contains('show')) {
                    selectedIndex = Math.max(selectedIndex - 1, -1);
                    updateSelectedItem();
                }
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && filteredGuests[selectedIndex]) {
                    selectGuest(filteredGuests[selectedIndex]);
                }
                break;
            case 'Escape':
                hideSuggestions();
                break;
        }
    });

    // 點擊外部隱藏建議清單
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
            hideSuggestions();
        }
    });

    // 顯示結果卡片
    function displayResultCard(state, data = {}) {
        console.log('Displaying result card:', state, data);
        resultCardContainer.innerHTML = '';

        const card = document.createElement('div');
        card.className = `result-card ${state}`;

        let icon, title, message;

        switch (state) {
            case 'initial':
                icon = 'celebration';
                title = '歡迎光臨';
                message = '請在上方欄位輸入您的姓名，我們將為您指引座位。';
                break;
            case 'no-result':
                icon = 'search_off';
                title = '找不到您的名字';
                message = `我們無法在名單上找到「${data.name}」。請確認姓名是否正確，或洽詢現場招待人員。`;
                break;
            case 'found':
                icon = 'confirmation_number';
                title = `你好, ${data.name}!`;
                message = `為您找到座位了，請參考以下資訊：`;
                break;
            case 'error':
                 icon = 'error_outline';
                 title = '發生錯誤';
                 message = data.message;
                 break;
        }

        let cardContent = `
            <span class="material-icons-outlined icon">${icon}</span>
            <h2>${title}</h2>
            <p>${message}</p>
        `;
        
        if (state === 'found') {
            cardContent += `
                <div class="seat-details">
                    <div class="detail-item">
                        <span class="detail-label">桌號</span>
                        <span class="detail-value">${data.tableNumber}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">座位</span>
                        <span class="detail-value">${data.seatNumber}</span>
                    </div>
                </div>
            `;
        }
        
        card.innerHTML = cardContent;
        resultCardContainer.appendChild(card);
    }

    // 初始化
    console.log('Initializing application');
    generateFloorPlan();
    displayResultCard('initial');
});


// 生成座位平面圖 - 直式排列配置
function generateFloorPlan() {
    floorPlan.innerHTML = '';
    
    // 最上面橫排12個位置 (桌號1)
    const topRow = document.createElement('div');
    topRow.className = 'table-row top-row';
    const topTable = createTable("1", Array.from({length: 12}, (_, i) => (i + 1).toString()));
    topRow.appendChild(topTable);
    
    // 主要區域 - 三條直排
    const mainArea = document.createElement('div');
    mainArea.className = 'main-area';
    
    // 最左邊直排 (桌號2: 14個位置, 桌號3: 6個位置)
    const leftColumn = document.createElement('div');
    leftColumn.className = 'table-column left-column';
    const leftTable1 = createTable("2", Array.from({length: 14}, (_, i) => (i + 1).toString()));
    const leftTable2 = createTable("3", Array.from({length: 6}, (_, i) => (i + 1).toString()));
    leftColumn.appendChild(leftTable1);
    leftColumn.appendChild(leftTable2);
    
    // 中間直排 (桌號4: 6個位置, 桌號5: 16個位置)
    const centerColumn = document.createElement('div');
    centerColumn.className = 'table-column center-column';
    const centerTable1 = createTable("4", Array.from({length: 6}, (_, i) => (i + 1).toString()));
    const centerTable2 = createTable("5", Array.from({length: 16}, (_, i) => (i + 1).toString()));
    centerColumn.appendChild(centerTable1);
    centerColumn.appendChild(centerTable2);
    
    // 最右邊直排 (桌號6: 10個位置, 桌號7: 10個位置)
    const rightColumn = document.createElement('div');
    rightColumn.className = 'table-column right-column';
    const rightTable1 = createTable("6", Array.from({length: 10}, (_, i) => (i + 1).toString()));
    const rightTable2 = createTable("7", Array.from({length: 10}, (_, i) => (i + 1).toString()));
    rightColumn.appendChild(rightTable1);
    rightColumn.appendChild(rightTable2);
    
    mainArea.appendChild(leftColumn);
    mainArea.appendChild(centerColumn);
    mainArea.appendChild(rightColumn);
    
    floorPlan.appendChild(topRow);
    floorPlan.appendChild(mainArea);
}

// 創建單個桌子
function createTable(tableNum, seats) {
    const tableDiv = document.createElement('div');
    tableDiv.className = 'table';
    tableDiv.dataset.table = tableNum;
    
    const tableNumberDiv = document.createElement('div');
    tableNumberDiv.className = 'table-number';
    tableNumberDiv.textContent = `桌號 ${tableNum}`;
    
    const seatsDiv = document.createElement('div');
    seatsDiv.className = 'seats';
    
    seats.forEach(seatCode => {
        const seatDiv = document.createElement('div');
        seatDiv.className = 'seat available';
        seatDiv.textContent = seatCode;
        seatDiv.dataset.seat = seatCode;
        seatDiv.dataset.table = tableNum;
        
        // 檢查是否有賓客坐在這個位置
        const guest = guestData.find(g => g.seatNumber === seatCode && g.tableNumber === tableNum);
        if (guest) {
            seatDiv.classList.remove('available');
            seatDiv.classList.add('occupied');
            seatDiv.title = guest.name;
        }
        
        seatsDiv.appendChild(seatDiv);
    });
    
    tableDiv.appendChild(tableNumberDiv);
    tableDiv.appendChild(seatsDiv);
    
    return tableDiv;
}

// 高亮顯示座位
function highlightSeat(guest) {
    clearHighlights();
    
    const seatElement = document.querySelector(`[data-seat="${guest.seatNumber}"][data-table="${guest.tableNumber}"]`);
    if (seatElement) {
        seatElement.classList.remove('occupied');
        seatElement.classList.add('highlighted');
        
        // 滾動到座位位置
        seatElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}

// 清除所有高亮
function clearHighlights() {
    const highlightedSeats = document.querySelectorAll('.seat.highlighted');
    highlightedSeats.forEach(seat => {
        seat.classList.remove('highlighted');
        // 恢復原本的狀態
        const guest = guestData.find(g => 
            g.seatNumber === seat.dataset.seat && 
            g.tableNumber === seat.dataset.table
        );
        if (guest) {
            seat.classList.add('occupied');
        } else {
            seat.classList.add('available');
        }
    });
}

// 添加一些動畫效果
function addAnimationEffects() {
    // 為搜尋按鈕添加點擊效果
    searchBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
    
    // 為座位添加懸停效果
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('seat')) {
            e.target.style.transform = 'scale(1.1)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('seat')) {
            e.target.style.transform = '';
        }
    });
}

// 初始化動畫效果
addAnimationEffects();
