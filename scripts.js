// //exercise 1
// factory function

function foodFactory(food, comment, rate, myOrder) {
    addComment(comment, food);
    return {
        name: food.name,
        type: food.type,
        price: food.price * order(myOrder),
        deliverTime: food.deliverTime,
        rate: (food.rate + setRate(rate) / 2),
        comments: food.comments,
        isReady: food.isReady
    }
}

function order(n) {
    if (n % 5 === 0) return 0.8;
    else return 1;
}

function addComment(comment, food) {
    food.comments.push(comment.text)
}

function setRate(rate) {
    return rate;
}

// constructor function
function foodConstructor(food, comment, rate, myOrder) {
    addComment(comment, food);
    return [
        this.name = food.name,
        this.type = food.type,
        this.price = food.price * order(myOrder),
        this.deliverTime = food.deliverTime,
        this.rate = (food.rate + setRate(rate) / 2),
        this.comments = food.comments,
        this.isReady = food.isReady,
    ]

}

const comment = {
    author: 'Maryam Ghasemi',
    data: '1400/08/11',
    rate: 5,
    text: 'bi nazir bood'
}
const food = {
    name: 'burger',
    type: 'fast food',
    price: 30000,
    deliverTime: 20,
    rate: 3,
    comments: ['awli boood :)', 'very bad :|'],
    isReady: false
}
let rate = 2;
myOrder = 20;
console.log('factory function:')
console.log(foodFactory(food, comment, rate, myOrder))
console.log('constructor function:')
console.log(foodConstructor(food, comment, rate, myOrder))

//exercise 2

function checkedObject(obj1, obj2) {
    if ((Object.keys(obj1).length) !== (Object.keys(obj2).length)) {
        return false
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}


function isEqual(obj1, obj2) {

    if ((Object.keys(obj1).length) !== (Object.keys(obj2).length)) {
        return false
    }

    for (let key in obj1) {
        if (typeof (obj1[key]) == 'object') {
            let prt1 = obj1[key]
            let prt2 = obj2[key]
            if (checkedObject(prt1, prt2) === false) {
                return false
            }
        } else {
            if ((obj1[key] !== obj2[key])) {
                return false
            }
        }

    }
    return true
}

function isSame(obj1, obj2) {
    if (obj1 === obj2) {
        return true
    } else {
        return false
    }
}


const obj1 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj2 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj3 = {
    key0: true,
    key1: 'val1',
    key2: 20,
    key3: [0, 1],
    key4: {name: 'ali'},
}
const obj4 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}

console.log('is equal? ', isEqual(obj1, obj2))
console.log('is equal? ', isEqual(obj3, obj4))

let obj5 = {name: 'maryam'}
let obj6 = {name: 'maryam'}
console.log('is same? ', isSame(obj3, obj4))

