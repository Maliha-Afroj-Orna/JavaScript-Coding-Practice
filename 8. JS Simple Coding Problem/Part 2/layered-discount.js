/**
 * first 100 --> 100
 * 101 to 200 --> 90
 * above 200 --> 70
 */
function layeredDiscountedTotal (quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if ( quantity <= 200) {
        const total = (first100Price * 100) + (quantity - 100) * second100Price;
        return total;
    }
    else {
        const total = (first100Price * 100) + (second100Price * 100) + (quantity - 200) * above200Price;
        return total;
    }
}
const layeredDiscount = layeredDiscountedTotal(300);
console.log(layeredDiscount);