//forEach문을 활용하여 arr의 홀수는 odd에 전부 더하고, 짝수는 even에 더하시오.
const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let odd = 0, even = 0;

arr.forEach(item => {
    if(item%2 !== 0) { // 2로 나눈 나머지가 0 이면 홀수
        odd += item
    } else {
        even += item
    }
});

console.log('홀수 :' + odd, '짝수 :' + even);

console.log('---------------------------------');

//arr, forEach를 활용하여 70 이하의 값들만 전부 더하시오.
const arr2 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let sum = 0;

arr.forEach( (item,idx) => {
    console.log(idx); // 인덱스 값
    if(item <= 70) {
        sum += item
    }
})

console.log('sum : '+sum);

console.log('---------------------------------');

// arr. forEach를 활용하여 인덱스 값과 함께 출력하시오.
const arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

arr3.forEach((item,idx) => {
    console.log(`arr[${idx}] : ${item}`);
})

const arr4 = [10, 33, 12, 8, 1, 89, 11];

  for(let i=arr4.length-1; i>0; i--)
  {
    for(let z=0; z<i; z++){
      if(arr4[z]>arr4[z+1])
      {
        let temp = arr4[z];
        arr4[z] = arr4[z+1];
        arr4[z+1] = temp;
      }
    }
  }

console.log(arr4);


