
// map : 배열 길이는 유지하나 filter와 달리 배열 값을 바꿔서 새로운 배열로 만들 수 있다. 

const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const arr2 = arr.map(item => {
    return item -1;
});

console.log(arr2);

// ----- MISSION -----
// 배열 값들의 1자리 숫자를 0으로 만들기 
const arr3 = arr.map((item) => {
    //return parseInt(item*0.1) * 10;  => 0.1 곱한 값을 paresInt로 소수점 아래를 버리고 10을 곱해 다시 정수로 만듦
    return item - (item % 10); // 10으로 나눠서 나온 나머지 값을 뺀다.
})

console.log(arr3);