function solution(seoul) {
    var search = 0;
    var answer = '김서방은 ,에 있다'
    for(let i = 0; i < seoul.length; i++)
        {
            if(seoul[i] == 'Kim')//kim에 해당하는 index값을 찾아준다.
                {
                    search = i;
                }
        }
    return answer.replace(',',search)//문자열 치환
}