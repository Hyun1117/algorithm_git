function solution(n){
    let sum = 0;
    let a = 0;
    let str1 = '';
    let str2 = '';
    let i = 0
    while(n > 0)
    {
        
        sum += n % 10;
        a = n % 10;
        if( a != 7)
        {
          str1[i] = process.stdout.write(a+"+");
        }
        else if(a == 7)
        {
          str2[i] = process.stdout.write(a+"="+sum)
        }
        n = Math.floor(n/10);
        i++
    }
}
console.log(solution(718253))


