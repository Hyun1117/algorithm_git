function solution(phone_number) {
    var answer = '';
    var str = '*'
    for(let i = 0; i<phone_number.length; i++)
        {
           if(i<phone_number.length - 4) // phone_number의 네번째자리는 번호가 나와야 함으로 if문을 걸어서 별을 넣는걸 멈춰준다.
               {
                   answer += str;
               }
            else
                {
                    answer += phone_number[i];
                }
        }
    return answer;
}