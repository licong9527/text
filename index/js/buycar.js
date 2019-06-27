function Car(){}

//获取购物车商品
Car.prototype.getCar = function(){
  //没有数据默认返回一个空数组
  return  JSON.parse( localStorage.getItem('cartlist') ) || [];
}

//添加商品到购物车
Car.prototype.addToCar = function(product){
  var cartlist = this.getCar();
 
  console.log(cartlist);
  //1.判断是否有相同商品
  if(this.hasGoods(product.img)){
    for(var i=0; i<cartlist.length; i++){
      if(cartlist[i].img == product.img){
       //有：数量加一
       var sum = parseInt(cartlist[i].number);
         sum+=sum;
        cartlist[i].number = sum;
        
      }
    }
  }else{
     //2、没有：直接加入
     cartlist.push(product);
  }
  alert('加入成功');
  //要在存入本地存储(要转化字符串进行存储)
  localStorage.setItem('cartlist',JSON.stringify(cartlist));
}

//判断购物车是否有相同商品
Car.prototype.hasGoods = function(img){
  var cartlist = this.getCar();
  //判断id是否相同，
  for(var i=0; i<cartlist.length; i++){
    if(cartlist[i].img == img){
      return true;
    }
  }

  return false;
}

//获取购物车商品的总价格
Car.prototype.getTotalPrice = function(){
    var totalPrice = 0; //默认0元
    var cartlist = this.getCar();
    for(var i=0; i<cartlist.length; i++){
      totalPrice +=  parseFloat( cartlist[i].price )* parseInt( cartlist[i].number )
    }
  
    return totalPrice;
  }
  
  //获取购物车商品的总数量
  Car.prototype.getTotalNumber = function(){
    var totalNumber = 0; 
    var cartlist = this.getCar();
    for(var i=0; i<cartlist.length; i++){
      totalNumber +=  parseInt( cartlist[i].number )
    }
  
    return totalNumber;
  }
  
  //删除购物车指定的商品
Car.prototype.delGoods = function(img){
  console.log(img);
    var cartlist = this.getCar();
    for(var i=0; i<cartlist.length; i++){
      if(cartlist[i].img == img){
        //删除当前商品
        cartlist.splice(i,1);
       
        //需要在存入本地存储
        localStorage.setItem( 'cartlist',JSON.stringify(cartlist) )
        return true;
      }
    }
  
  
    return false;
  }

  //增加购物车指定商品数量
  Car.prototype.addNum = function(img){
    console.log(img);
      var cartlist = this.getCar();
      for(var i=0; i<cartlist.length; i++){
        if(cartlist[i].img == img){
          console.log(cartlist[i]);
          var sum = parseInt(cartlist[i].number);
         sum+=1;
        cartlist[i].number = sum;
         
          //需要在存入本地存储
          localStorage.setItem( 'cartlist',JSON.stringify(cartlist) )
          return true;
        }
      }
    return false;
    }

    //减少购物车指定商品数量
  Car.prototype.subNum = function(img){
    console.log(img);
      var cartlist = this.getCar();
      for(var i=0; i<cartlist.length; i++){
        if(cartlist[i].img == img){
          console.log(cartlist[i]);
          var sum = parseInt(cartlist[i].number);
          if(sum>=2){
            sum-=1;
            cartlist[i].number = sum;
          }
          //需要在存入本地存储
          localStorage.setItem( 'cartlist',JSON.stringify(cartlist) )
          return true;
        }
      }
    return false;
    }

