const filterOutOdds = (...arr) => arr.filter(num => num % 2 === 0);

function findMin(...arr) {
    return arr.reduce((acc, curr) => {
        return acc > curr ? curr : acc;
    });
}

//const mergeObjects = (Obj1, Obj2) => ({...Obj1, ...Obj2});

function mergeObjects(obj1, obj2) {
    return Obj3 = {...obj1, ...obj2};
} 
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

const extend = (array1, array2) => ([...array1, ...array2]);

const addKeyVal = (obj, key, val) => ({...obj1, [key]: val});

const removeKey = (obj, key) => {
    let obj2 = {...obj}
    delete obj2[key]
    return obj2;
}

const combine = (obj1, obj2) => {
    return Obj3 = {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    const obj2 = {...obj}
    return obj2[key] = val;
}