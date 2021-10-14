let matrixA=[[2,4,4,4],[3,2,2,2],[1,5,9,1],[5,5,5,5]]
let matrixB=[[2,4,4,4],[3,2,2,2],[1,5,9,1],[5,5,5,5]]
let matrixC=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
for(let i=0; i<4; i++)
{
 for(let j=0; j<4; j++)
 {
  for(let k=0; k<4; k++){
   matrixC[i][j]=matrixC[i][j]+matrixA[i][k]*matrixB[k][j]
 }
}}

function request(){
for(let i=0; i<4; i++)
{
 for(let j=0; j<4; j++){
document.write(matrixC[i][j]+" ");
    
 }
document.write("<br>");
}
}
   

