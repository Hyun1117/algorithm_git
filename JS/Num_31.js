function sol(month, day)
{
    let today = new Date(2022, month - 1, day);
    today.setDate(today.getDate() + 98)
    let str = (today.getMonth()+1)+"월" + (today.getDate()+"일")
    return str; 
}
console.log(sol(1,18))
console.log(sol(11,27))
console.log(sol(6,22))