import React from "react";
import Index from "./component/Index";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./component/Register";
import Profile from "./component/Profile";
import Login from "./component/Login";
import Notfound from "./component/Notfound";
import Conttact from "./component/Conttact";
import Faq from "./component/Faq";
import Admintable from "./component/Admintable";
import Addproduct from "./component/Addproduct";
import Show from "./component/Show";
import About from "./component/About";
import Requireauth from './Requireauth'
import Admin from "./component/Admin";
import Forgetpassword from "./component/Forgetpassword";
import Resetpassword from "./component/Resetpassword";
import Feedback from "./component/Feedback";
import Baby from "./component/Baby";
import Men from "./component/Men";
import Women from "./component/Women";
import Accountsetting from "./component/Accountsetting";
import Needhelp from "./component/Needhelp";
import ChatApp from "./component/ChatApp";
import './style/addproduct.css'
import Showfeedback from "./component/Showfeedback";
import Requireaccess from "./Requireaccess";
import Adminprofile from "./component/Adminprofile";
import Cart from "./component/Cart";
import Address from "./component/Address";
import Success from "./component/Success";
import Cancel from "./component/Cancel";
import Update from "./component/Update";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Index/>
        <>
      <Routes>

        <Route path="/chatapp" element={<Requireauth> <ChatApp /> </Requireauth>} />
        <Route path="/contact" element={<Requireauth> <Conttact /> </Requireauth>} />
        <Route path="/faq" element={<Requireauth>   <Faq />  </Requireauth>} />
        <Route path="/aboutus" element={<Requireauth>  <About />  </Requireauth>} />
        <Route path="/feedback" element={<Requireauth>    <Feedback />  </Requireauth>} />
        <Route path="/babys" element={<Requireauth> <Baby /> </Requireauth>} />
        <Route path="/mens" element={<Requireauth><Men /></Requireauth>} />
        <Route path="/womens" element={<Requireauth><Women /></Requireauth>} />
        <Route path="/accountsetting" element={<Requireauth> <Accountsetting /> </Requireauth>} />
        <Route path="/needhelp" element={<Requireauth><Needhelp /></Requireauth>} />
        <Route path="/showfeedback" element={<Requireauth>  <Showfeedback /></Requireauth>} />
        <Route path="/admintable" element={<Requireauth><Admintable /></Requireauth>} />
        <Route path="/addproducts" element={<Requireauth>  <Addproduct /></Requireauth>} />
        <Route path="/profile/:id" element={<Requireauth>   <Profile /> </Requireauth>} />   
        <Route path="/profile" element={<Requireauth>   <Profile /> </Requireauth>} />       
        <Route path="/update/:id" element={<Requireauth><Update /></Requireauth>} />
        <Route path="/success" element={<Requireauth><Success /></Requireauth>} />
        <Route path="/cancel" element={<Requireauth><Cancel /></Requireauth>} />
        <Route path="/address" element={<Requireauth><Address /></Requireauth>} />
        <Route path="/cart" element={<Requireauth><Cart /></Requireauth>} />
        <Route path="/adminprofile" element={<Requireauth><Adminprofile /></Requireauth>} />
        

        <Route path="/login" element={<Requireaccess><Login /></Requireaccess>} />
        <Route path="/register" element={<Requireaccess><Register /></Requireaccess>} />
        <Route path="/admin" element={<Requireaccess><Admin /></Requireaccess>} />


        <Route path="/" element={<Show />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
      </BrowserRouter>
    </>
  );
}

export default App;
