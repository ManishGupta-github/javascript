// for(let i=0;i<5;i++)
// {
//     console.log("Manish");
// }
//for-of loop,only for String and Arrays not for Objects
// let str="Apna College";
// for(let i of str){
//     console.log("i=",i);
// }
//for-in loop,for Objects
// let student={
//     name:"Manish Gupta",
//     age:20,
//     cgpa:7.6,
//     isPass:true
// };
// for(let key in student)
// {
//     console.log("key:",key,"Value:",student[key]);
// }
//
//Practice Qs1
for(let num=0;num<=100;num++)
{
    if(num%2!==0)
    {
            console.log("num=",num);
    }
    
}
//Practice Qs2
let gameNum=25;
let userNum=prompt("Guess the Game Number:");
while(userNum==gameNum)
{
    console.log("You Guess the Wrong One,Guess ");
}
console.log("You Guess the Wrong One,Guess ");