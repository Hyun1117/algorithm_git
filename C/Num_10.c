#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// sides_len은 배열 sides의 길이입니다.
int solution(int sides[], size_t sides_len) {
    int answer = 0;
    int max = 0;
    int sum = 0;
    int temp = 0;
    for(int i = 0; i<sides_len; i++)
    {
        for(int j = 0; j<sides_len - 1; j++)
            if(sides[i] < sides[j])
            {
                temp = sides[i];
                sides[i] = sides[j];
                sides[j] = temp;
            }
    }
    for(int i = 0; i<sides_len; i++)
    {
        if(i < sides_len - 1)
            sum += sides[i];
        if(i == sides_len - 1)
            max = sides[i];
    }
    printf("max : %d sum : %d",max,sum);
    if(max > sum)
        answer = 2;
    else if(max == sum)
        answer = 2;
    else
        answer = 1;
    return answer;
}