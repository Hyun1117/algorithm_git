//문제 : X만큼 간격이 있는
function solution(x, n) {
    var answer = [];
    
    for(var i=1; i<=n; i++)//n은 자연수의 갯수니깐 그 길이만큼 for문을 활용한다.
    {
        answer.push(i*x);//x의 간격만큼 곱해준다.
    }
    return answer;
}