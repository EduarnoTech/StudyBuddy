import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import ForgetPassForm from '../components/ForgetPassForm';

const ForgetPass = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar nClass='m-auto' hbtnClass='new_btn' />
            <ForgetPassForm/>
        </div>
    )
}
export default ForgetPass;