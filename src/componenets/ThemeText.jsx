function ThemeText({ text, underline, font, color, children}) {
    return (
      <div
        className={` font-mono 
      ${underline ? "underline" : ""}
      ${font ? "font-" + font : "font-light"}
      ${color ? color : "text-gray-900"}`}
      >
        
        {text || children}
        
      </div>
    );
  }
  
  export default ThemeText;