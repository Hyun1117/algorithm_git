function solution(a, b) {
    var week =["SUN","MON","TUE","WED","THU","FRI","SAT"]
    var getday = week[new Date(2016,a-1,b).getDay()];// getDay() 메소드는 날짜 문자열을 Date 객체로 만들어서 Date 객체의 이 날짜가 무슨 요일인지 숫자 값으로 반환합니다.
    return getday;
}