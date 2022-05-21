
function solution(numbers) {
    var answer = [];
    for(let i =0; i<numbers.length; i++)
        {
           for(let j = 1; j < numbers.length; j++)
               {
                   if(i != j)
                       {
                           answer.push(numbers[i] + numbers[j]);
                       }
               }
        }
    let result = [...new Set(answer)];
    result.sort((a,b)=>a-b)
    return result
}