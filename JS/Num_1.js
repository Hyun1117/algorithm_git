
var a = 4;
var b = 3;
//결과값을 제대로 나오는데 왜 프로그래머스는 오답이라 하는지 이해가 안된다.
for(var i = 0; i<b; i++)
{
    var star = " ";
    for(var j = 0; j<a; j++)
    {
        star = star + "*"
    }
    console.log(star)
}

//문제풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { //입력받은 숫자를 data에 받는다.
    const n = data.split(" "); // data를 배열로 변경
    const a = Number(n[0]), b = Number(n[1]); // a는 한줄에 대한 별의 갯수, b는 몇줄을 출력할지
    const row = "*".repeat(a)
    for(let i = 0; i< b; i++)
        {
            console.log(row);
        }
});