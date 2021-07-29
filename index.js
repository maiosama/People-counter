 let count = 0;
 let counter = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 

 function increment(){
    count+=1
    counter.innerHTML= count

 }
function save(){
   var countString = count + " - "
   saveEl.innerHTML += countString
   counter.innerHTML=0
   count = 0
}


  