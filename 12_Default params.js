// 引数 = デフォルト値
function add(numArray = [] ){
  let total = 0;
  numArray.forEach(element => {
    total += element;
  });
  console.log(total);
}

add([2,4,6,8]);
//20

add();
//0 
/* デフォルト値がないとエラーになる↓↓
   TypeError: Cannot read properties of undefined */