//Exercise 1
/*
names = ["moshe", "bob", "alice"]
ages = [25, 30, 41]

for (let index_arr in names) {
    console.log(`${names[index_arr]} is ${ages[index_arr]} years old`)
}
    */
//Exercise 2
/*
let num = [1, 2, 3, 4, 5]
let sum = 0

for (let index_arr in names) {
    sum += num[index_arr]
}
console.log("sum", sum)
*/
//Exercise 3
/*
let avg = sum / num.length

console.log("avg", avg)
*/
//Exercise 4
/*
let nums = []
for (let i = 1; i <= 100; i++) {
    nums.push(i)
}
console.log(nums)

//Exercise 5
for (let number of nums) {
    if (number % 2 !== 0) {
        console.log(number)
    }
}
*/
//Exercise 6
/*
let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

let temp = nums[0]
let nums_index = 0
while (temp !== 709) {
    nums_index++
    temp = nums[nums_index]
}
console.log(nums_index)
*/
//Exercise 7
/*
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let per_index in names) {
    people.push({ name: names[per_index], age: ages[per_index] })
}
console.log(people)
*/

//Exercise 8
/*
for (let person of people) {
    console.log(`${person.name} is ${person.age} years old`)
}
    */
//Exercise 9
/*
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]
for (let post_index in posts) {
    if (posts[post_index].id === 2) {
        posts.splice(post_index, 1)
    }
}
console.log(posts)
*/

//Exercise 10
/*
const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

for (let post of posts) {
    if (post.id === 2) {
        for (let comment_index in post.comments)
            if (post.comments[comment_index].id === 3) {
                post.comments.splice(comment_index, 1)
                console.log(post.comments)

            }
    }
}
    */
//Extension

const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

let keys = Object.keys(dictionary)

for (let key of keys) {
    console.log("Words that begin with", key)
    for (let word of dictionary[key]) {
        console.log(word)
    }
}