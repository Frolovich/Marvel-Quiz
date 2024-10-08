import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from './Firebase';
import { Tooltip } from 'react-tooltip';
  
const Logout = () => {
    const firebase = useContext(FirebaseContext);
    
    const [checked, setChecked] = useState(false);

   useEffect(() => {
    if(checked) {
        console.log("Déconnexion")
        firebase.signoutUser();
     }
  }, [checked, firebase])

  const handleChange = event => {
    setChecked(event.target.checked)
}

  return (
    <div className="logoutContainer">
      <label className="switch">
        <input 
         onChange={handleChange}
         type="checkbox"
         checked={checked} />
         <span className="slider round" data-tooltip-place="left" data-tooltip-id="my-tooltip"  
    data-tooltip-content="Déconnexion"></span>
    
      </label>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Logout;
