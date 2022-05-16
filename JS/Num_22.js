function solution(n)
{
    var answer = 0;
    while(n > 0)
        {
            answer += n % 10;
             n = Math.floor(n/10);//math.floor함수를 써야 소수점이 사라지는걸 너무 늦게 알았다...
        }

    return answer;
}