import React,{useState} from "react";
import Button from "@mui/material/Button";
import FormFeatures from './FormFeatures'
import ChangeButtons from "./ChangeButtons";
import FormFeaturesLive from "./FormFeaturesLive";


const FormElem = () => {
  const [isClick,setIsClick]=useState(false)
    // const ClickHandler1=(val)=>{
    //         setIsClick(val)
    // }
//     const ClickHandler2=()=>{
//         setIsClick(true)
// }
console.log(!isClick);
  return (
    <div>
      <div class="main-body">
        <div class="page-wrapper">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Book Sessions</h5>
                </div>
                <div class="card-body">
                  {/* <h5>Form controls</h5>  */}
                  
                  <ChangeButtons isClick={isClick} setIsClick={setIsClick}/>
                  <hr />
                 {!isClick && <FormFeatures />}
                 {isClick && <FormFeaturesLive />}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormElem;
