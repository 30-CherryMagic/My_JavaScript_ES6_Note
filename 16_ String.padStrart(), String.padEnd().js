/* 
padStart() メソッドは、
結果の文字列が指定した長さになるように、
現在の文字列を他の文字列で (必要に応じて繰り返して) 延長します。
延長は、現在の文字列の先頭から適用されます。
*/

const name ='Jung-kook'; //9 characters

console.log(name.padStart(12,'++')); //+++Jung-kook
console.log(name.padEnd(12,'++')); //Jung-kook+++


console.log(name.padEnd(100)); //Jung-kook        
//二番目の引数が指定していない場合はスペースで延長する
console.log(name.padEnd(100).length); //100