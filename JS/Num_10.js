function solution(arr1, arr2) {
    var answer = [];
    for(i = 0; i < arr1.length; i++)//arr1,arr2 행과 열의 값에 접근하기위해 이중 for문을 씀
        {
            let sum = []; //행렬의 값을 더 해서 저장하기 위해 배열 선언
            for(j = 0; j < arr1[i].length; j++)//각 행열의 0번째와 1번째의 값을 각각 더하기 위해서
                {
                    sum.push(arr1[i][j] + arr2[i][j])
                   // console.log(sum)
                }
            answer.push(sum);
        }
    return answer;
}