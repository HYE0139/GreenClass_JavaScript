const arr = [10, 20, 30, 40, 50, 60];
// 배열 속 값들은 무조건! 같은 타입으로. (문자열, 정수 등)
console.log('arr[0] : ' + arr[0]);
arr[0] = 11; // 값을 바꾸는 건 '=' 
arr[0]++; // or 증감식 뿐
console.log('arr[0] : ' + arr[0]); // => 12

console.log('----------------------------');

// 배열은 for문과 궁합이 좋다.
for(let i=0; i<arr.length; i++) { // 배열이 늘어나도 배열이 늘어난 길이만큼 반복한다.
    console.log(`arr[${i}] : ${arr[i]}`);
}

console.log('----------------------------');
// 배열은 forEach 메소드를 기본으로 가지고 있다.
// forEach(콜백함수)
arr.forEach(item => { // 파라미터가 1개라면 '()' 생략가능
    console.log('원소값 : ' + item);
});

// forEach 는 원본 배열에 직접적인 영향을 주기 때문에 return 값이 없다. 