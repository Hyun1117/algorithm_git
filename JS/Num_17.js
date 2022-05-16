
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
//  예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) { 
    var answer = 0;
     if (!(s.length == 4 || s.length ==  6)){//먼저 문자열의 길이가 4 혹은 6인지 확인하기
        return false
    } else {//맞다면 문자열의 안에 숫자가 있는지 없는지 확인하기
        const tmp = s.split('')
        for(let i =0;i<tmp.length;i++){
        if (isNaN(tmp[i])){
            return false
        }
        }

    }
    //모두 맞으면 true반환
    return true;
}