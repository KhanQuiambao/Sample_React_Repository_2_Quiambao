import React, {Component} from "react";

class  ClassState extends Component{
    constructor() {
        super()
        this.state = {
            sampleContent: "Hello Worlds",
            bgcol: "red"
        };
        this.changeElement = this.changeElement.bind(this);

    }
    changeElement() {
        //document.getElementById("sampleElement").innerHTML = "Wow Nabago"
        //this.setState({sampleContent: "Wow Nabago", bgcol: "blue"})
        //this.setState({bgcol: "blue"}

        this.state.bgcol == "red" ? this.setState({sampleContent: "Wow Nabago", bgcol: "blue"}) : this.setState({bgcol: "red"})

    }
    render(){
        const {bgcol, sampleContent} = this.state;
        return(
            <>
                <h1 id="sampleElement" style={{background: bgcol}}>{sampleContent}</h1>
                {/*<button onClick={() => this.changeElement()}>Change Sample Element</button>*/}
                <button onClick={this.changeElement}>Change Sample Element</button>
            </>
        );
    }
}
 
export default ClassState;