//スプレッド演算子(...)
/*新しいオブジェクトまたは配列が作成され、元のオブジェクトや配列の要素の値がそのままコピーされます。*/

//配列
const originalArray = [1, 2, 3];
const newArray = [...originalArray];

originalArray[0] = 4;

console.log(originalArray); // [4, 2, 3]
console.log(newArray); // [1, 2, 3] ← 新しい配列は影響を受けない


//スプレッド演算子使わない場合は
const originalArray2 = [1, 2, 3];
const newArray2 = originalArray2; //参照渡し
/*参照渡しとは、呼び出し先でも同じ実体を参照するように渡す方式。
渡された引数に変更を加えると呼び出し元にも同じように反映される。*/

originalArray2[0] = 4;

console.log(originalArray2); // [ 4, 2, 3 ]
console.log(newArray2); // [ 4, 2, 3 ]← 新しい配列は影響を受ける

//オブジェクト
const person = { name: 'John', age: 30, gender: 'male' };
const updatedPerson = { ...person, age: 31 };

console.log(person); 
// { name: 'John', age: 30, gender: 'male' }
console.log(updatedPerson); 
// { name: 'John', age: 31, gender: 'male' }


//オブジェクトの結合
const userInput = {
  userName: 'ハリーポッター',
  userAge: 17,
  userSchool: 'ホグワーツ',
}

const userFormat = { //デフォルト
  userName: '名前未入力',
  userGender: '不明',
  userAge: null,
  userSchool: '学校未入力',
  userDormitory: '住所未登録',
}

const user1 = { 
  ...userFormat , 
  ...userInput //上書き
};

console.log(user1);
/*{
  userName: 'ハリーポッター',
  userGender: '不明',
  userAge: 17,
  userSchool: 'ホグワーツ',
  userDormitory: '住所未登録'
}*/