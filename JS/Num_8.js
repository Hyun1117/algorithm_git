function solution(arr) {
    var answer = 0;
    
       for(var i = 0; i<arr.length; i++)
        {
            answer = answer + arr[i]//배열에 있는 값들을 다 더함
        }
      answer = answer/arr.length;//배열에 길이만큼 나누면 평균을 구하는 공식이 된다.
    
    return answer;
}