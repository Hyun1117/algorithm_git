function solution(absolutes, signs) {
    let sum = 0;

    for(let i = 0; i<absolutes.length; i++)//임의 배열 길이만큼 for문이 동작한다.
        {
            if(signs[i])//양수이면 그대로
                {
                    absolutes[i] = absolutes[i]
                }
            else //음수이면 -1을 곱한다.
                {
                    absolutes[i] = absolutes[i] * -1
                }
            sum = sum + absolutes[i] //판별된 숫자들을 다 더한다.
        }
    var answer = sum;
    return answer;
}