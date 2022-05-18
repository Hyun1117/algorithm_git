
function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    let zero_count = 0;
    let max = 0;
    let min = 0;
    for(let i = 0; i < lottos.length; i++)
        {
            if(lottos[i] == 0)
                zero_count++
            for(let j = 0; j < win_nums.length; j++)
                {
                    if(lottos[i] === win_nums[j])  
                    {
                        count++
                    }
                }
        }
    max = 7 - (count + zero_count)
    min = 7 - (count)
    if(zero_count >= 6)
        min = 6;
    else if(count == 0 && zero_count == 0)
        {
            max = 6;
            min = 6;
        }
    answer = [max,min]
    return answer;
}