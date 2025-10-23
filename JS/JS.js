// ==============================================
// 1. DATA MẶC ĐỊNH & HÀM CHUNG
// ==============================================

// Nguồn dữ liệu sách TẬP TRUNG.
const BOOKS = {
    'book-conan': { id: 'book-conan', title: "Thám tử lừng danh Conan - Tập 106", price: 25000, img: "/anh/conan.jpg", description: "Tập mới nhất trong series trinh thám nổi tiếng...", author: "Gosho Aoyama" },
    'book-jjk': { id: 'book-jjk', title: "Chú thuật hồi chiến -Tập 25", price: 25000, img: "/anh/jjk.jpg", description: "Diễn biến trận chiến căng thẳng với Sukuna...", author: "Gege Akutami" },
    'book-muado': { id: 'book-muado', title: "Mưa Đỏ", price: 60000, img: "/anh/muado.jpg", description: "Tiểu thuyết chiến trường thành cổ Quảng trị...", author: "Chu Lai" },
    'book-hodiep': { id: 'book-hodiep', title: "Hồ điệp và kình ngư", price: 100000, img: "/anh/hodiep.jpg", description: "Câu chuyện lãng mạn, cảm động...", author: "Nguyễn Văn A" },
    'book-kny': { id: 'book-kny', title: "Thanh gươm diệt quỷ - Tập 13", price: 30000, img: "/anh/kny.webp", description: "Cuộc chiến chống lại quỷ dữ...", author: "Koyoharu Gotouge" },
    'book-sakamoto': { id: 'book-sakamoto', title: "Sakamoto Days -Tập 23", price: 146000, img: "/anh/sakamoto.webp", description: "Hành trình trở lại của sát thủ huyền thoại.", author: "Yūto Suzuki" },
    'book-sakamoto1': { id: 'book-sakamoto1', title: "Sakamoto Days -Tập 18", price: 45000, img: "/anh/sakamoto18.webp", description: "Hành trình chống lại tổ chức X của sakamoto", author: "Yūto Suzuki" },
    'book-quayroi': { id: 'book-quayroi', title: "Quấy Rối Tinh Thần...", price: 122000, img: "/anh/qu_y-r_i-6.jpg", description: "Nội dung học thuật về bạo lực...", author: "Marie-France Hirigoyen" },
    'book-nhat': { id: 'book-nhat', title: "Tự học tiếng Nhật...", price: 85000, img: "/anh/Nhat.jpg", description: "Sách tự học cho người mới bắt đầu.", author: "Minh Tâm" },
    'book-nuoicon': { id: 'book-nuoicon', title: "nuôi con không phải là cuộc chiến 2", price: 60000, img: "/anh/nuoicon.jpg", description: "Cẩm nang nuôi dạy con cái...", author: "Erin J." },
    'book-toan': { id: 'book-toan', title: "Tuyển chọn 400 bài tập trắc nhiệm toán", price: 50000, img: "/anh/z7121690948394_6a966ef003701d3ac710eba75b90d6f0.jpg", description: "Tài liệu ôn thi trắc nghiệm Toán.", author: "Nguyễn B" },
    'book-giau':{id: 'book-giau',title:"Nghĩ giàu làm giàu",price:150000,img:"/anh/giau.jpg",description:"hành trình làm giàu",author:"Việt Hương dịch"},
    'book-tiengphap': { id: 'book-tiengphap', title: "3000 từ vựng tiếng Pháp cho người mới bắt đầu", price: 85000, img: "/anh/Phap.jpg", description: "Sách học tiếng Pháp cơ bản dành cho người mới bắt đầu.", author: "Phạm Thúy Duyên" },
    'book-tienganh': { id: 'book-tienganh', title: "Luyện thi đánh giá năng lực môn tiếng anh", price: 85000, img: "/anh/z7121690879166_f6326a3aa64a4d7204639b6a3641365f.jpg", description: "Sách học tiếng Anh cơ bản dành cho người mới bắt đầu.", author: "Nguyễn Hiển-Phạm Hương-Lê Nga-Minh Nguyệt" },
    'book-bluelock': { id: 'book-bluelock', title: "Blue Lock - Tập 1", price: 33000, img: "/anh/bluelock_bia_tap-23.webp", description: "Câu chuyện về cuộc thi tuyển chọn tiền đạo xuất sắc nhất Nhật Bản.", author: "Muneyuki Kaneshiro" },
    'book-caubesieunhan': { id: 'book-caubesieunhan', title: "Cậu bé siêu nhân - Tập 1", price: 33000, img: "/anh/peckman.jpg", description: "Cuộc phiêu lưu của cậu bé với siêu năng lực.", author: "Fujiko Fujio" },
    'book-onepunchman': { id: 'book-onepunchman', title: "One Punch Man - Tập 1", price: 35000, img: "/anh/omp.jpg", description: "Câu chuyện về anh hùng Saitama, người có khả năng đánh bại mọi kẻ thù chỉ bằng một cú đấm.", author: "One,Yusuke Murata" },
    'book-nguoiba': { id: 'book-nguoiba', title: "Người bà tài giỏi", price: 90000, img: "/anh/saga.jpg", description: "Nội dung chính kể về tuổi thơ của chính tác giả (tên thật là Akihiro Tokunaga) khi ông được gửi về sống với người bà của mình tại vùng quê Saga nghèo khó sau chiến tranh. Dù cuộc sống vô cùng thiếu thốn, nhưng người bà đã dạy dỗ cậu bé bằng sự lạc quan, trí tuệ và những bí kíp sinh tồn độc đáo, hài hước nhưng đầy sâu sắc.",author: "Yoshichi Shimada, Akihiro Tokunaga" },
    'book-tottorosan': { id: 'book-totto', title: "Totto-chan bên cửa sổ", price: 102000, img: "/anh/toto.webp", description: "Đây là cuốn tự truyện của tác giả Kuroyanagi Tetsuko kể về thời thơ ấu của mình khi bà theo học tại một ngôi trường tiểu học rất đặc biệt tên là Tomoe Gakuen, dưới sự dìu dắt của thầy hiệu trưởng Kobayashi Sosaku.",author: "Kuroyanagi Tetsuko" },
    'book-ove': { id: 'book-ove', title: "Người đàn ông mang tên Ove", price: 100000, img: "/anh/ove.jpg", description: "Người đàn ông mang tên Ove kể về Ove, một ông già góa vợ, gắt gỏng và cực kỳ nguyên tắc, người tin rằng cuộc đời mình đã kết thúc sau khi mất vợ và mất việc. Ông quyết định tự tử, nhưng mọi kế hoạch của ông liên tục bị phá hỏng bởi gia đình hàng xóm mới ồn ào. Qua những tình huống dở khóc dở cười, những con người phiền phức này vô tình kéo Ove trở lại với cuộc sống, hé lộ một trái tim ấm áp ẩn sau vẻ ngoài cộc cằn và cho ông một lý do mới để tiếp tục sống.", author: "Fredrik Backman" },
    'book-child' : { id: 'book-child', title: "What's my child thinking ", price: 50000, img: "/anh/think.jpg", description: "Đây là một cuốn sách cẩm nang tâm lý học dành cho cha mẹ, giúp giải mã các hành vi và suy nghĩ của trẻ em (thường là ở độ tuổi từ 2-7).", author: "Tanith Carey" },
    'book-congnghe': { id: 'book-congnghe', title: "Sóng thần công nghệ", price: 150000, img: "/anh/congnghe.jpg", description: "Đây là cuốn sách phân tích về làn sóng công nghệ mới, đặc biệt là Trí tuệ nhân tạo (AI) và công nghệ sinh học, cũng như những tác động to lớn (cả cơ hội và thách thức) mà chúng sắp mang lại cho nhân loại.", author: "Mustafa Suleyman-Michael Bhaskar" },
    'book-bccn': { id: 'book-bccn', title: "Quy luật bản chất con người", price: 150000, img: "/anh/btcn.jpg", description: "Đây là một tác phẩm nổi tiếng của Robert Greene, tác giả của 48 nguyên tắc chủ chốt của quyền lực. Cuốn sách này phân tích sâu về các động cơ, hành vi và xu hướng tâm lý phổ quát của con người.", author: "Robert Greene" },
    'book-ganghiengiay': { id: 'book-ganghiengiay', title: "Gã nghiện giày", price: 80000, img: "/anh/nike.jpg", description: "Đây là cuốn tự truyện của Phil Knight, nhà đồng sáng lập thương hiệu Nike, kể về hành trình khởi nghiệp đầy gian nan để xây dựng nên một trong những tập đoàn thể thao lớn nhất thế giới.", author: "Phil Knight" },
    'book-kheoannoi':{id:'book-kheoannoi',title:"Khéo ăn nói sẽ có được thiên hạ",price:80000,img:"/anh/kheoannoi.jpg",description:"Đây là một cuốn sách dạy ăn nói",author:"Trạc Nhã"},
    'book-Han':{id:'book-Han',title:"169 mẫu văn bản tiếng Hàn công sở",price:70000,img:"/anh/Han.jpg",description:"Đây là văn mẫu tiếng Hàn công sở",author:"Th.S Lê Huy Khoa"},
    'book-saga':{id:'book-saga',title:"Người bà tài giỏi SaGa",price:90000,img:"/anh/saga.jpg",description:"Câu chuyện kể về người bà Saga",author:"yoshichi shimada"},
    'book-hoathom': { id: 'book-hoathomkieuhanh', title: "Hoa thơm kiều hãnh", price: 52000, img: "/anh/hoathomkieuhanh.webp", description: "Câu chuyện lấy bối cảnh tại hai trường trung học nằm sát cạnh nhau nhưng lại đối lập nhau 'một trời một vực'.",author: "Saka Mikami" } ,
    'book-hoa':{id:'book-hoa',title:"Đột phá tư duy môn hóa học",price:120000,img:"/anh/z7121690843590_49d67eafe2e861cb4f298b8b7d860ac6.jpg",description:"Bài tập hóa học nâng cao",author:"Nhóm tác giả"},
    'book-vatli':{id:'book-vatli',title:"Hướng dẫn ôn thi tốt nghiệp THPT môn vật lí",price:120000,img:"/anh/z7121690824500_e2723978c0aa636eb38a7c5f91f9f649.jpg",description:"Bài tập vật lí THPT",author:"Nguyễn Đực Hiệp"},
    'book-TBN':{id:'book-TBN',title:"Ngữ pháp tiếng Tây Ban Nha căn bản",price:100000,img:"/anh/TBN.jpg",description:"Dạy học tiếng Tây Ban Nha căn bản",author:"TS.Nguyễn Thị Kim Dung và Th.S Nguyễn Hà My"},
     'book-toan1': { id: 'book-toan', title: "toán 12", price: 18000, img: "/anh/toan.webp", description: "Sách bài tập toán.", author: "Đỗ Đức Thái" },
};

// Khởi tạo giỏ hàng và mã giảm giá từ localStorage
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
let appliedCoupon = null;

/**
 * Hàm chuyển đổi hiển thị giữa các "trang" (sections).
 */
const showPage = (pageId) => {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) dropdown.classList.remove('show-dropdown');

    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.style.display = 'block';
    } else {
        document.getElementById('home-content').style.display = 'block';
    }

    if (pageId === 'cart') {
        appliedCoupon = null; // Reset mã giảm giá khi vào trang giỏ hàng
        renderCart(); 
    } else if (pageId === 'profile') {
        renderProfile();
    } else if (pageId === 'history') {
        renderOrderHistory();
    } else if (pageId === 'admin') {
        // Cập nhật dữ liệu cho trang admin khi mở
        computeRevenueStats();
        renderCouponsList();
    }
};

const updateCartCount = () => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) cartCountElement.textContent = totalItems;
};

const saveCart = () => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartCount();
};


// ==============================================
// 2. LOGIC TRANG CHỦ & SLIDER
// ==============================================
const setupSlider = () => {
    const slides = document.querySelectorAll('#hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dot');
    if (slides.length === 0) return;
    let currentSlide = 0;
    let sliderInterval = setInterval(nextSlide, 5000);

    function showSlide(index) {
        slides.forEach((slide, i) => slide.classList.toggle('active-slide', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active-dot', i === index));
    };

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentSlide = parseInt(e.target.dataset.slide);
            showSlide(currentSlide);
            clearInterval(sliderInterval);
            sliderInterval = setInterval(nextSlide, 5000); 
        });
    });
    showSlide(0);
};


// ==============================================
// 3. LOGIC CHI TIẾT SÁCH (MODAL)
// ==============================================
function showBookDetail(bookId, event) {
    if (event) event.preventDefault(); 
    const book = BOOKS[bookId];
    if (!book) return;

    document.getElementById('modal-book-img').src = book.img;
    document.getElementById('modal-book-title').textContent = book.title;
    document.getElementById('modal-book-price').textContent = book.price.toLocaleString('vi-VN') + ' VNĐ';
    document.getElementById('modal-book-author').textContent = book.author;
    document.getElementById('modal-book-description').textContent = book.description;
    document.getElementById('modal-add-to-cart-btn').setAttribute('data-book-id', bookId);
    document.getElementById('book-detail-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('book-detail-modal').style.display = 'none';
}


// ==============================================
// 4. LOGIC GIỎ HÀNG VÀ THANH TOÁN
// ==============================================
const addToCart = (bookId) => {
    const book = BOOKS[bookId]; 
    if (!book) return;
    
    const cartItem = cart.find(item => item.id === bookId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ id: book.id, title: book.title, price: book.price, quantity: 1 });
    }
    saveCart();
    alert(`Đã thêm "${book.title}" vào giỏ hàng!`);
};

const removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart(); 
};

const updateQuantity = (id, newQuantity) => {
    const item = cart.find(i => i.id === id);
    if (item) {
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            // Nếu số lượng <= 0, xóa sản phẩm
            removeFromCart(id);
            return; // Dừng hàm tại đây
        }
    }
    saveCart();
    renderCart(); 
};

const renderCart = () => {
    const cartBody = document.getElementById('cart-items-body');
    const cartSubtotalEl = document.getElementById('cart-subtotal');
    const cartTotalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const couponFeedbackEl = document.getElementById('coupon-feedback');
    const couponInputEl = document.getElementById('coupon-code');

    if (!cartBody) return;

    // Reset giao diện mã giảm giá
    if (couponFeedbackEl) couponFeedbackEl.textContent = '';
    if (couponInputEl) couponInputEl.value = '';

    cartBody.innerHTML = '';
    let subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    let total = subtotal;

    if (cart.length === 0) {
        cartBody.innerHTML = '<tr><td colspan="5">Giỏ hàng trống.</td></tr>';
        if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
        if (checkoutBtn) checkoutBtn.disabled = false;
        cart.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            const row = cartBody.insertRow();
            row.innerHTML = `
                <td>${item.title}</td>
                <td>${item.price.toLocaleString('vi-VN')} VNĐ</td>
                <td><input type="number" min="0" value="${item.quantity}" onchange="updateQuantity('${item.id}', this.valueAsNumber)"></td>
                <td>${itemSubtotal.toLocaleString('vi-VN')} VNĐ</td>
                <td><button class="delete-btn" onclick="removeFromCart('${item.id}')">Xóa</button></td>
            `;
        });
    }

    // Áp dụng mã giảm giá nếu có
    if (appliedCoupon) {
        let discount = 0;
        if (appliedCoupon.amount > 0) {
            discount = appliedCoupon.amount;
        } else if (appliedCoupon.percent > 0) {
            discount = subtotal * (appliedCoupon.percent / 100);
        }
        total = Math.max(0, subtotal - discount);
        if (couponFeedbackEl) {
            couponFeedbackEl.textContent = `Đã áp dụng mã "${appliedCoupon.code}"! Giảm ${discount.toLocaleString('vi-VN')} VNĐ.`;
            couponFeedbackEl.className = 'success';
        }
    }

    if (cartSubtotalEl) cartSubtotalEl.textContent = subtotal.toLocaleString('vi-VN') + ' VNĐ';
    if (cartTotalEl) cartTotalEl.textContent = total.toLocaleString('vi-VN') + ' VNĐ';
};

// ==============================================
// 5. LOGIC TRANG CÁ NHÂN VÀ LỊCH SỬ
// ==============================================
function renderProfile() {
    const username = localStorage.getItem('currentUser');
    const email = localStorage.getItem('currentUserEmail');
    document.getElementById('profile-username').textContent = username || 'N/A';
    document.getElementById('profile-email').textContent = email || 'N/A';
}

function renderOrderHistory() {
    const historyList = document.getElementById('order-history-list');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    console.log("Đã đọc orders từ localStorage:", orders); // THÊM DÒNG NÀY

    if (!historyList) { // Thêm kiểm tra historyList tồn tại
        console.error("Lỗi: Không tìm thấy #order-history-list trong HTML!");
        return;
    }

    if (orders.length === 0) {
        console.log("Không có đơn hàng nào để hiển thị."); // THÊM DÒNG NÀY
        historyList.innerHTML = '<p>Bạn chưa có đơn hàng nào.</p>';
        return;
    }

    console.log("Đang render lịch sử đơn hàng..."); // THÊM DÒNG NÀY
    try { // Thêm try...catch để bắt lỗi render
        historyList.innerHTML = orders.reverse().map(order => {
            // Kiểm tra kỹ cấu trúc order trước khi truy cập
            const orderId = order.id || 'N/A';
            const orderDate = order.date || 'N/A';
            const finalTotal = order.finalTotal !== undefined ? order.finalTotal.toLocaleString('vi-VN') : 'N/A';
            const couponUsed = order.couponUsed ? `<p><em>Đã dùng mã: ${order.couponUsed}</em></p>` : '';
            const items = Array.isArray(order.items) ? order.items : []; // Đảm bảo items là mảng

            const itemsHtml = items.map(item =>
                // Kiểm tra item
                `<li>${item.title || 'N/A'} (x${item.quantity || 0})</li>`
            ).join('');
           
            return `
                <div class="order-history-item">
                    <h4>Đơn hàng #${orderId} - ${orderDate}</h4>
                    <p><strong>Tổng thanh toán: ${finalTotal} VNĐ</strong></p>
                    ${couponUsed}
                   <ul>${itemsHtml}</ul>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error("Lỗi khi render lịch sử đơn hàng:", error); // Bắt lỗi nếu có
        historyList.innerHTML = '<p>Đã xảy ra lỗi khi hiển thị lịch sử đơn hàng.</p>';
    }
}


// ==============================================
// 6. LOGIC ĐĂNG NHẬP
// ==============================================
const setupAuth = () => {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    const userIcon = document.getElementById('user-icon');
    const userDropdown = document.getElementById('user-dropdown');
    const usernameDisplay = document.getElementById('username-display');
    const logoutBtn = document.getElementById('logout-btn');
    const loginForm = document.getElementById('login-form');
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
        if (authButtons) authButtons.style.display = 'none';
        if (userMenu) userMenu.style.display = 'flex';
        if (usernameDisplay) usernameDisplay.textContent = currentUser;
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userMenu) userMenu.style.display = 'none';
    }

    if (userIcon) {
        userIcon.addEventListener('click', () => {
            if (userDropdown) userDropdown.classList.toggle('show-dropdown');
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            localStorage.removeItem('currentUserEmail');
            alert('Đã đăng xuất.');
            setupAuth();
            showPage('home');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const username = email.split('@')[0];
            localStorage.setItem('currentUser', username);
            localStorage.setItem('currentUserEmail', email);
            alert(`Đăng nhập thành công! Chào mừng, ${username}!`);
            document.getElementById('login-form').reset();
            showPage('home');
            setupAuth();
        });
    }
};


// ==============================================
// 7. LOGIC ADMIN
// ==============================================

function computeRevenueStats() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const today = new Date().toLocaleDateString('vi-VN');
    const thisMonth = (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

    let todayRevenue = 0;
    let monthRevenue = 0;

    orders.forEach(order => {
        const orderDate = new Date(order.timestamp);
        const orderDateStr = orderDate.toLocaleDateString('vi-VN');
        const orderMonthStr = (orderDate.getMonth() + 1) + "/" + orderDate.getFullYear();

        if (orderDateStr === today) {
            todayRevenue += order.finalTotal;
        }
        if (orderMonthStr === thisMonth) {
            monthRevenue += order.finalTotal;
        }
    });

    const revenueTodayEl = document.getElementById('revenue-today');
    const revenueMonthEl = document.getElementById('revenue-month');
    
    if(revenueTodayEl) revenueTodayEl.textContent = todayRevenue.toLocaleString('vi-VN') + ' VNĐ';
    if(revenueMonthEl) revenueMonthEl.textContent = monthRevenue.toLocaleString('vi-VN') + ' VNĐ';
}

function renderCouponsList() {
    const coupons = JSON.parse(localStorage.getItem('coupons')) || [];
    const listEl = document.getElementById('coupons-list');
    if (!listEl) return;
    
    if (coupons.length === 0) {
        listEl.innerHTML = '<p>Chưa có mã giảm giá nào.</p>';
        return;
    }

    listEl.innerHTML = coupons.map(coupon => {
        const discountText = coupon.amount > 0 
            ? `${coupon.amount.toLocaleString('vi-VN')} VNĐ` 
            : `${coupon.percent}%`;
        return `
            <div class="coupon-item">
                <span><strong>${coupon.code}</strong> - (Giảm ${discountText})</span>
                <button class="delete-btn" onclick="deleteCoupon('${coupon.code}')">Xóa</button>
            </div>
        `;
    }).join('');
}

function deleteCoupon(codeToDelete) {
    if (!confirm(`Bạn có chắc muốn xóa mã "${codeToDelete}"?`)) return;
    let coupons = JSON.parse(localStorage.getItem('coupons')) || [];
    coupons = coupons.filter(c => c.code !== codeToDelete);
    localStorage.setItem('coupons', JSON.stringify(coupons));
    renderCouponsList(); // Cập nhật lại danh sách
}

function setupAdminPage() {
    // Xử lý form tạo mã
    const couponForm = document.getElementById('create-coupon-form');
    if (couponForm) {
        couponForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = document.getElementById('new-coupon-code').value.toUpperCase().trim();
            const amount = document.getElementById('new-coupon-amount').valueAsNumber || 0;
            const percent = document.getElementById('new-coupon-percent').valueAsNumber || 0;

            if (!code) {
                alert('Vui lòng nhập mã giảm giá.');
                return;
            }
            if (amount > 0 && percent > 0) {
                alert('Chỉ nhập số tiền hoặc phần trăm, không nhập cả hai.');
                return;
            }

            let coupons = JSON.parse(localStorage.getItem('coupons')) || [];
            if (coupons.some(c => c.code === code)) {
                alert('Mã này đã tồn tại!');
                return;
            }

            coupons.push({ code, amount, percent });
            localStorage.setItem('coupons', JSON.stringify(coupons));
            alert('Tạo mã thành công!');
            couponForm.reset();
            renderCouponsList();
        });
    }

    // Xử lý nút áp dụng mã ở trang giỏ hàng
    const applyBtn = document.getElementById('apply-coupon-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const code = document.getElementById('coupon-code').value.toUpperCase().trim();
            const coupons = JSON.parse(localStorage.getItem('coupons')) || [];
            const coupon = coupons.find(c => c.code === code);
            const feedbackEl = document.getElementById('coupon-feedback');

            if (coupon) {
                appliedCoupon = coupon;
                if (feedbackEl) feedbackEl.className = 'success';
            } else {
                appliedCoupon = null;
                if (feedbackEl) {
                    feedbackEl.textContent = 'Mã không hợp lệ hoặc đã hết hạn.';
                    feedbackEl.className = 'error';
                }
            }
            renderCart(); // Vẽ lại giỏ hàng để cập nhật tổng tiền
        });
    }
}


// ==============================================
// 7.5 LOGIC HOÀN TẤT ĐƠN HÀNG (ĐÃ SỬA)
// ==============================================

// Hàm này BỊ XÓA (vì đã được thay thế bằng handleSuccessfulOrder)
// function completeOrder(successMessage) { ... }

// HÀM MỚI (Từ logic trangchu.js)
function handleSuccessfulOrder(paymentType) {
    alert(`Đặt hàng thành công! (Hình thức: ${paymentType}). Đang chuẩn bị đơn hàng.`);

    // Lấy thông tin từ form
    const name = document.getElementById('cust-name') ? document.getElementById('cust-name').value.trim() : '';
    const phone = document.getElementById('cust-phone') ? document.getElementById('cust-phone').value.trim() : '';
    const address = document.getElementById('cust-address') ? document.getElementById('cust-address').value.trim() : '';

    // Lấy tổng tiền từ giỏ hàng (logic từ hàm completeOrder cũ)
    const subtotal = cart.reduce((t, item) => t + (item.price * item.quantity), 0);
    let finalTotal = subtotal;
    let couponUsed = null;
    if (appliedCoupon) {
        let discount = appliedCoupon.amount > 0 ? appliedCoupon.amount : subtotal * (appliedCoupon.percent / 100);
        finalTotal = Math.max(0, subtotal - discount);
        couponUsed = appliedCoupon.code;
    }

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
        id: 'ORD-' + Date.now().toString().slice(-6),
        date: new Date().toLocaleDateString('vi-VN'),
        timestamp: new Date().toISOString(),
        items: cart,
        finalTotal: finalTotal,
        couponUsed: couponUsed,
        customer: { name: name, phone: phone, address: address } // Lưu cả thông tin khách hàng
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Xóa giỏ hàng
    cart = [];
    appliedCoupon = null;
    saveCart(); // Gọi hàm saveCart() cũ
    
    // Ẩn popup và form
    const qrPopup = document.getElementById('qr-popup');
    if (qrPopup) qrPopup.classList.add('hidden'); // Dùng class 'hidden'
    
    const checkoutFormSection = document.getElementById('checkout-form-section');
    if (checkoutFormSection) checkoutFormSection.style.display = 'none';

    // Về trang chủ
    showPage('home'); 
}


// ==============================================
// 8. KHỞI TẠO CHUNG KHI TRANG TẢI XONG (ĐÃ SỬA)
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    // Thiết lập các sự kiện
    updateCartCount(); 
    setupAuth(); 
    setupSlider(); 
    setupAdminPage(); // Thiết lập sự kiện cho trang admin và mã giảm giá

    // Xử lý sự kiện nút "Thêm vào giỏ" trong modal
    document.getElementById('modal-add-to-cart-btn')?.addEventListener('click', function() {
        const bookId = this.getAttribute('data-book-id');
        if (bookId) {
            addToCart(bookId);
            closeModal();
        }
    });
    
    // Nút "Tiến hành thanh toán" (Nút cũ, vẫn giữ)
    const checkoutBtn = document.getElementById('checkout-btn');
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            
            const checkoutFormSection = document.getElementById('checkout-form-section');
            if (checkoutFormSection) checkoutFormSection.style.display = 'block';
        });
    }

    // === LOGIC MỚI CHO NÚT ĐẶT HÀNG VÀ POPUP QR ===

    // Lấy các phần tử mới
    const orderBtn = document.getElementById('order-btn');
    const qrPopup = document.getElementById('qr-popup');
    const confirmBtn = document.getElementById('confirm-qr-payment-btn');
    const closeBtn = document.getElementById('close-popup-btn');
    const qrTotalEl = document.getElementById('qr-total'); // Lấy span tổng tiền của QR

    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            // Kiểm tra thông tin
            const nameInput = document.getElementById('cust-name');
            const phoneInput = document.getElementById('cust-phone');
            const addressInput = document.getElementById('cust-address');
            
            const name = nameInput ? nameInput.value : '';
            const phone = phoneInput ? phoneInput.value : '';
            const address = addressInput ? addressInput.value : '';

            if (name === '' || phone === '' || address === '') {
                alert('Vui lòng điền đầy đủ thông tin nhận hàng!');
                return; 
            }

            // Kiểm tra phương thức thanh toán
            const paymentMethodInput = document.querySelector('input[name="payment"]:checked');
            if (!paymentMethodInput) {
                alert('Vui lòng chọn hình thức thanh toán!');
                return;
            }
            const paymentMethod = paymentMethodInput.value;

            if (paymentMethod === 'qr') {
                // CẬP NHẬT TỔNG TIỀN TRƯỚC KHI HIỆN
                const finalTotalText = document.getElementById('cart-total').textContent;
                if(qrTotalEl) qrTotalEl.textContent = finalTotalText; 

                // Hiển thị popup QR
                if(qrPopup) qrPopup.classList.remove('hidden'); // Dùng class 'hidden'
            } else if (paymentMethod === 'cod') {
                // Xử lý đơn hàng COD
                handleSuccessfulOrder('Thanh toán khi nhận hàng (COD)');
            }
        });
    }

    // Nút Hủy trên popup
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if(qrPopup) qrPopup.classList.add('hidden'); // Dùng class 'hidden'
        });
    }

    // Nút "Tôi đã thanh toán" trên popup
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            // Xử lý đơn hàng QR
            handleSuccessfulOrder('Thanh toán qua QR');
        });
    }
    // === KẾT THÚC LOGIC MỚI ===


    // Kiểm tra URL để mở trang admin
    if (window.location.search.includes('admin=1')) {
        showPage('admin');
    } else {
        // Mặc định hiển thị trang chủ
        showPage('home');
    }
});