//var 再代入可能、再宣言可能な変数
//グローバルスコープ、関数・ローカルスコープ
//var 宣言の巻き上げ:値は undefined に初期化されます。
//初期化しなくても宣言できます
if(true){
  var example1 = 5;
}
console.log(example1); //5

var example1 = [1,2,3];
console.log(example1); //[ 1, 2, 3 ]



//let 再代入可能、再宣言不可能な変数
//ブロックスコープ（{} に囲まれたコード）
//let 宣言の巻き上げ:Reference Error が発生します
//初期化しなくても宣言できます
if(true){
  let  example2 = 5;
}
console.log(example2); //is not defined



//const 再代入不可能、再宣言不可能な定数
//ブロックスコープ（{} に囲まれたコード）
//const で宣言されたオブジェクトのプロパティーは更新できます
//let 宣言の巻き上げ:Reference Error が発生します
//宣言時に初期化される必要があります
if(true){
  const example3 = 5;
}
console.log(example3); //is not defined



/* let、var、constの使い分け方法（https://techplay.jp/column/1619）
** ① 基本はconstで定義する
** ② 繰り返し構文のみletを定義する
** ③ 影響範囲が広いため、varは使わない方がよい
 */