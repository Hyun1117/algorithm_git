function solution(n) {
    var answer = '';
    var su = '수'
    var pack = '박'
    for(let i = 0; i<n; i++)
        {
            if(i % 2 == 0)
                {
                    answer = answer.concat(su);//기존 문자열에 문자열을 담아서 추가하는 함수.
                }
            else
                {
                    answer = answer.concat(pack);
                }
        }
    return answer;
}