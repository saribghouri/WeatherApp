// import { useEffect, useState } from "react";
// import "./App.css";
// import Home from "./component/home";
// import Parent1 from "./practice/Parent1";
// import { ParentContext } from "./practice/ParentConext";
// import { browserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {
//   // const [state, setState] = useState({ title: " this is title" });

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setState({
//   //       title: " this is title updated",
//   //     });
//   //   }, 5000);
//   // }, []);

//   // return (
//   //   <div className="div">

//   {
//     /* <ParentContext.Provider value={state}> */
//   }
//   {
//     /* <Parent1 /> */
//   }
//   {
//     /* </ParentContext.Provider> */
//   }
//   // </div>
//   // );

//   return (
//     //     <Home/>
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/weathercard">gallery</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           <Route path="expenses" element={<Expenses />} />
//           <Route path="Invoices" element={<Invoices />} />
//           <Route path="about" element={<About />} />
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/gallery">
//             <Users />
//           </Route>
//           <Route path="/" exact>
//             <Home />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import './App.css';
import Home from "./component/home";
// import About from "./component/about";
// import Gallery from "./component/gallery";
import Login from "./component/login";
import Signup from "./component/signup";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router> 
        <nav className='nav'>
          <ul>
            <li> <Link to="/">Home</Link>             </li>
            <li> <Link to="/about">About</Link>       </li>
            <li> <Link to="/gallery">Gallery</Link>   </li>
            
            <li> <Link to="/login">Login</Link>   </li>
            <li> <Link to="/signup">Signup</Link>   </li>
          </ul>
        </nav>

        <Routes>
      
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          
          {/* <Route path="/about" element={<About />} /> 
          <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/" element={ <Home />} />

        </Routes>
    </Router>
  );
}

export default App; 