import React from "react";

// Import sub-components
import Navbar from "./Navbar";
// import Home from "./parents/Home";
// import Player from "./parents/Player";
// import Team from "./parents/Team";
// import User from "./parents/User";
import Previous from "./children/Players/Previous";
import Teaminfo from "./children/Team/Teaminfo";
import Roster from "./children/Team/Roster";

import Standings from "./children/Home/Standings";

 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
      // <Route path="/" Component={Home}> </Route>
      // ______________
      // <Route path="/Players/:id" Component={Player}> </Route>
      // __________
      // <Route path="/team" Component={Team}> </Route>
      // __________
      // <Route path="/user" Component={User}> </Route>
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Main extends React.Component {

  constructor(props) {
    super();
    // If we are assigning an object property to an existing variable with the same name,
    // we can use this shorthand assignment syntax
    // Notice the data property here and the data const defined above the component
    this.state = {
      something: 0
    };
    // this.setTerm = this.setTerm.bind(this);
  }
  // componentDidUpdate(prevProps, prevState) {
  // }
  // setTerm(term) {
  //   this.setState({
  //     something: ""
  //   });
  // }

  render() {

//need to use react routers
return (

<div className="container">

<Navbar> </Navbar> 
<div className="col-md-12"> <Previous /></div>
<div className="col-md-2"> <Roster /></div>
<div className="col-md-7"> <Teaminfo /></div>
<div className="col-md-3"> <Standings /></div>


</div> 
    );
  }
}

// Export the componen back for use in other files
export default Main;
