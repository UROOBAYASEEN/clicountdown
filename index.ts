import inquirer from "inquirer"

import chalk from 'chalk';
let startwith=await inquirer.prompt([{
    message:'PLEASE ENTER NUMBER FOR COUNTDOWN',
    name:'number',
    type:'number'
}])

let countdown=()=>{
    let startingnumber=startwith.number;
    console.log(startingnumber)
    startwith.number--
}


let continecountdown=setInterval(countdown,1000)



let stopcountdown=()=>{
    clearInterval(continecountdown)
    console.log(1)
 console.log(chalk.green.bold('CONGRATULATION YOUR COUNTDOWN IS COMPLETE '));
 
    
}




setTimeout(stopcountdown,startwith.number*1000)


