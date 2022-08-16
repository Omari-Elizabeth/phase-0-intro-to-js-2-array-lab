let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat () {
    cats.push("Ralph")
}
function destructivelyPrependCat () {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    console.log(cats.pop())
}
function destructivelyRemoveFirstCat() {
    console.log (cats.shift())
}
function appendCat() {
    let hews = cats.concat (["Broom"])
    return hews
}
function prependCat() {
    let newPrepend = ["Arnold", ...cats]
    return newPrepend
}
function removeLastCat() {
    let removedLastCat = cats.slice(0, -1)
    return removedLastCat
}
function removeFirstCat() {
    let removedFirstCat = cats.slice(1)
    return removedFirstCat
}
