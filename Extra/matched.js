const numbers = [24, 65, 87, 45];

// simple for loop
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// for-of loop
// for(const number of numbers) {
//     console.log(number);
// }

const products = [
    {id: 1, name: 'walton phone', price: 19000},
    {id: 2, name: 'xiomi phone', price: 19000},
    {id: 3, name: 'iPhone', price: 19000},
    {id: 4, name: 'samsung phone', price: 19000},
    {id: 5, name: 'vivo phone', price: 19000},
    {id: 6, name: 'msi laptop', price: 19000},
    {id: 7, name: 'lenovo laptop', price: 19000},
    {id: 8, name: 'hp laptop', price: 19000},
    {id: 9, name: 'techno laptop', price: 19000},
    {id: 10, name: 'Phone no one', price: 19000}
];

// for(const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);