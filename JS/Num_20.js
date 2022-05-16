function solution(participant, completion) {
    var answer = '';
    participant.sort()//두 배열의 중복되지 않은 사람을 쉽게 찾기 위해 정렬을 해준다. 
    completion.sort()
    for(let i = 0; i<participant.length; i++)//참가명단과 완주한 명단을 비교하여 일치하지 않는 사람을 반환해준다.
        {
            if(participant[i] != completion[i])
                {
                    return answer = participant[i];
                }
        }
return answer;
}