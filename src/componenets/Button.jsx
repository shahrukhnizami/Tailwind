function Button({text,onClick}){
return(
    <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {text}{onClick}
  </button>
)
}
export default Button;