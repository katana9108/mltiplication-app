const NUM1 = Math.ceil(Math.random()*20);
const NUM2 = Math.ceil(Math.random()*10);
const FORM = document.getElementById('form');
const REPONSE = NUM1*NUM2;
const POINT = document.getElementById('point');
const INPUT = document.getElementById('input');
let point = JSON.parse(localStorage.getItem("point"));

if(!point){
    point=0;
}
if(point>1){
    POINT.innerText= `Vous avez actuellement : ${point} points`
}else{
    POINT.innerText=` Vous avez actuellement: ${point} point`;
}


const QUESTION1 = document.getElementById("question");
QUESTION1.innerText = `Quel est le résultat de ${NUM1} multpiler par ${NUM2} ?`
FORM.addEventListener("submit",(e)=>{

    const USERREPONSE = +INPUT.value;
    if(USERREPONSE === REPONSE){
        point++
        stockage();
    }else{
        point--
        stockage();

    }

});

function stockage(){
    localStorage.setItem("point",JSON.stringify(point));
}