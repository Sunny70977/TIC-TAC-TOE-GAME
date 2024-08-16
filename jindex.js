let cont = document.querySelectorAll(".container");
let newbutton=document.querySelector(".newbutton")
let resetbutton=document.querySelector(".resetbutton")
let message=document.querySelector("#winner")


let turn=true

const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]


]
cont.forEach((container)=>{
    container.addEventListener("click",()=>{
        console.log("box was clicked")

        if(turn){
            container.innerText="x";
            turn=false;
        }
        else{
            container.innerText="O"
            turn=true;
        }
        container.disabled=true;
            checkwinner();
           
    });
});


const resetGame=()=>{
    turn = true;
    enableboxes();
    message.classList.add("hide");

}




const enableboxes=()=>{
    for (let container of cont){
        container.disabled=false;
        container.innerText="";
    }

}


const disableboxes=()=>{
    for (let container of cont){
        container.disabled=true;
    }
}
const showwinner=(p1)=>{
    message.innerText=`WINNER :${p1}`;
    message.classList.remove("hide");
    disableboxes();

}

const newgame=()=>{
    turn=true
}


const checkwinner =  () => {
    for(let pattern of winningPatterns){
        let p1=cont[pattern[0]].innerText;
        let p2=cont[pattern[1]].innerText;
        let p3=cont[pattern[2]].innerText;
    

        if (p1!=""  && p2!=""  && p3 !=""){
            if(p1===p2 && p2===p3){
                console.log("winner",p1);
                showwinner(p1);
               
            
                
            }
        }
    }
}

resetbutton.addEventListener("click",resetGame);
newbutton.addEventListener("click",resetGame);