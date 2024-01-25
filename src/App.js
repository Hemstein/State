
import React from "react";

class App extends React.Component{
  constructor(){
    super()
    this.state={
    person:{
    name:"Haythem Ben Jemaa",
    bio:"ahla w sahla",
    imge:"https://www.seokratie.de/wp-content/uploads/2019/04/bild-url-beispiel-751x501.jpg",
    profession:"Software Developer"
  },
    Boolean:false}

  }

  
  render(){
    return(
      <div>
      { this.state.Boolean ? <div>
      <h1>{this.state.person.name}</h1>;
      <h1>{this.state.person.bio}</h1>;
      <img src={this.state.person.imge}/> ;
      <h1>{this.state.person.profession}</h1>;

    </div>:null
    }
    <button onClick={()=>this.setState({Boolean:!this.state.Boolean})}>click here</button>
    </div>
  )
}
  
}

export default App;
