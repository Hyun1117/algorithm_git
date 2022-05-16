function solution(x) {
    var ha_num = x;
    var sum = 0;
     while(x > 0)
        {
            sum += x % 10;
             x = Math.floor(x/10);
        }
    if(ha_num % sum == 0)
        return true;
    else
        return false;
}