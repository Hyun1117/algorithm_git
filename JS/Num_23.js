//테스트 1번 값은 통과 했지만 정확성 테스트에서 실패가 뜸
//왜?? 425041같은 경우 는 120523가 되야하는데
//내림차순으로 정렬을 하였기 때문에 정확성에서 실패가 뜬 거 같다.
function solution(n) {
    var arr = n.toString().split('');
    var answer = [];

    
    for(var i = 0; i < arr.length; i++){
        answer.push(Number(arr[i]));
    }
    answer.sort((a,b) => b - a);//내림차순 정렬로 인한 오류로 무조건 sort는 좋지않다.

    return answer;
}
//수정 코드
function solution(n) {
    var arr = n.toString().split('');
    var answer = [];

    for(var i=arr.length-1; i>=0; i--){
        answer.push(Number(arr[i]));
    }

    return answer;
}