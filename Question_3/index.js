let cardBody=document.querySelector(".card-body")

let object =
{
parent_name: 'Father',
child1: 'Sumair'
}
let objectTemp={

}
let array = ["Hamza","Shahbaz","Jahanzaib","Junaid","Tabish","Ahtisham","Asghar"]
let keyValue;
for (let i=0;i<array.length;i++){
  let a=i+2
  keyValue="child"+a;
  objectTemp[keyValue]=array[i]
}

object={...object,...objectTemp}

cardBody.innerHTML="This is the final object: "+JSON.stringify(object)