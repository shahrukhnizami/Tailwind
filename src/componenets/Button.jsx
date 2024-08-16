function Button({text,bgColor,hover,borderColor}){
return(
    <button  className={`
      ${bgColor?bgColor:'bg-blue-500'}  
      ${hover?hover:"hover:bg-blue-700"}
      ${borderColor?borderColor:"border-grey-500"} 
      
      text-white font-bold py-2 px-4 rounded mx-2 border-2 border-double rounded `}>
    {text}
   
  </button>
)
}
export default Button;