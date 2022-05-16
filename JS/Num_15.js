function solution(a, b) {//내적의 공식을 알면 아주 간단하게 풀 수 있음
    var sum = 0;
    for(let i = 0; i<a.length; i++)
        {
            sum += a[i]* b[i]
        }
    return sum;
}