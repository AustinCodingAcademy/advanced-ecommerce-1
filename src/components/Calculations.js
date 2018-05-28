export function cartTotal (arr){
  arr.map(function(item,i){
    console.log(arr)
    return Number(item.price.replace("$",""))
}).reduce(function(s,c){
    console.log(`number ${s} and ${Number(s)}`)
    console.log(`number ${c} and ${Number(c)}`)
    console.log(s+c)
     return s+c})
}