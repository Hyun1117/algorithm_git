function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) //배열의 길이만큼 for문이 실행된다.
        {
            if(arr[i] % divisor === 0) //divisor의 값으로 나누어 지는 것만 답안지 배열에 넣는다.
                {
                    answer.push(arr[i]);
                }
        }
    if(answer.length === 0) //아무것도 없을때 예외처리
        {
            answer.push(-1);
        }
    answer.sort(function(a, b)  {//오름 차순 정렬
    return a - b;
});
    return answer;
}