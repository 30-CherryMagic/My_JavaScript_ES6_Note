//簡単にオブジェクトを生成
//仮引数をオブジェクトのプロパティにする

function objectMaker(name,age,number){
  const userInfomation = {
    name,
    age,
    number
  }
  console.log(userInfomation);
}

objectMaker('あやこ','24','22365017');
//{ name: 'あやこ', age: '24', number: '22365017' }


//従来の書き方
function objectMaker(name,age,number){
  const userInfomation = {
    name:name,
    age:age,
    number:number
  }
  console.log(userInfomation);
}