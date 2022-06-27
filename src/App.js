import React from "react";
import Header from "./component/Header"
import Home from "./component/Home"
import SignUp from "./component/SignUp"
import SignIn from "./component/SignIn"
import AllLawyer from "./component/AllLawyer"
import { BrowserRouter, Route, Routes} from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/signUp" element={<SignUp/>}/>
        <Route path = "/signIn" element={<SignIn/>}/>
        <Route path = "/AllLawyer" element={<AllLawyer/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
