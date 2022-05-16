function solution(a, b) {
    var answer = 0;
    if(a < b) //a가 b보다 작은경우
    {
        for (let i = a; i <= b; i++)
            {
                answer = answer + i
            }
        return answer
    }
    else if(a == b)
    {
       answer = a;

       return answer;
    }
    for (let i = b; i <= a; i++) //a가 b보다 큰경우
    {
        answer = answer + i
    }
    return answer
}