import React from "react";
import {useHistory} from "react-router-dom";
 const LandingPage = () =>
{
  let history = useHistory();
  function handleClick() {
    history.push("/main");
  }
return( <div className="overlay">
<div className="middle">
<div className="launch-text-container">
<h1 className="launch-text" onClick={handleClick}>Launch</h1>
  </div>
</div>
<div className="row">
<div className="column">
  <img src="https://i.ibb.co/s9S2Bvz/musk1.jpg" style={{width:"100%"}} />
  <img src="https://i.ibb.co/S631xtf/musk3.jpg" /> 
  <img src="https://i.ibb.co/M9kDv61/musk4.jpg" />
  <img src="https://i.ibb.co/RcpgbxT/musk5.jpg" />
  <img src="https://i.ibb.co/S0YDtKX/musk8.jpg" />
  <img src="https://i.ibb.co/v4WNG2k/musk7.jpg" />
</div>
<div class="column">
  <img src="https://i.ibb.co/S631xtf/musk3.jpg" />
  <img src="https://i.ibb.co/RcpgbxT/musk5.jpg" /> 
  <img src="https://i.ibb.co/S0YDtKX/musk8.jpg" />
  <img src="https://i.ibb.co/v4WNG2k/musk7.jpg" />
  <img src="https://i.ibb.co/M9kDv61/musk4.jpg" />
  <img src="https://i.ibb.co/K9052Z1/musk14.jpg" />
  <img src="https://i.ibb.co/xsHP9G2/musk12.jpg" />
</div>
<div class="column">
  <img src="https://i.ibb.co/M9kDv61/musk4.jpg" />
  <img src="https://i.ibb.co/S0YDtKX/musk8.jpg" /> 
  <img src="https://i.ibb.co/v4WNG2k/musk7.jpg" />
  <img src="https://i.ibb.co/xsHP9G2/musk12.jpg" />
  <img src="https://i.ibb.co/s9S2Bvz/musk1.jpg" />
  <img src="https://i.ibb.co/S631xtf/musk3.jpg" />
  <img src="https://i.ibb.co/xsHP9G2/musk12.jpg" />
  <img src="https://i.ibb.co/fkLgKMt/musk9.jpg" />

</div>
<div class="column">
  <img src="https://i.ibb.co/9g3dVQg/musk10.jpg" />
  <img src="https://i.ibb.co/mXhJZxG/musk11.jpg" /> 
  <img src="https://i.ibb.co/xsHP9G2/musk12.jpg" />
  <img src="https://i.ibb.co/5xMjtN0/musk13.jpg" />
  <img src="https://i.ibb.co/fkLgKMt/musk9.jpg" />
  <img src="https://i.ibb.co/v4WNG2k/musk7.jpg" />
  <img src="https://i.ibb.co/xsHP9G2/musk12.jpg" />
  <img src="https://i.ibb.co/mXhJZxG/musk11.jpg" />
  <img src="https://i.ibb.co/9g3dVQg/musk10.jpg" />
</div>

</div>

</div>)
}

export default LandingPage;