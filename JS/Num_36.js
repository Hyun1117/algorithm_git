function solution(arr, n){
	let answer=[];
    let str = [];
    let count = 1;
    for(let i = 0; i < arr.length; i++)
    {
        count = 1;
        for(let j = i + 1; j<arr.length; j++)
        {
            if(arr[i] == arr[j])
            {
                count++;
            }
            if(count < 2)
            answer.push(arr[i])
            else if(count >= 2)
            {
                str.push(arr[i])
            }
        }
    }
	console.log(answer);
    console.log(str)
}
let arr=["coke", "water", "glass", "dog", "dog", "glass", "vitamin"];
let n=2;
console.log(solution(arr, n))