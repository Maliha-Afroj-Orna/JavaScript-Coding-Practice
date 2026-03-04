/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity (chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50; 

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(1, 1, 1);
console.log(wood);



/**
 * shirt --> 500
 * pant --> 300
 * shoe --> 900
 */

function dressQuantity (shirtQuantity, pantQuantity, shoeQuantity) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900; 

    const totalShirtPrice = shirtQuantity * shirtPrice;
    const totalPantPrice = pantQuantity * pantPrice;
    const totalShoePrice = shoeQuantity * shoePrice;
    
    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalPrice;
}

const total = dressQuantity(1, 1, 1);
console.log(total);
