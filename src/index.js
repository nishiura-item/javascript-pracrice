// const val4 = {
//   name: "西浦",
//   age: 30
// };
// val4.name = "nishiura";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/** テンプレート文字列*/

// const name = "西浦";
// const age = 30;

// 従来

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// const message2 = `私の名前は${name}です。年齢は${age}です。.`;
// console.log(message2);

/**アロー関数 */
// function func1(Str) {
//   return Str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }
// console.log(func3(10,20));

// const myProfile = {
//   name: 'にしうら',
//   age: 30,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['にしうら', 30]
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const[name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん`);
// sayHello();

//** スプレッド構文 */

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// // arr8[0] = 100;
// console.log(arr4);

/**mapや */

// const nameArr = ['田中','山田','西浦'];

// for(let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// //結果　田中、山田、西浦

// //nameArr2と同じ配列を作成
// //厳密にはname引数に配列の中身を順番に入れている
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2); //結果　(3) ["田中", "山田", "西浦"]

// //for文と同じ内容が出力できる。
// nameArr.map((name) => console.log(name));
// //結果　田中、山田、西浦

// filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.map((num) => {
  return num % 2 === 0; //numArrの中で、偶数のものを抽出し、新しい配列として出力
  // return num % 2 === 1; //奇数を出力
});
console.log(newNumArr);

// const nameArr = ['田中','やまだ','西浦'];
// for(let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`)
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`))

// const newNameArr = nameArr.map((name) => {
//   if(name === '西浦') {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// //ある条件　？　 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); //toLocalStringは3ケタごとにカンマを打ってくれる関数

// //numの方が「number」かどうか？　typeofで出力することができる
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';

// // 値の合計が100を超えているかどうか
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えてます' : '許容範囲内です';
// }
// console.log(checkSum(1, 1000));

// const num2 = null;
// const fee = num2 && '何か設定されました';
// console.log(fee);
