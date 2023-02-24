//row data
const url='https://2020.cec.gov.tw/data/json/openData/candUrl/P1.json';
let data;
async function getData(){
  const rowDate = await fetch(url); 
  //Responseオブジェクトを取得
  //Responseオブジェクトの.json() メソッドで JavaScript オブジェクトに型変換
  //このメソッドは json() という名前であるにもかかわらず、結果は JSON ではありません。入力として JSON を取って解釈し、JavaScript のオブジェクトを生成します。(mdn)
  data = await rowDate.json();
  data.forEach((item) => {
    aboutCandidate(item);
  });
  //forEachをgetDataの外に書くとエラーになる可能性があります。
  //データの取得した前に実行されたのが原因です。
}

function aboutCandidate( candidateData ){
  const {DrawNo:num , CandidateName:name , RecPartyName:party} = candidateData;
  console.log(`${num}號${name}(${party})`);
}

getData();

//1號總統候選人:宋楚瑜(親民黨)
//2號總統候選人:韓國瑜(中國國民黨)
//3號總統候選人:蔡英文(民主進步黨)


