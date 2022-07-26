const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const arr2 = arr.filter(item => {
    return item % 3 === 0; 
    // 3의 배수 값만 골라내서 새로운 배열을 만들어낸다.
    // 그래서 return 값이 있다. 
});

console.log(arr2);

// ----- MISSION -----
// filter를 활용하여 짝수만 있는 배열 arr2 를 만드시오.
const arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const arr4 = arr3.filter(item => {
    return item % 2 === 0;
});

console.log(arr4);