let arr = [2, 6, 32, 4, 2, 8, 2, 6, 6, 8]
let obj = {}
for(let i=0; i < arr.length; i++){
    if(arr.length > 0) i--
    let count = arr.filter(e => arr[0] != e)
     obj[arr[0]] = arr.length - count.length 
    arr = count
}
console.log(obj)


// hello dears 
// in the given array there's duplicate number, And you need to count those duplicate number.
// I dare you to solve this problem, In best preformance with less than 30 itereate  and 10 LFC (line of code).
// If you can figure out efficient answer you Award one bird !!
// Have a nice weekend...
// expected output : {2: 3, 4: 1, 6: 3, 8: 2, 32: 1}
// Note: regEx isn't allowed

