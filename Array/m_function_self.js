const arr = {
    '0': 2,
    '1': 6,
    '2': 10,
    '3': 11,
    '4': 22,
    '5': 1,
    '6': 7,
    'length': 7,
    forEach : function (cb) { // cb = 콜백 함수
        for(let i=0; i<this.length; i++ ) {
            cb(this[i],i);
            // forEach를 호출할 때 넣어줬던 함수(콜백)에 인자값을 부여
        }
    },
    push: function(item) {
        this[this.length] = item; // 마지막 배열의 인덱스 값
        this.length++;
    },
    filter: function(cb) {
        const tempArr = []; // 새로운 배열로 반환하기 위해 선언
        for(let i=0; i<this.length; i++){
          if(cb(this[i], i)) { // 아래 filter 호출에서 실행 중인 함수에서 true값이 넘어오면
            tempArr.push(this[i]); // 새로운 배열 tempArr에 해당 값을 넣는다.
          }
        }
        return tempArr;
    },
    map: function(cb) {
        const tempArr = [];
        for(let i=0; i<this.length; i++) {
        // length의 길이는 변하지 않기에 filter와 달리 분기점이 없다.
            tempArr.push(cb(this[i], i));
        }
        return tempArr;
    },
    reduce: function(cb) {
        let preVal = this[0];
        for(let i=1; i<this.length; i++) {
            preVal = cb(preVal, this[i], i);
        }
        return preVal;
    },
};


// forEach ----------------------------------------------------
// 배열의 길이만큼 반복하는 메서드
arr.forEach((item, idx) => {
    console.log(`arr[${idx}] : ${item}`)
    // 해당함수는 arr 객체 안에 있는 forEach 메소드의 파라미터로 들어간다.
});


// push ----------------------------------------------------
// 배열의 마지막에 요소를 추가하는 메서드
arr.push(100);
console.log(arr[7]);
console.log(arr.length);



// filter ----------------------------------------------------
// 조건에 따른 값들만 걸러내서 새로운 배열로 반환하는 메서드
const arr2 = arr.filter((item) => {
    return item % 2 === 0;
});
console.log(arr2); // arr 객체의 짝수값만 출력된다.



// map ----------------------------------------------------
// 조건에 따라 변경된 값을 length를 유지한 채 새로운 배열로 반환하는 메서드
const arr3 = arr.map((item, idx) => {
    return idx <=3 ? item * item : item;
    // idx(index) 가 3보다 작거나 같으면 item을 제곱한 값을 반환한다. 
});
console.log(arr3);



// reduce ----------------------------------------------------

const totalSum = arr.reduce((preVal, curVal, idx) => {
    return preVal + curVal;
});

console.log(totalSum);
