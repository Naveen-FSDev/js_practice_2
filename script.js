/*//Object

let item = {
    name:"phone",
    price:25000,
    quantity:1,
    categories:['apple','moto'],
    diementions:{
        length:7,
        breadth:3.5,
        height:.5
    }
}

console.log(item)

let item2=new Object();

item2.name="charger"
item2.price=500
item2.quantity=1

console.log(item2)

//accessing object
//dot notation
console.log(item.price)
item.price=30000
console.log(item.price)
item.returnable=true
console.log(item)

//square bracket notation

console.log(item['price'])
item.returnable=false
console.log(item)

let key='price'
item[key]=27500
console.log(item)

item={
    name:"phone",
    quantity:1,
    price:25000,
    buy:function(){
        console.log('item added to cart')
    },
    add(){
        console.log('item added to list')
    }
}
item.buy()
item.add()

let user={
    name:"naveen",
    age:30,
    spause:"deepa",
    mob:"moto"
}
console.log(user)
console.log(user.name)
user.age=28
console.log(user)
user.mail='naveen@gmail.com'
console.log(user)

//loops
console.log("hello")

//for, while, do-while
for(let i=1;i<=5;i++){
    console.log(i)
}

//print 10 to 1
for (let i=10;i>=1;i--){
    console.log(i)
}

//while loop
let i = 10;
while(i>=1) {
    console.log(i)
    i--;
}

//do-while
let j=5
do {
    console.log(j)
    j--;
}while(j>=1)

//break
while(true) {
    let num=Number(prompt('enter a number'))
    if(!isNaN(num))
    break;
}
*/

//continue-skips the current iteration
for (i=1;i<=10;i++) {
    if(i%3==0)
    continue
    console.log(i)
}

//for..of
let arr=['apple','orange','mango','grape']

for(i=0;i<arr.length;i++) {
    console.log(arr[i].toUpperCase())
}

for(let fruit of arr) {
    console.log(fruit)
}

// for in
item={
    name:'phone',
    quantity:1,
    price:25000
}

for(let key in item){
    console.log(item[key])
}

//functions
//function declaration
function isPossitive(num){
    return num>0

}

console.log(isPossitive(5))

function say(){
    console.log("Hi")
}
say()

console.log(add(3,5))

function add(a,b){
    return a+b
}

console.log(add)
console.log(typeof add)


//default parameters
function greet(name='there'){
    console.log('hi', name)
}

// greet('Naveen')
// greet()

//recursion-function calling itself
//factorial-product of first n numbers
function factorial(n){
    if(n==1)
    return 1
    return n*factorial(n-1)
}
console.log(factorial(5))

//function expression
let isEven=function(num){
    return num%2==0
}

console.log(isEven(100))

//example
let arr1 = [2,3,4,5,6]
let findSum=function(arr1){
    let sum=0
    for(let val of arr1){
        sum =sum+val
    }
    return sum
}
console.log(findSum(arr1))

//example-2
let volume=function(l,b,h){
    return(l*b*h)
}

console.log(volume(1,3,4))

//arrow function
let volume1=(l,b,h)=>{
    return l*b*h
}

console.log(volume1(3,4,5))

//example-1
let array=[3,4,5,6,7]
let sum4=(array)=>{
    let sum4=0
    for(let val of array){
    sum4=sum4+val
    }
    return sum4
}

console.log(sum4(array))

//example
let area=r=>Math.PI*r*r
console.log(area(5))

//example-rest arguments
let prog=function(...args){
    let result=1
    for(let val of args)
    result=result*val
    return result
}

console.log(prog(3,4,5,6))
console.clear()

//example-2
let prod2=function(){
    let result=1
    for(i=0;i<=arguments.length;i++)
    result*=arguments[i]
    return result
}

console.log(prod2(3,4,6,7))

//generator
function* indexGen(){
    let index=1
    while(true){
        yield index++
    }
}

const gen=indexGen();
console.log(gen.next().values)

//callback-Fuction passed as argument

function greetConsole(name){
    console.log('hello',name)
}

function greetHeading(name){
    const heading=document.querySelector('h1')
    heading.innerHTML='hello '+ name
}

function greet(callback){
    callback('ram')
}

greet(greetConsole)
greet(greetHeading)

//foreach
array2=["deepa","naveen","sathish"]

// array2.forEach => {(function print(val){
//     console.log(val.toUpperCase())
// })}

// array2.forEach(val=>console.log(val))

are=['ECE','EEE','MECH','CIVIL']

are.forEach(val=>{
    const opt=document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('branch').appendChild(opt)
})