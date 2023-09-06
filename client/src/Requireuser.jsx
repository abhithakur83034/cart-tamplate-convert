import React from "react";
import {  Route, Routes } from "react-router-dom";
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


const Requireuser = () => {

  
  const user = JSON.parse(localStorage.getItem('usertoken'))
  const admin = JSON.parse(localStorage.getItem('admintoken'))


  return (
    <>
    <Routes>
      {
        admin || user ?
        (
          <>
           <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
          <Route path="/"  element={   <> <Show /></>}/>
          <Route path="/chatapp" element={ <Requireauth> <ChatApp /> </Requireauth> }  />
          <Route  path="/profile/:id"   element={ <Requireauth>   <Profile /> </Requireauth>  } />
          <Route path="/contact"  element={ <Requireauth> <Conttact /> </Requireauth> }/>
             <Route  path="/faq"  element={ <Requireauth>   <Faq />  </Requireauth> } />
           <Route path="/aboutus"  element={  <Requireauth>  <About />  </Requireauth> } />
          <Route  path="/feedback"  element={  <Requireauth>    <Feedback />  </Requireauth> } />
          <Route  path="/babys" element={ <Requireauth> <Baby /> </Requireauth> }/>
          <Route path="/mens" element={   <Requireauth><Men /></Requireauth> }  />
          <Route path="/womens" element={   <Requireauth><Women /></Requireauth> }   />
          <Route path="/accountsetting" element={ <Requireauth> <Accountsetting /> </Requireauth> } />
          <Route path="/needhelp" element={   <Requireauth><Needhelp /></Requireauth> } />
           <Route path="/contact"element={<Requireauth>  <Conttact /></Requireauth>}/>
          </>
        )
        :
        (
          <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          </>
        )

      }


          <Route path="/admin" element={<Admin />} />
          <Route path="/forgetpassword" element={<Requireauth><Forgetpassword /></Requireauth>} />
          <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
          <Route path="/"  element={   <> <Show /></>}/>
          <Route path="/chatapp" element={ <Requireauth> <ChatApp /> </Requireauth> }  />
          {
            user ?
            <Route  path="/profile/:id"   element={ <Requireauth>   <Profile /> </Requireauth>  } />
            :
            <Route  path="/profile"   element={ <Requireauth>   <Profile /> </Requireauth>  } />
          }
         
         {
          admin ? 
          (
            <>
            <Route path="/showfeedback"element={<Requireauth>  <Showfeedback/></Requireauth> }/>
          <Route path="/admintable" element={  <Admintable /> } />
          <Route path="/addproducts" element={<Requireauth>  <Addproduct /></Requireauth> } /> 
        </>
          )
          :
          ""
         }
         
         
         
          <Route path="*" element={<Notfound />} />
        </Routes>
    </>
  )
}

export default Requireuser