const animals = [
    {
        ten: "Chó",
        anh: "img/dog/dog_1.jpg",
        thuvien: [
            "img/dog/dog_1.jpg",
            "img/dog/dog_2.jpg",
            "img/dog/dog_3.jpg",
            "img/dog/dog_4.jpeg",
            "img/dog/dog_5.jpg"
        ]
    },
    {
        ten: "Mèo",
        anh: "img/cat/cat_1.jpg",
        thuvien: [
            "img/cat/cat_1.jpg",
            "img/cat/cat_2.jpg",
            "img/cat/cat_3.jpg",
            "img/cat/cat_4.jpg",
            "img/cat/cat_5.jpg"
        ]
    },
    {
        ten: "Voi",
        anh: "img/elephant/elephant_1.jpg",
        thuvien: [
            "img/elephant/elephant_1.jpg",
            "img/elephant/elephant_2.jpg",
            "img/elephant/elephant_3.jpg",
            "img/elephant/elephant_4.jpg",
            "img/elephant/elephant_5.jpg"
        ]
    },
    {
        ten: "Khỉ",
        anh: "img/monkey/monkey_1.jpg",
        thuvien: [
            "img/monkey/monkey_1.jpg",
            "img/monkey/monkey_5.jpg",
            "img/monkey/monkey_3.jpg",
            "img/monkey/monkey4.jpg",
            "img/monkey/monkey_2.jpg"
        ]
    },
    {
        ten: "Đại bàng",
        anh: "img/eagle/eagle_1.jpg",
        thuvien: [
            "img/eagle/eagle_1.jpg",
            "img/eagle/eagle_2.jpg",
            "img/eagle/eagle_3.jpg",
            "img/eagle/eagle_4.jpg",
            "img/eagle/eagle_5.jpg"
        ]
    }
];
const danhSachDiv = document.getElementById('danhsach');
const thuVienDiv = document.getElementById('thuvienanh');

function hienThiDanhSach() {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        
        card.addEventListener("click", () =>{
            hienThiThuVien(animal.thuvien)
        });
        
        danhSachDiv.appendChild(card);
    });
}
function hienThiThuVien(danhSachAnh) {
    thuVienDiv.innerHTML = "";
    
    danhSachAnh.forEach(duongDan => {
        const img = document.createElement('img');
        img.src = duongDan;
        img.className = 'gallery-item';
        thuVienDiv.appendChild(img);
    });
}

hienThiDanhSach();
