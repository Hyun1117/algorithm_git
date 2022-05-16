function solution(arr) {
    var answer = arr;
    var min = arr[0];//최소값을 임의 값으로 준다.
    
      if(answer.length === 1)//최소값을 반환할게 없을시 예외처리
        {
            return [-1] 
        }
        else
        for(let i = 0; i < arr.length; i++)
        {    
            if(arr[i] < min)//배열에 최소값을 구한다.
            {
                min = arr[i];
            }
        }
    arr.splice(arr.indexOf(min),1)//splice함수는 특정 배열 요소를 삭제시키고 특정값을 찾아주는 indexOf 함수를 이용해서 최소값을 제거해준다.
    return arr;
}