import React, { useState, useEffect } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import * as cityTimeZones from "city-timezones";
import moment from "moment-timezone";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import PaymentSubmission_dialog from "./PaymentSubmission_dialog";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Autocomplete,
} from "@mui/material";
import ImageField from "react-dropzone";
import ImageInput from "react-dropzone";
import en from "react-phone-number-input/locale/en.json";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "../account/account.css";
import axios from "axios";
import { decode as atob, encode as btoa } from "base-64";

const AccountProfileDetails = (props) => {
  const [countryVal, setCountryVal] = useState();
  const [regionValue, setRegionValue] = useState();
  const [panFile, setPanFile] = useState();
  // const [passAr, setPassAr] = React.useState([]);
  // const [panAr, setPanAr] = React.useState([]);
  const [showPaymentSub_dia, setShowPaymentSub_dia] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    accountName: props?.values?.accountName,
    accountNo: props?.values?.accountNo,
    ifsc: props?.values?.ifsc,
    upi_id: props?.values?.upi_id,
    passbook: "",
    pan: props?.values?.pan,
    panPic: "",
  });
  const [paymentError, setPaymentError] = useState({
    accountNameEr: false,
    accountNoEr: false,
    ifscEr: false,
    // passbookEr: false,
    panEr: false,
    // panPicEr: false,
  });
  // const [countryCodeVal, setCountryCodeVal] = useState("+(91)");

  let formdataPayment = new FormData();

  const handleChange = (event) => {
    console.log({ paymentstatus: props?.values?.paymentDetails_status });
    if (props?.values?.paymentDetails_status !== "new") {
      setPaymentError({
        accountNameEr: false,
        accountNoEr: false,
        ifscEr: false,
        passbookEr: false,
        panEr: false,
        panPicEr: false,
      });

      setPaymentDetails({
        ...paymentDetails,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handlePanfileChange = (event) => {
    if (props?.values?.paymentDetails_status !== "new") {
      setPaymentError({
        panPicEr: false,
      });

      console.log({ panpicTest: event.target.files });
      console.log({ panpicTest: event.target.files[0].buffer });
      let fileVal = event.target.files[0];
      

    let src = URL.createObjectURL(fileVal);

    props.setValues({
      ...props.values,
      panPic: src,
    });
      // let src=URL.createObjectURL(fileVal)

      setPaymentDetails({
        ...paymentDetails,
        panPic: fileVal,
      });
    }
  };

  const handlePassbookChange = (event) => {
    if (props?.values?.paymentDetails_status !== "new") {
      setPaymentError({
        passbookEr: false,
      });
      let fileVal = event.target.files[0];
      let src = URL.createObjectURL(fileVal);

      props.setValues({
        ...props.values,
        passbook: src,
      });


      setPaymentDetails({
        ...paymentDetails,
        passbook: fileVal,
      });
    }
  };

  const saveHandler = async (e) => {
    e.preventDefault();
    if (props.values.paymentDetails_status !== "new") {
      if (
        paymentDetails.accountName == null ||
        paymentDetails.accountName.length === 0
      ) {
        setPaymentError({
          ...paymentError,
          accountNameEr: true,
        });
      } else if (
        paymentDetails.accountNo == null ||
        paymentDetails.accountNo.length === 0
      ) {
        setPaymentError({
          ...paymentError,
          accountNoEr: true,
        });
      } else if (
        paymentDetails.ifsc == null ||
        paymentDetails.ifsc.length === 0
      ) {
        setPaymentError({
          ...paymentError,
          ifscEr: true,
        });
      }
       else if (
         props?.values?.passbook.slice(23)==null &&
        (paymentDetails.passbook == null ||
        paymentDetails.passbook.length === 0)
      ) {
        setPaymentError({
          ...paymentError,
          passbookEr: true,
        });
      }
      else if (paymentDetails.pan == null || paymentDetails.pan.length === 0) {
        setPaymentError({
          ...paymentError,
          panPicEr: true,
        });
      }
      else if (
        props?.values?.panPic.slice(23)==null && (paymentDetails.panPic == null ||
        paymentDetails.panPic.length === 0)
      ) {
        setPaymentError({
          ...paymentError,
          panPicEr: true,
        });
      }
      else {
        console.log({panPicTest: paymentDetails.panPic})
        console.log({ valuesTest: props.values });
        setShowPaymentSub_dia(true);

        // formdataPayment.append("accountNo", paymentDetails.accountNo);
        // formdataPayment.append("accountName", paymentDetails.accountName);
        // formdataPayment.append("ifsc", paymentDetails.ifsc);
        // formdataPayment.append("upi_id", paymentDetails.upi_id);
        // formdataPayment.append("passbook", paymentDetails.passbook);
        // formdataPayment.append("pan", paymentDetails.pan);
        // formdataPayment.append("panPic", paymentDetails.panPic);
        // // const watsNumber = props.values.watsNumber;
        // const whatsFunc = await axios.post(
        //   // "https://device6chatapi.el.r.appspot.com/api/conversations/contactValidation",
        //   `https://device6chatapi.el.r.appspot.com/api/tutor/setTutorPaymentDetailsWeb/${
        //     JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutor_id
        //   }`,
        //   formdataPayment
        // );
        // if (whatsFunc.data.contacts[0].status === "valid") {
        //   setPaymentError({
        //     ...paymentError,
        //     wa_idValid: false,
        //   });
        //   props.setIsSubmit(true);
        // } else {
        //   setPaymentError({
        //     ...paymentError,
        //     wa_idValid: true,
        //   });
        //   props.setIsSubmit(false);
        // }
      }

      // props.setValues({
      //   ...props.values,
      //   paymentDetails_status:"new"
      // })
    }
  };
  console.log({ testFileName: paymentDetails.passbook });
  console.log({ testFileName1: paymentDetails.panPic });

  useEffect(() => {
    if (
      regionValue === null ||
      regionValue === undefined ||
      regionValue.length === 0
    ) {
      let city = [];
      let city1 = cityTimeZones.findFromCityStateProvince(props.values.country);
      city1.forEach((el) => city.push(el.city));
      setRegionValue(city);
    }
  }, [props.values.country]);

  // useEffect(() => {
  //   let passbookAr = [];
  //   let panpicAr = [];
  //   passbookAr.push(
  //     btoa(
  //       new Uint8Array(props.values.passbook).reduce(function (data, byte) {
  //         return data + String.fromCharCode(byte);
  //       }, "")
  //     )
  //   );

  //   panpicAr.push(
  //     btoa(
  //       new Uint8Array(props.values.panPic).reduce(function (data, byte) {
  //         return data + String.fromCharCode(byte);
  //       }, "")
  //     )
  //   );
  //   setPassAr(passbookAr)
  //   setPanAr(panpicAr)
  //   //  props.setValues({
  //   //    ...props.values,
  //   //    passbook:passbookAr,
  //   //    panPic:panpicAr
  //   //  })
  // }, []);

  return (
    <>
      <Card >
        <CardHeader
          subheader="The information can be edited"
          title="Payment Details"
        />
        <Divider />
        <CardContent>
          <Grid container direction="row" spacing={3}>
            <Grid item md={4} xs={12}>
              {!paymentError.accountNameEr ? (
                <TextField
                  fullWidth
                  label="Account name"
                  name="accountName"
                  style={{ height: "45px", borderRadius: "7px" }}
                  onChange={handleChange}
                  required
                  value={paymentDetails.accountName}
                  variant="outlined"
                />
              ) : (
                <TextField
                  error
                  fullWidth
                  label="Please Enter Your Account Name."
                  name="accountName"
                  style={{ height: "45px", borderRadius: "7px" }}
                  onChange={handleChange}
                  required
                  value={paymentDetails.accountName}
                  variant="outlined"
                  // helperText="Please Enter Your Name."
                />
              )}
            </Grid>

            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Date Of Birth"
                name="dateOfBirth"
                onChange={handleChange}
                required
                value={props.values.dateOfBirth}
                variant="outlined"
              />
            </Grid> */}
            {/* <Grid item md={6} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  onChange={handleDateChange}
                  value={
                    props.values.dateOfBirth ? props.values.dateOfBirth : null
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      style={{ width: "100%" }}
                      label="Date Of Birth"
                      // className={classes.textField}
                      onKeyPress={(e) => e.preventDefault()}
                      onKeyDown={(evt) => evt.preventDefault()}
                      // required
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid> */}
            <Grid item md={4} xs={12}>
              {!paymentError.accountNoEr ? (
                <TextField
                  fullWidth
                  label="Account Number"
                  name="accountNo"
                  style={{ height: "45px", borderRadius: "7px" }}
                  onChange={handleChange}
                  required
                  value={paymentDetails.accountNo}
                  variant="outlined"
                />
              ) : (
                <TextField
                  error
                  fullWidth
                  label="Please Enter Your Account Number."
                  name="accountNo"
                  style={{ height: "45px", borderRadius: "7px" }}
                  onChange={handleChange}
                  required
                  value={paymentDetails.accountNo}
                  variant="outlined"
                  // helperText="Please Enter Your Name."
                />
              )}
            </Grid>

            <Grid item md={4} xs={12}>
              {!paymentError.ifscEr ? (
                <TextField
                  fullWidth
                  label="IFSC"
                  name="ifsc"
                  onChange={handleChange}
                  required
                  value={paymentDetails.ifsc}
                  variant="outlined"
                />
              ) : (
                <TextField
                  fullWidth
                  error
                  label="Please enter your IFSC"
                  name="ifsc"
                  onChange={handleChange}
                  required
                  value={paymentDetails.ifsc}
                  variant="outlined"
                />
              )}
            </Grid>

            <Grid item md={8} xs={12}>
              <TextField
                fullWidth
                label="UPI Id"
                name="upi_id"
                onChange={handleChange}
                value={paymentDetails.upi_id}
                variant="outlined"
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <input
                accept="image/*"
                id="contained-button-file-pass"
                onChange={handlePassbookChange}
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file-pass">
                <div style={{display:"flex"}}>
                <Button
                  variant="contained"
                  component="span"
                  style={{ fontSize: "13px" }}
                >
                  Bank Passbook (jpeg)
                </Button>

              
                  <img
                    src={props.values.passbook}
                    alt=""
                    style={{ width: "20%",marginLeft:"2px" }}
                  />
                  </div>
                
                {/* <p
                  style={{
                    color: "red",
                    fontSize: "10px",
                    marginBottom: "0px",
                    marginTop: "5px",
                  }}
                >
                  {paymentDetails?.passbook?.name}
                </p> */}
                {paymentError.passbookEr && (
                <p style={{ color: "red", fontSize: "10px",  marginBottom: "0px", marginTop: "5px"}}>
                  Please upload picture of your passbook
                </p>
              )}
              </label>
              
            </Grid>

            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="NAME(in Pan card "
                name="PAN_NAME"
                value={props.values.name}
                variant="outlined"
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <div style={{ display: "flex" }}>
                {!paymentError.wa_idEr ? (
                  !paymentError.wa_idValid ? (
                    <TextField
                      fullWidth
                      label="PAN Number"
                      name="pan"
                      onChange={handleChange}
                      value={paymentDetails.pan}
                      variant="outlined"
                    />
                  ) : (
                    <TextField
                      fullWidth
                      error
                      label="PAN Number"
                      name="PAN Number"
                      onChange={handleChange}
                      value={paymentDetails.pan}
                      helperText="Please enter a valid whatsapp number."
                    />
                  )
                ) : (
                  <TextField
                    fullWidth
                    error
                    label="Please enter a your PAN Number."
                    name="PAN Number"
                    onChange={handleChange}
                    value={paymentDetails.pan}
                    variant="outlined"
                  />
                )}
              </div>
            </Grid>

            <Grid item md={4} xs={12}>
              <input
                accept="image/*"
                id="contained-button-file"
                onChange={handlePanfileChange}
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <div>
                <Button
                  variant="contained"
                  component="span"
                  style={{ fontSize: "13px" }}
                >
                  Pan card (jpeg)
                </Button>

                  <img
                    src={props.values.panPic}
                    alt=""
                    style={{  width: "20%",marginLeft:"2px" }}
                  />
                </div>  
                {paymentError.panPicEr && (
                <p style={{color: "red", fontSize: "10px",marginBottom: "0px", marginTop: "5px" }}>
                  Please upload your pan card picture
                </p>
              )}
              </label>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        {showPaymentSub_dia && (
          <PaymentSubmission_dialog
            paymentDetails={paymentDetails}
            values={props.values}
            setValues={props.setValues}
            setShowPaymentSub_dia={setShowPaymentSub_dia}
            showPaymentSub_dia={showPaymentSub_dia}
          />
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="primary"
            onClick={saveHandler}
            variant="contained"
            style={{ backgroundColor: "rgb(80, 72, 229)", color: "white" }}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default AccountProfileDetails;
