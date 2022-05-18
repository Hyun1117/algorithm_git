function solution(arr)
{
    var answer = [];
   for(let i = 0; i<arr.length; i++)
    {
       if(arr[i] == arr[i + 1]){}//현재 배열의 인덱스 값과 다음 배열의 값을 비교한다. 값으면 넘어가고 다른 값만 삽입하면 되는 문제.
       else
       {
           answer.push(arr[i])
       }
    }
    return answer;
}
console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));