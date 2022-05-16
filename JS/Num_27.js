function solution(num) {
    var answer = 0;
    var count = 0;
    var max_count = 500;
    if(num == 1)
        return 0;
    for(let i = 0; i< max_count; i++)
        {
            count++;
            if(num % 2 == 0)
                {
                    num = num/2;
                    if(num == 1)
                        {
                            return count
                        }
                }
            else
                {
                    num = (num * 3) + 1
                }
            if(count >= max_count)
                return -1;
        }
    answer = count
    return answer;
}