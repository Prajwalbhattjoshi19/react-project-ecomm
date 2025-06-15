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
  const onDotClick =()=>{
   if(clickStatus == "no_click"){
      setClickStatus("first_click");
   }else if(clickStatus == "first_click"){
      
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
