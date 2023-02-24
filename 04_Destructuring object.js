//オブジェクトを分割代入
const userInfomation = {
  userName: 'ハリーポッター',
  userAge: 17,
  userSchool: 'ホグワーツ',
  userDormitory: 'グリフィンドール寮',
  userHometown: 'ゴドリックの谷'
};
const { userName,userDormitory } = userInfomation;

console.log(`ご購入ありがとうございました。
この杖は${userDormitory}の${userName}さんにお送りいたします。`);
//ご購入ありがとうございました。
//この杖はグリフィンドール寮のハリーポッターさんにお送りいたします。


//rename 名前の変更
const { userAge:age, userSchool:school} = userInfomation;

console.log(`${school}の7年生は${age}歳です。`);
//ホグワーツで17歳は7年生です。