// Danh sách các trang (dễ dàng thêm mới)
const pages = [
    { name: "Trang Chủ", file: "index.html" },
    { name: "Trang 1", file: "page1.html" },
    { name: "Trang 2", file: "page2.html" },
    { name: "Trang 3", file: "page3.html" }
];

// Hàm tạo menu
function createMenu() {
    const menu = document.getElementById("menu");
    pages.forEach(page => {
        const link = document.createElement("a");
        link.href = page.file;
        link.textContent = page.name;
        menu.appendChild(link);
    });
}

// Gọi hàm khi trang tải
window.onload = createMenu;

// Hàm ẩn/hiện menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}