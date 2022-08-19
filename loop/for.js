// 반복문

// ----------------  for( 초기식, 조건식, 증감식 ) { 조건식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문 }

const arr = [10, 20, 30, 40, 50, 60];

for( let i =0; i<arr.length; i++) {
    // 반복문이 도는 동안 변수 i는 1씩 증감한다.
    // 변수 i가 arr.length 보다 커지면 반복문을 종료한다.
    console.log(arr[i]);
    /*
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
            .
            .
            .
        arr[5] = 60;

    */
}

// ---------------- for( 변수 in 객체 ) { 배열/객체의 열거할 수 있는 모든 프로퍼티의 수 만큼 반복적으로 실행하고자 하는 실행문}
// 배열이나 객체의 길이만큼 반복할꺼면 더 유용할 듯
// v-for 문이나 파이썬의 for 문 사용과 같다.
const arr2 = [70, 80, 90, 100, 110, 120];
for( let i in arr2) {
    // 배열의 길이만큼 반복을 하는데 변수 i는 배열 arr의 인덱스 값으로 출력된다.
    console.log(i);
    /*
        0
        1
        2
        .
        .
        .
        5
    */
}

const obj = {
    name : 'Jack',
    age : '20'
}

for( let i in obj) {
    // 객체 obj 의 프로퍼티 만큼만 반복하고 변수 i는 프로퍼티를 저장한다.
    console.log( i );
    /*
        console.log(i);
        name
        age

        console.log(obj[i]);
        Jack
        20
    */
}
