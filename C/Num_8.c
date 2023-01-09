#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
//피자 나눠 먹기
int solution(int n) {
    int answer = 0;
    int counter = 0;
    int last_pan = 1;
    if(n <= 7)
        return 1;
    else if(n > 7)
    {
        for(int i = 1; i <= n; i++)
        if(i % 7 == 0)
        {
            counter++;
        }
    }
    if(n % 7 == 0)
        return answer = counter;
    answer = counter + last_pan;
    return answer;
}