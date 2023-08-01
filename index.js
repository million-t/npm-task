const lodash = require('lodash')


const people = [
  { name: 'Million', age: 30 },
  { name: 'Billion', age: 20 },
  { name: 'Tolessa', age: 25 },
];

const sortedByName = lodash.sortBy(people, "name")
const sortedByAge = lodash.sortBy(people, "age")
// console.log(sortedByAge)
// console.log(sortedByName)

const nums = [3, -1, 4, 1, -5, -9, 2, 6, 5, -3, 5]
const filteredNums = lodash.filter(nums, n => n > 0)
// console.log(filteredNums)




lodash.delay(
    function (text){
        console.log(text)
    },
    2000,
    '2 second yet?'
) 




let the_man = {
    'name': 'maney',
    'greet': (greeting, punc) => greeting + ' ' + this.name + punc
}//this one doesn't work. why?



let the_other_man = {
    'name': 'maney',
    'greet': function(greeting, punc) {
        return greeting + ' ' + this.name + punc
    }
}


let bound = lodash.bindKey(the_other_man, 'greet', 'hola')
console.log(bound('!')) //what exactly does this do?

let anotherBound = lodash.bindKey(the_other_man, 'greet', lodash, '!!!')
console.log(anotherBound('h000la'))