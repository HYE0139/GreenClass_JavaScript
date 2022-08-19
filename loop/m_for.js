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

for(var row = 0; row < repeat/2; row++){
    for(var space = row; space < repeat/2; space++){
        process.stdout.write('0'); // 상단 삼각형 공백 출력
    }
    for(var col = 0; col < row*2+1; col++){
        process.stdout.write('*'); // 상단 삼각형 * 출력
    }
        process.stdout.write('\n'); // 줄바꿈
}
    
    for(var row = repeat/2-1; row > 0; row--){
        for(var space = row; space < repeat/2+1; space++){
             process.stdout.write('0');  // 하단 삼각형 공백 출력
    }
    for(var col = 0; col < row*2; col++){
        process.stdout.write('*');  // 하단 삼각형  * 출력
    }
     process.stdout.write('\n'); // 줄바꿈
    }



