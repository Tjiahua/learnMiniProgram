// pages/masdown/masdown.js
Page({

  data: {
    isShow :true,
    score:50,
    movies:['星际穿越','盗梦空间','大话西游']
  },
handleShow () {
  this.setData({
    isShow:!this.data.isShow
  })
},
handleAdd(){
  this.setData({
    score:this.data.score + 10
  })
}
  
})