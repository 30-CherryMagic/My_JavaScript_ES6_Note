//arr.includes() 
//配列はある値が含めているかどうかをチェック

let numArray = [ 1 , 2 , 3 , 4 , 5 ];

console.log( numArray.indexOf(0) );
//-1 (index)
console.log( numArray.includes(0) );
//false (boolean)



/*
indexOf() メソッドは引数に与えられた内容と同じ内容を持つ最初の配列要素の index を返します。存在しない場合は -1 を返します。
*/

/*
includes() メソッドは、特定の要素が配列に含まれているかどうかを真偽値(true または false)で返します。(IEには使えない)
*/