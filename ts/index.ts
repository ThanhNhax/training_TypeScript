// let hoTen = "Nguyễn Văn A";

// type:
// primintive value: giá trị cơ bản
let hoTen: string = "string";
let luong: number = 1000;
let valid: boolean = true;
let result10: undefined = undefined;
let userLogin: null = null;

// reference value(object):
// type : là từ khóa khai biến kiểu dữ liệu
type NhanVien = {
  ma: number;
  hoTen: string;
  luongCB: number;
  moTa?: string;
};
let nv: NhanVien = { ma: 1, hoTen: "Nguyễn Van A", luongCB: 1000 };

type ResponseTypeResult = string | boolean | undefined | NhanVien;
let resultServer: ResponseTypeResult = null;

// interface: Cũng tạo ra 1 định dạng như type

interface Product {
  id: number | string;
  name: string;
  price: number;
  img: string;
}

interface Product {
  desc?: string;
}
let prod: Product = {
  id: "1",
  name: "thanh nhã",
  price: 1000,
  img: "ssss",
  desc: "abc",
};

interface Button {
  id: number | string;
  innerHTML: string;
  className: string;
}
interface ButtoGeadient extends Button {
  css: string;
}
let btn: ButtoGeadient = {
  id: "btn-1",
  innerHTML: "Button-1",
  className: "btn",
  css: "abc",
};

// interface : định dạng dữ liệu cho prototype (class)
interface CRUD {
  create: (newItem) => void;
  updata;
  delete;
  search;
}

class FoodList implements CRUD {
  create: (newItem) => {};
  updata: any;
  delete: any;
  search: any;
}
// type của function
let tinhTong = (num1: number, num2: number): number => {
  return num1 + num2;
};
let showMess = (mess: string): void => {
  console.log("hello", mess);
};

function main(callback: (title: string) => void) {
  // renderr ra giao diện nội dụng gì đó
  callback("Hello Thanh Nhã");
}

const renderH1 = (title: string): void => {
  document.querySelector("body").innerHTML = `<h1>${title}</h1>`;
};
const renderDiv = (title: string): void => {
  document.querySelector(
    "body"
  ).innerHTML = `<div class='bg-dark text-white p-5 text-center'>${title}</div>`;
};
main(renderDiv);

// Kiểu dữ liệu của mảng
let arrNumber: number[] = [1, 2, 3, 4, 5];
let arrProd: Product[] = [
  { id: 1, name: "thanh Nhã", price: 1000, img: "12324" },
  { id: 2, name: "thanh Nhã", price: 2000, img: "12324" },
  { id: 3, name: "thanh Nhã", price: 3000, img: "12324" },
  { id: 4, name: "thanh Nhã", price: 4000, img: "12324" },
];
// tuple: thể hiên của dữ liệu dưới dạng mảng
let result: [number, (newNumber: number) => number] = [
  1,
  (newNumber): number => {
    return newNumber;
  },
];
let sv: [number, string] = [1, "nguyễn Văn a"];

// kiểu dữ liệu any, unkown
// any , unknow: Nhận tất cả giá trị . Tuy nhiên unknow phải check kiểu dữ liệu mới được thực hiện operation
let result20: any = "abc";

// any cho phép thực thi operation (+-*/ gọi hàm ...)

class ProductType {
  id: string = "";
  name: string = "";
  img: string = "";
  showInfo(): void {
    console.log("id", this.id);
    console.log("name", this.name);
    console.log("img", this.img);
  }
}
let prod1 = new ProductType();
prod1.id = "1";
prod1.name = "Product";
prod1.img = "https://picsuum.photo";

let result30: unknown = 1;
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
  maNhanVien: string | number = "";
  tenNhanVien: string = "";
  protected luongCB: number = 1000;
  heSoLuong: number = 1;
  tinhLuong(): number {
    return this.heSoLuong * this.luongCB;
  }
  tinhPhuCap(): number {
    return this.tinhLuong() + 1000;
  }
}

class NhanVienKeToanCyyber extends NhanVienCyber {
  nghiepVuKeToan: string;
  keToan() {}
}
let nv1: NhanVienCyber = new NhanVienCyber();
nv1.maNhanVien = 1;
nv1.tenNhanVien = "A";
// nv1.luongCB = 5000;
console.log(nv1.tinhLuong());

let nv2: NhanVienKeToanCyyber = new NhanVienKeToanCyyber();
nv2.maNhanVien = 1;
nv2.tenNhanVien = "B";
console.log(nv2.tinhLuong());
