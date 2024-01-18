

//document.getElementById("count-el").inner==5;


let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

let count=0


function increment(){
    count=count+1
    countEl.textContent=count
}

function save(){
    //let countStr = count + " - "
    let countStr =count +" - " 
   
    saveEl.textContent+=countStr 

   // saveEl.innerText+=countStr 
     //innertext is not aware of hidden element 
    // so textcontent is used
    //console.log(count)

    //if return to hit save button then count will be zero 
    // do this think

    countEl.textContent=0;
    count=0
}

