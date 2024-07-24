import React, { useState } from 'react';
import './Login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="cont">
      <div className="formcont">
        <div className="buttoncont">
          <button 
            className={`togglebutton ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            Log in
          </button>
          <button 
            className={ `togglebutton ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        <form>
          <input type="text" placeholder="User Name" />
          <input type="password" placeholder="Enter Password" />
          <button className="submitbutton">{isLogin ? 'Log in' : 'Register'}</button>
        </form>
        {/* <div className="socialcont">
          <FontAwesomeIcon icon={faFacebookF} className="socialicon" />
          <FontAwesomeIcon icon={faGoogle} className="socialicon" />
          <FontAwesomeIcon icon={faTwitter} className="socialicon" />
        </div> */}
      </div>
    </div>
  );
}

export default Login;