// let hoTen = "Nguyễn Văn A";
// type:
// primintive value: giá trị cơ bản
let hoTen = "string";
let luong = 1000;
let valid = true;
let result10 = undefined;
let userLogin = null;
let nv = { ma: 1, hoTen: "Nguyễn Van A", luongCB: 1000 };
let resultServer = null;
let prod = {
    id: "1",
    name: "thanh nhã",
    price: 1000,
    img: "ssss",
    desc: "abc",
};
let btn = {
    id: "btn-1",
    innerHTML: "Button-1",
    className: "btn",
    css: "abc",
};
class FoodList {
}
// type của function
let tinhTong = (num1, num2) => {
    return num1 + num2;
};
let showMess = (mess) => {
    console.log("hello", mess);
};
function main(callback) {
    // renderr ra giao diện nội dụng gì đó
    callback("Hello Thanh Nhã");
}
const renderH1 = (title) => {
    document.querySelector("body").innerHTML = `<h1>${title}</h1>`;
};
const renderDiv = (title) => {
    document.querySelector("body").innerHTML = `<div class='bg-dark text-white p-5 text-center'>${title}</div>`;
};
main(renderDiv);
// Kiểu dữ liệu của mảng
let arrNumber = [1, 2, 3, 4, 5];
let arrProd = [
    { id: 1, name: "thanh Nhã", price: 1000, img: "12324" },
    { id: 2, name: "thanh Nhã", price: 2000, img: "12324" },
    { id: 3, name: "thanh Nhã", price: 3000, img: "12324" },
    { id: 4, name: "thanh Nhã", price: 4000, img: "12324" },
];
// tuple: thể hiên của dữ liệu dưới dạng mảng
let result = [
    1,
    (newNumber) => {
        return newNumber;
    },
];
let sv = [1, "nguyễn Văn a"];
// kiểu dữ liệu any, unkown
// any , unknow: Nhận tất cả giá trị . Tuy nhiên unknow phải check kiểu dữ liệu mới được thực hiện operation
let result20 = "abc";
// any cho phép thực thi operation (+-*/ gọi hàm ...)
class ProductType {
    constructor() {
        this.id = "";
        this.name = "";
        this.img = "";
    }
    showInfo() {
        console.log("id", this.id);
        console.log("name", this.name);
        console.log("img", this.img);
    }
}
let prod1 = new ProductType();
prod1.id = "1";
prod1.name = "Product";
prod1.img = "https://picsuum.photo";
let result30 = 1;
if (result30 instanceof ProductType) {
    result30.showInfo();
}
if (typeof result30 == "number") {
    result30++;
}
/*
    access modifier:
    + private: trong class sử dụng, instance (đối tượng tạo từ calss đó) không truy xuất được. Lớp con không thể sữ dụng được
    + protected: trong class con có thể sự dụng được , instance không sữ dụng được, class con co thể sử dụng
    + pucblic (mặc đinh): tất cả đều truy xuất được
*/
class NhanVienCyber {
    constructor() {
        this.maNhanVien = "";
        this.tenNhanVien = "";
        this.luongCB = 1000;
        this.heSoLuong = 1;
    }
    tinhLuong() {
        return this.heSoLuong * this.luongCB;
    }
    tinhPhuCap() {
        return this.tinhLuong() + 1000;
    }
}
class NhanVienKeToanCyyber extends NhanVienCyber {
    keToan() { }
}
let nv1 = new NhanVienCyber();
nv1.maNhanVien = 1;
nv1.tenNhanVien = "A";
// nv1.luongCB = 5000;
console.log(nv1.tinhLuong());
let nv2 = new NhanVienKeToanCyyber();
nv2.maNhanVien = 1;
nv2.tenNhanVien = "B";
console.log(nv2.tinhLuong());
