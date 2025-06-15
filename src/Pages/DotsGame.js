function getInitialDotCells(){
   let columns= 7;
   let rows = 7;
   let output= [];
   for(let row=1 ;row<=rows;row++){
       for(let column=1; column<= columns; column++){
           output.push({
             isLastRow : row===rows,
             isLastColumn : column=== columns,
             color : 'black',
             drawBottomLine : false, 
             drawRightLine : false,
             row,
             column,
           });
       }
   }
   return output;
}
function DotsGame(){
  const[dotCells,setDotCells] = useState();
}
