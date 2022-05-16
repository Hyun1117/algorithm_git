function solution(price, money, count) {
    var sum = 0;
     
     for(let i = 0; i<= count; i++)
         {
             sum += price*i;
         }
     if((money - sum) > 0)
         {
             return 0;
         }
    return answer = sum - money;
 }