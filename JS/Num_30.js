function solution(sizes) {
    let max_arr = [];
    let min_arr = [];
    for(let i = 0; i < sizes.length; i++)
    {
        
         max_arr.push(Math.max(sizes[i][0], sizes[i][1]))
         min_arr.push(Math.min(sizes[i][0], sizes[i][1]))
        
    }
         max_arr.sort((a,b) => b - a)
         min_arr.sort((a,b) => b - a)
     return max_arr[0] * min_arr[0]
 }