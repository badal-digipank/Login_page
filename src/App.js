import React from 'react';
import "./main.scss";


function App() {
  return (
    <div className="first">
         <div className="second">
              <div className="Picture1">
                <img src="Patten_Bottom.png" alt="bottom img" height="400" width="350"/>
              </div>
              <div className="Picture2"> 
                <img src="image.png" alt="bottom img" height="600" width="550"/> 
              </div>
           </div>

    <div className="third">
         <div className="Loginbox">
               <div className="AB">Welcome to Post Publisher</div>
               <div className="AC">Let's get your account set up</div>
               <div className="AD">

                                   <span style={{fontSize:"20px"}}>Already member?</span>
                                   <span style={{fontSize:"21px", color:"#12BdF4"}}> Sign in</span></div>
               <div className="AE">
                       
                       <div>Email</div>
                       <div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                           <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                           </svg></div>
                  </div>

               <div className="AE">
                 <div>6+ Character & 1 Capital letter</div>
                 <div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                       <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                         </svg></div>
               
               </div>
               <div className="AE">
                 <div>Confirm password</div>
                 <div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                        </svg></div>
                </div>
                 <div style={{margin:"24px 0px"}}>By clicking '<span style={{color:"orange"}}>create account</span>'
                      .i agree to post publisher<span style={{fontStyle:"italic"}}><u>terms of use </u> </span>
                       and <span style={{fontStyle:"italic"}}><u>privacy policy</u></span></div>
               <div className="AF">Create account</div>
         </div>
         <div className="Picture3">
            <img src="Patten_Top.png" alt="bottom img" height="400" width="350"/>
          </div>
     
      </div>

    </div>
  );
}

export default App;
