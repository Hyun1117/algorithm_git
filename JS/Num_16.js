function solution(s){
    var p_count = 0;
    var y_count = 0;
    for(let i = 0; i< s.length; i++)
        {
            if(s[i] =='p'|| s[i] == 'P')//각 문자열에 p와 P가 있는지 검사
                    p_count++;
            else if(s[i] == 'y' || s[i]=='Y')//각 문자열에 y, Y가 있는지 검사
                    y_count++;
        }
    if(p_count == y_count)//갯수가 같으면 true
            return true;
    else
            return false;
}