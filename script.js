let userScore=0;
let compScore=0;

const logos=document.querySelectorAll(".logo");

logos.forEach((logo)=> {
    logo.addEventListener("click", () =>{
        let userclicked = logo.id
        playGame(userclicked);

    })
});

const compChoice=() =>{
    const options= ["rock","paper","scissor"];
    const randopt= Math.floor(Math.random() * 3 ) ;
    let compChoicefin= options[randopt];
    return compChoicefin;
};

const playGame= (userclicked) =>{
    const computerchoice=compChoice();
    if (userclicked=== computerchoice){
        //draw
        document.querySelector("#msg").innerText="Game Draw! Play Again";
        document.querySelector("#msg").style.backgroundColor="#081b31";
    }else{
        let userwin=true;
        if (userclicked==="rock"){
            //paper , scissor
            if (computerchoice==="paper"){
                userwin=false;
            }else {
                if (computerchoice==="scissor"){
                    userwin=true;
                }
            }
        }
        if (userclicked==="paper"){
            //rock , scissor
            if (computerchoice==="paper"){
                userwin=true;
            }else {
                if (computerchoice==="scissor"){
                    userwin=false;
                }
            }
        }
        if (userclicked==="scissor"){
            //paper , rock
            if (computerchoice==="paper"){
                userwin=true;
            }else {
                if (computerchoice==="rock"){
                    userwin=false;
                }
            }
        }
        checkwinner(userwin,userclicked,computerchoice);
    }
};

const checkwinner=(userwin,userclicked,computerchoice) =>{
    if (userwin===true){
        userScore++ ;
        document.querySelector("#msg").innerText=`You Won😃- ${userclicked} beats ${computerchoice}.`;
        document.querySelector("#msg").style.backgroundColor="#059212";
        document.querySelector("#user-score").innerText=userScore;
    }
    else if(userwin===false) {
        compScore++ ;
        document.querySelector("#msg").innerText=`You Lose!😬- ${computerchoice} beats your ${userclicked}.`;
        document.querySelector("#msg").style.backgroundColor="#FF0000";
        document.querySelector("#comp-score").innerText=compScore;
    }
};
