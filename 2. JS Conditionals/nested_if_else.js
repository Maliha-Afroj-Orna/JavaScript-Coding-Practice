/**
 * if (condition) {
 *      if (condition) {}
 *      else{}
 * }
 * else {
 * 
 * }
 */

const money = 200;

if (money > 300) {
    console.log("You are rich");
}
else {
    if (money > 100) {
        console.log("Tui middle class");
    }
    else {
        if(money > 0) {
            console.log("You are poor");
        }
        else {
            console.log("Tui amr bondu na");
        }
    }
}