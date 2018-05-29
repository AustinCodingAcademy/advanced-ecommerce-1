export function cartTotal(arr){
  const myList = []
  arr.forEach((item,i)=>{
    myList.push(Number(item.price.replace("$","")))
  })
  
  const reduced = myList.reduce((s,c)=>{
    return(Number(s) , Number(c))
  },0)

  return(reduced)
}