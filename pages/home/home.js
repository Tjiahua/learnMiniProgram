Page({

data:{
  msg:"jiahuahello",
  age:18,
  students:[
    { id: 110, name: 'kobe', age: 33 },
    { id: 110, name: 'jame', age: 28 },
    { id: 110, name: 'curry', age: 33 },
    { id:110,  name: 'ouwen', age: 33 }
  ],
  counter:0
},
add() {
  //错误做法.界面不会发生变化 补属性
//  this.data.counter += 1
//  console.log(this.data.counter) 
this.setData({
  counter: this.data.counter + 1
})
}
,
odd(){
  this.setData({
    counter:this.data.counter -1
  })
}



  
})