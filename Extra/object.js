// an object can have --> number, string, boolean, array, object, function
const nayok = {
    name: "Sakib Khan",
    id: 121,
    address: "movie cinema",
    isSingle: true,
    friends: ['apu', 'razz', 'salman', 'amir'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],
    act: function() {
        console.log("Acting like sakib khan");
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA',
        }
    }
};

// console.log(nayok);
// console.log(nayok.friends);
// console.log(nayok.car);

nayok.act();