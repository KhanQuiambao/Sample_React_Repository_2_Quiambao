import {useState} from "react";

const FunctionalState = () => {
    let [sampleContent, changeElement] = useState("Hello World") ;
    let [color, changeColor] = useState ("red");
    
    function changeSomething(){
        changeElement("Wow Nabago Na");
        color == "red" ? changeColor("blue") : changeColor("red");
        
    }
    
    return ( 
        <>
            <h1 style={{background: color}}>{sampleContent}</h1>
            <button onClick={() => changeSomething ()}>Change Sample Element</button>
        
        </>

     );
}
 
export default FunctionalState;