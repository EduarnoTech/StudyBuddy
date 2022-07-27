import React,{useState} from "react";

import FormFeatures from './FormFeatures'
import ChangeButtons from "./ChangeButtons";
import FormFeaturesLive from "./FormFeaturesLive";


const FormElem = () => {
  const [isClick,setIsClick]=useState(false)
   
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
