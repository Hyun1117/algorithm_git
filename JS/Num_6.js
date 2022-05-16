let count = 0;
let arr = [0,1,2,3,4,5,6,7,8,9];
let numbers = [1,2,3,4,6,7,8,0];
let sum = 0;
for(let i = 0; i< arr.length; i++)//이중 for문을 이용해 numbers의 배열에 있는 값 비교 함
{
    for(let j = 0; j < numbers.length; j++)
        {
            if(arr[i] == numbers[j])//숫자가 일치하면 arr배열에 있는 값을 0으로 바꿈
                arr[i] = 0;
        }
    console.log(arr[i]);
}
for(let i = 0; i < arr.length; i++)//arr에 배열에 모든 값을 더 함 숫자가 있는 건 결국 0이니깐 없는 숫자만 더해진다.
{
    sum = sum + arr[i];
}
console.log(sum);

