import React ,{useState}from "react";
import {useNavigate} from 'react-router-dom'
import icon from '../images/netflix-logo.png'
import '../style.scss'
const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
 
  
];
const Frontpage=()=>{
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const navigate=useNavigate();
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  const handleGetStarted =()=>{
    navigate("/home");
  }
  return(
    <div className="frontpage">
<div className="navbar-f d-flex mb-3">
  <div className="icon me-auto p-1">
  <img src={icon} alt=""/></div>
  <div className="lang p-1">
    <select onChange={handleLanguageChange} value={selectedLanguage}>
      <option value='' disabled>
     language
        </option>
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
     

    </select>
  </div>
  <button className="p-1">Sign in</button>
</div>
<div className="middle">
  <h1> Unlimited movies, TV</h1>
  <h1>shows and more</h1>
  <span>Watch anywhere. Cancel anytime.</span>
  <p>Ready to watch? Enter your email to create or restart your memebership.</p>

<div className="signup">
  <input type="email" placeholder="Email address"/>
  <button onClick={handleGetStarted}>Get Started 
    </button></div></div>
</div>

  )
}
export default Frontpage