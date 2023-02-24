//for...of ループ
let incomes = [230000, 250000, 270000];
let total = 0;
//let total; はダメです。初期化してないので、値は undefined になる。
//+＝演算子で値を足すと NaN (Not a Number) になる。


for(const income of incomes){ 
  //constを使う理由：ループ内で変数を再割り当てしないようにするため。
  //変数に再割り当てを行おうとするとエラーが発生します。
  //プログラムの予期せぬ振る舞いを防ぐことができます。
  //可変性を抑制し、コードの安全性を高めることができます。
  console.log(income);
  total += income;
}

console.log(total);

let fullName = 'Harry James Potter';
for( const char of fullName){
  console.log(char);
}

//Iterable（イテラブル）は、反復処理が可能なオブジェクトを表す。JavaScriptでは、配列、文字列、Map、SetなどデフォルトがIterableであり、for...ofループなどの反復処理が可能です。
