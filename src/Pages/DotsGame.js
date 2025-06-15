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
  const[dotCells,setDotCells] = useState(getInitialDotCells());
  const [clickStatus,setClickStatus] = useState({noOfClick:0,moveDone:true,message:''});
  const onDotClick =(r,c)=>{
   if(clickStatus.noOfClick == 0){
      setClickStatus({noOfClick :1, moveDone:false,message:'',row1:r,col1:c});
      let newDotCells = dotCells.map(dotCell =>{
          if(r==dotCell.row && c == dotCell.column){
             return {...dotCell,color:"red"};
          }
         return dotCell;
      });
      setDotCells(newDotCells);
   }else if(clickStatus.noOfClick == 1){
      
   }
  }
  return (
    <div className="dots">
     {
      dotCells.map(dot =>{
       <>
         <div className="dot" style={{color:dot.color}}/>
         {dot.drawRightLine && <div className="rightLine"style={{color:dot.rightLineColor}}/>}
         {dot.drawBottomLine  && <div className="bottomLine"style={{color:dot.bottomLineColor}}/>
       </>
       });
     }
     </div>
     );
}
