function solution(s) {
    var str = s.split(' ');
    var answer = '';
    for(let i = 0; i<str.length; i++)
        {
            for(let j = 0; j<str[i].length; j++)
                {
                    if(j % 2 ==0)//짝수 일때 대문자로 바꿔준다.
                        {
                            answer = answer + str[i][j].toUpperCase();
                        }
                    else
                        {
                            answer = answer + str[i][j].toLowerCase();
                        }
                }
            if(i<str.length - 1)//answer = answer + " "을 해준다면 마지막에 공백이 들어가진다. 그러니 str의 길이보다 한개 작게 넣어주면 해결됨
                {
                    answer = answer + " "
                }
        }
    return answer;
}