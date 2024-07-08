let userscore= 0;
let machinescore=0;
let msg_show =document.querySelector("#msg1");
console.dir(msg_show);
let you_score = document.querySelector("#you");
let machine_score = document.querySelector("#machine");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const choiceid = choice.getAttribute("id");
        playgame(choiceid);
    });
});

const playgame=(choiceid)=>{
    console.log(`user choice = ${choiceid}`)
    const comp = compchoice();
        console.log(`comp choice= ${comp}`);
    if(choiceid == comp){
        draw();
    }
    else{
       let userwin = true;
       if(choiceid==="rock"){
        userwin = comp==="paper"?false:true;
       } 
       else if(choiceid ==="paper"){
        userwin = comp=="scissor"?false:true;
       }
       else{
        userwin= comp==="rock"?false:true;
       }
       show_winner(userwin);
    }
    
    
}

const compchoice=()=>{
    const options =["rock","paper","scissor"]
   let rand= Math.floor(Math.random()*3);
   return options[rand];

};
const draw=()=>{
    console.log("game was draw")
    msg_show.innerText = "game was draw";
}
const show_winner=(userwin)=>{
    if(userwin==true){
        console.log("you win")
        msg_show.innerText="YOU WIN";
        userscore +=1;
        you_score.innerText = userscore;
        msg_show.style.backgroundcolor = "green";

    

    }
    else{
        console.log("machine wins");
        msg_show.innerText="MACHINE WINs";
        machinescore +=1;
        machine_score.innerText = machinescore;
        msg_show.style.backgroundcolor = "red";

    }

}