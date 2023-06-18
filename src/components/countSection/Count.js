import React from "react";
import "./Count.css";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';



const Count = () => {
  return (
    <div className="count_container">
      <div className="row">
        <div className="col-4 ps-5 mb-5">
          <p>Institute Partnerships </p>
          <h3 className = 'pt-3 '>  <AccountBalanceIcon sx= {{color : "grey" , marginBottom : "5px" }} />  600+</h3>
        </div>
        <div className="col-4 ps-5 mb-5">
          <p>Students Financed By Us </p>
          <h3 className = 'pt-3'><SchoolIcon sx= {{color : "grey" , marginBottom : "5px" }} /> 70000+</h3>
        </div>
        <div className="col-4 ps-5 mb-5">
          <p>Loans Disbursed </p>
          <h3 className = 'pt-3'><MonetizationOnIcon sx= {{color : "grey" , marginBottom : "5px" }} /> 1000+Cr</h3>
        </div>
      </div>


      <div className="row">
        <div className="col-4 ps-5 ">
          <p>Courses </p>
          <h3 className = 'pt-3'>  <LibraryBooksIcon sx= {{color : "grey", marginBottom : "5px" }} /> 5000+</h3>
        </div>
        <div className="col-4 ps-5 ">
          <p>Cities Covered  </p>
          <h3 className = 'pt-3'><LocationCityIcon sx= {{color : "grey" , marginBottom : "5px" }}  /> 240+</h3>
        </div>
        <div className="col-4 ps-5 ">
          <p>Lending Partners </p>
          <h3 className = 'pt-3'><HandshakeIcon sx= {{color : "grey" , marginBottom : "5px"}} /> 13 </h3>
        </div>
      </div>


    </div>
  );
};

export default Count;
