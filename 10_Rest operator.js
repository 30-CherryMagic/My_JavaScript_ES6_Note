//Iterable（イテラブル）じゃない場合

//数値
function addNumbers( num ){
  console.log( '①' , num );
  console.log( '②' , arguments );
}

addNumbers( 4 , 5 , 6 , 7 , 8 );
//① 4
//② [Arguments] { '0': 4, '1': 5, '2': 6, '3': 7, '4': 8 }

/*argumentsはJavaScriptの特殊なオブジェクトで、関数内で渡された引数のリストを含んでいます。この場合、addNumbers関数は4、5、6、7、8の5つの引数を取り、argumentsオブジェクトにはこれらの引数が含まれています。console.log(arguments)は、関数の引数をコンソールに出力するために使用されています。*/


//残余引数（...）
function addCounts( ...count ){
  console.log( count );
}

addCounts( 4 , 5 , 6 , 7 , 8 );
//[ 4, 5, 6, 7, 8 ]

/*
残余引数（引数の数が分からない時に使える）
argumentsを配列に変換する(値が 1つだけでも配列であることに注意)
関数定義には、...restParam を 1つだけ入れることができます。
残余引数は、関数定義の最後の引数でなければなりません。
*/