const mobiles = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xiomi", price: 18000, camera: "22mp", color: "white" },
  { name: "Oppo", price: 29000, camera: "18mp", color: "black" },
  { name: "Iphone", price: 120000, camera: "43mp", color: "purple" },
  { name: "Infinix", price: 26000, camera: "44mp", color: "orange" },
  { name: "Symphony", price: 9000, camera: "12mp", color: "black" },
];

function getCheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(mobiles);
console.log(cheap);

