// problem 1
// seer to mon calculator

function seerToMon(seer) {
    // validation codes here
    if (typeof seer != 'number') {
        return 'Please give a number';
    } else if (seer < 0) {
        return 'Please give a positive number';
    }
    // calculator result
    let mon = seer / 40;
    return mon;
}

const weight = seerToMon(1240);
console.log(weight);

// problem 2
// total sales calculator

function totalSales(shirtQuantity, pantsQuantity, shoesQuantity) {
    // validation codes here
    if (typeof shirtQuantity !== 'number' || typeof pantsQuantity !== 'number' || typeof shoesQuantity !== 'number') {
        return 'Please give all quantity in number';
    } else if (shirtQuantity < 0 || pantsQuantity < 0 || shoesQuantity < 0) {
        return 'Please give all quantity in positive number';
    }
    //products item list
    const products = [
        { name: 'shirt', price: 100, quantity: shirtQuantity },
        { name: 'pants', price: 200, quantity: pantsQuantity },
        { name: 'shoes', price: 500, quantity: shoesQuantity }
    ];
    // for loop to print result
    let totalCart = 0;
    for (const product of products) {
        const totalPrice = product.price * product.quantity;
        totalCart += totalPrice;
    }
    return totalCart;
}

const price = totalSales(12, 7, 5);
console.log(price);


// problem 3
// delivery cost calculator

function deliveryCost(quantity) {
    // validation codes here
    if (typeof quantity != 'number') {
        return 'Please give a number';
    } else if (quantity < 0) {
        return 'Please give a positive number';
    }
    // tshirt cost list
    const tshirt100Cost = 100;
    const tshirt200Cost = 80;
    const restTshirtCost = 50;
    if (quantity <= 100) {
        // 100 tshirt delivery cost calculation
        const totalDeliveryCost = quantity * tshirt100Cost;
        return totalDeliveryCost;
    } else if (quantity <= 200) {
        // 200 tshirt delivery cost calculation
        const tshirt100DeliveryCost = 100 * tshirt100Cost;
        const rest100TshirtQuantity = quantity - 100;
        const rest100TshirtDeliveryCost = rest100TshirtQuantity * tshirt200Cost;
        const totalDeliveryCost = tshirt100DeliveryCost + rest100TshirtDeliveryCost;
        return totalDeliveryCost;
    } else {
        //for more then 200 tshirt delivery cost calculation
        const tshirt100DeliveryCost = 100 * tshirt100Cost;
        const rest100TshirtQuantity = 100 * tshirt200Cost;
        const restTshirtQuantity = quantity - 200;
        const restTshirtDeliveryCost = restTshirtQuantity * restTshirtCost;
        // total tshirt cost calculation
        const totalDeliveryCost = tshirt100DeliveryCost + rest100TshirtQuantity + restTshirtDeliveryCost;
        return totalDeliveryCost;
    }
}

const totalCost = deliveryCost(270);
console.log(totalCost);

// problem 4
// perfect friend selector 

let myFriends = ['Shohan', 'Sadman', 'Faiyaz', 'Abrar', 'Adnan'];

function perfectFriend(names) {
    // validation codes here
    if (!Array.isArray(names)) {
        return 'please pass an array';
    }
    // perfect friend result
    for (const element of names) {
        if (element.length == 5) {
            return element;
        }
    }
}

const bestFriend = perfectFriend(myFriends);
console.log(bestFriend);
