let out = {};

function addNode(id) {
    out[id] = {};
}

function deleteNode(id) {
    delete out[id];
}

function setChance(id1, id2, chance) {
    out[id1][id2] = chance;
}

function getChance(id1, id2) {
    return out[id1][id2] || 50;
}

addNode(1);
addNode(2);

deleteNode(2);

setChance(1, 1, 0.1)

console.log(getChance(1, 1))
console.log(getChance(1, 2))

//addNode(1);
setChance(1, 1, 0.2)

console.log(getChance(1, 1))

setChance(1, 2, 0.2)

console.log(getChance(1, 2))