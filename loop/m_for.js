// for 문 Mission

// Missoon_1

/*
    *****
    *****
    *****
    *****
    *****
*/

const repeat = 9;

// for(let i=0; i<star; i++) {
//    for(let z=0; z<star; z++) {
//     process.stdout.write('*');
//    } 
//    process.stdout.write('\n');
// }

// for(let i=0; i<star; i++) {
//     for(let z=star-i; z>0; z--) {
//         process.stdout.write('*');
//     }
//     process.stdout.write('\n');
// }

// for(let i=1; i<=star; i++) {
//     for(let z=0; z<i; z++ ) {
//         process.stdout.write('*');
//     }
//     process.stdout.write('\n');
// }

// 다이아 만들기
// for(var row = 0; row < repeat/2; row++){
//     for(var space = row; space < repeat/2; space++){
//         process.stdout.write('0'); // 상단 삼각형 공백 출력
//     }
//     for(var col = 0; col < row*2+1; col++){
//         process.stdout.write('*'); // 상단 삼각형 * 출력
//     }
//         process.stdout.write('\n'); // 줄바꿈
// }
    
//     for(var row = repeat/2-1; row > 0; row--){
//         for(var space = row; space < repeat/2+1; space++){
//              process.stdout.write('0');  // 하단 삼각형 공백 출력
//     }
//     for(var col = 0; col < row*2; col++){
//         process.stdout.write('*');  // 하단 삼각형  * 출력
//     }
//      process.stdout.write('\n'); // 줄바꿈
//     }


// 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// let sum = 0;
// for(let i=1; i<20; i++) {
//     if(i%2 === 0 || i%3 === 0 ) {
//         sum += i;
//     }
// }
// console.log(sum);

//두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

// const sum = 6;
// for(let i=1; i<sum; i++) {
//     for(let j=1; j<sum; j++) {
//         if(i+j == sum) {
//             console.log(`[${i}, ${j}]`);
//         }
//     }
// }

// 삼각형 출력하기

// const line = 5;

// for(let i=0; i<line; i++) {
//     for(let z=0; z<i; z++) {
//         process.stdout.write(' ');
//     } 
//     for(let j=line-i; j>0; j--) {
//         process.stdout.write('*');
//     }
//     process.stdout.write('\n');

// }

//정삼각형 출력하기

// const line = 5;

// for(let i=0; i<line; i++) {
//     for(let z=line-i; z>0; z--) {
//         process.stdout.write(' ');
//     }
//     for(var j=0; j<=i; j++){
//         process.stdout.write('*');   
//     }
//     for(let d=line-i; d<line; d++) {
//         process.stdout.write('*');
//     }    
//   process.stdout.write('\n');

// }

// const line = 5;
// const col = 9;
// for(let i=0; i<line; i++){  
//     for( let z=1; z<=col; z++){
//         let cols = Math.round(col/2)
//         if( cols-1 == z ) {
//             process.stdout.write('*');
//         } else {
//             process.stdout.write('0');
//         }

       
//     }
//     process.stdout.write('\n');
// }

// 방은 1호부터 ~ num호까지 있다.
// a층 부터는 i호에 a-1층의 1호~i호까지 사는 사람의 총합만큼 산다.
// a[i] += a-1[1]~a-1[i];
const apart = {    
    // 0층 : [1, 2, 3, 4, 5],
    // 1층 : [1, 3, 6, 10, 15],
    // .
    // .
    // .
}; // 아파트

const floorNum = 7; // 아파트 층수
const num= 5; // 호실 갯수

for(let i=0; i<floorNum; i++) {
    apart[i] = [];
    for(let z=1; z<num; z++) {
        apart[0][z] =+ z+1;
        // 0 : [1, 2, 3, 4, 5]
        apart[i][0] = 1;
        apart[i][z] = 0;
    }
}

for(let j=1; j<floorNum; j++) { //층
    for(let z=1; z<num; z++) { //호
        apart[j][z] = apart[j-1][z]+apart[j][z-1];
    }
}

// apart[1][0] = apart[0][0];
// apart[1][1] = apart[0][0] + apart[0][1];
// apart[1][2] = apart[0][0] + apart[0][1] + apart[0][2];

console.log(apart);

