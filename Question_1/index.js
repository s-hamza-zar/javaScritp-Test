let matrix=[[1,2,3],[4,5,6],[7,8,9]]


function request(){
    let sum=0;
    let product=1;
    for(let i=0; i<3; i++)
    {
     for(let j=0; j<3; j++){
     if(i==j){
    sum=sum+matrix[i][j]
    product=product*matrix[i][j]  
    }  
     
    }
   
    }
    document.write("The Sum of Diagonal is: ",sum)
    document.write("<br>")
    document.write("The product of Diagonal is: ",product)


}