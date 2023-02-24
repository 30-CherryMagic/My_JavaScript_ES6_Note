// ①文字列の結合
const word1 = '木村';
const word2 = '拓哉';
let superStar='';

superStar = `${ word1 } ${ word2 }`;
console.log('①', superStar ); //木村 拓哉

superStar = `${ word1+word2 }`;
console.log('①', superStar ); //木村 拓哉





// ②文字列の結合、数値の計算
const num1= 2;
const num2= 3;
let fanNum = `ファンは${num1+num2}人がいました。`;

console.log('②', fanNum );//ファンは5人がいました。





//③改行が効く（HTMLもJsのconsoleにも反映する）
//以前は\nで改行する（HTMLのみ改行、Jsのconsoleに反映しない）
let about = `${word1+word2}のファンは
${num1+num2}人がいました。`;

console.log('③', about );
//木村拓哉のファンは
//5人がいました。