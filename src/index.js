/**
 * cont letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数際宣言
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "letは再宣言不可";

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数は上書き不可";
// let val3 = "const変数を再宣言";

// // constで定義したオブジェクトは、プロパティの変更が可能
// const val4 = {
//   name: "ああ",
//   age: 28
// };
// console.log(val4);

// val4.name = "いい";
// val4.address = "hirosima";
// console.log(val4);

// // constで定義した配列は、プロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "かが";
// const age = 54;
// // 「わたしのなまえはかがです。年齢は54歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func１です"));

// // アロー関数
// // const func2 = (str) => {
// //   return str;
// // };

// const func2 = (str) => str;
// console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ああ",
//   age: 100
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// //配列にも使える
// const myProfile = ["ああ", 100];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile; //配列の順に受け取れる
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayhello = (name = "けい") => console.log(`こんにちは${name}さん`);
// sayhello();
// sayhello("かが");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);   // [1, 2]
// console.log(...arr1);  //1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);   // 1
// console.log(num2);   // 2
// console.log(arr3);   // [3, 4, 5]

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);   // [100, 20]
// console.log(arr4);   // [10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);   // [10, 20, 30, 40]

// // =でコピーすると？　同じオブジェクトを参照してしまう。参照渡し
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);   // [100, 20]
// console.log(arr4);   // [100, 20]

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "かが"];

//従来
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です、`);
// }

// map あたらいい配列が生成される
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);   // ["田中", "山田", "かが"] 

// nameArr.map((name) => console.log(name));   

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));   // 1番目は田中です

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //trueになったときだけの配列にフィルタされる
// });
// console.log(newNumArr);  // [1, 3, 5]

// 自分の名前以外は、「さん」をつける
// const newNameArr = nameArr.map((name) => {
//   if (name === "かが") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// テスト用などにたくさん配列を作る方法
// [...Array(n).keys()]は、JavaScriptで0からn-1までの整数が順番に並んだ配列を得る記法
// val には、上記で作った配列各要素の値が入る
const users = [...Array(18).keys()].map(((val) => {
  return {
    id: val,
    name: "じゃけえ$(val)",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "000-111-1111",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  }
}))

/**
 * 三項演算子
 */
// ある条件　? 条件がtureの時　：条件がfalseの時
// const val1 = 1 > 0 ? 'true' : 'false';
// console.log(val1);   // true

// const num = 1300;
// console.log(num.toLocaleString()); //金額表示

// 数値以外の時は、「数値を入力してください」と表示したい
// toLocaleStringは、数値の時は "1,300"が返る。文字列の場合は変換できない
// const num1 = "1300";
// const formattedNum =
//   typeof num1 === "number" ? num1.toLocaleString() : "数値を入力してください";
// console.log(formattedNum); //数値を入力してください

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 40)); // 許容範囲内です 

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2) {
//   console.log("1か２はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も２もtrue");
// }

// || は左側がfalseとなるときに右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
