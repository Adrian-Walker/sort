// 1.)
const newNumbers = [21, 96, 7, 65, 2, 8, 17, 5, 33, 3]
newNumbers.sort((a,b) => a - b)
console.log(newNumbers)

// 2.)
const ages = [21, 96, 7, 65, 2, 8, 17, 5, 33, 3]
ages.sort((a,b) => b - a)
console.log(ages)

// 3.)
const items = ['iPhone', 'Macbook', 'Ps5', 'Book', 'Pants']
items.sort((a, b) =>  a.length - b.length)
console.log(items)

// 4.)
const sports = ["football", "baseball", "basketball", "soccer", "golf"]
sports.sort()
console.log(sports)

// 5.)
const thesePeople = [
    {name: "Jeff", age: 19},
    {name: "Jon", age: 33},
    {name: "Tim", age: 82},
    {name: "Joel", age: 2},
    {name: "Sebastian", age: 108},
]
const result = thesePeople.sort(thePeople = (a,b) => {
    return a.age - b.age
})
console.log(result)
