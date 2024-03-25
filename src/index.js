import React from "react";
import ReactDOM from "react-dom/client";
import NavbarApp from "./Apps/NavbarApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import DNoteForm from "./DNoteForm";




// setInterval(() => {
//   const myFirstElement =
//   <div>
//         <h1 className='headingStyle'>Hello React, create apppppopopopo!</h1>
//         <h2 style={demo}>This is H2</h2>
//         <h1 className='headingStyle'>{new Date().toLocaleTimeString()}</h1>
//         <App /> <List />
//     </div>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
  <NavbarApp />
  <DNoteForm />
  
  

  

</div>
);




// <h1 className="headingStyle">Hello React, create apppppopopopo!</h1>
        // <h2 style={demo}>This is H2</h2>
        // <h3 className="headingStyle">{this.props.children}</h3>
        // <h1 className="headingStyle">
        //   {this.state.date.toLocaleTimeString(this.props.locale)}
        // </h1>
        // <App />
        // <List />