import React, { useState, useEffect } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import * as cityTimeZones from "city-timezones";
import moment from "moment-timezone";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Autocomplete
} from "@mui/material";
import en from "react-phone-number-input/locale/en.json";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./account.css";
import axios from "axios";

// const states = [
//   {
//     value: "Bangladesh",
//     label: "bangladesh",
//   },{
//     value: "Kanpur",
//     label: "kanpur",
//   },{
//     value: "jaipur",
//     label: "Jaipur",
//   },{
//     value: "mumtaj",
//     label: "Mumtaj",
//   },{
//     value: "mumeru",
//     label: "Mumeru",
//   },{
//     value: "mumbai",
//     label: "Mumbai",
//   },
//   {
//     value: "agra",
//     label: "Agra",
//   },
//   {
//     value: "new-york",
//     label: "New York",
//   },
//   {
//     value: "san-francisco",
//     label: "San Francisco",
//   },
// ];

const AccountProfileDetails = (props) => {
  const [countryVal, setCountryVal] = useState();
  const [regionValue, setRegionValue] = useState();
  const [profileError,setProfileError]=useState({
    usernameEr:false,
    emailEr:false,
    wa_idEr:false,
    wa_idValid:false,
    countryCodeEr:false
  })
  // const [countryCodeVal, setCountryCodeVal] = useState("+(91)");

  const handleChange = (event) => {
    setProfileError({
      usernameEr:false,
      emailEr:false,
      wa_idEr:false,
      wa_idValid:false,
      countryCodeEr:false
    })

    props.setValues({
      ...props.values,
      [event.target.name]: event.target.value,
    });


  };

  // const handleNumberChange=(event)=>{

  //   let num=countryCode+event.target.value;
  //   console.log({numTest:num})
  //   props.setValues({
  //     ...props.values,
  //     watsNumber: num,
  //   });
  // }
  const saveHandler=async(e)=>{
    e.preventDefault()
    if(props.values.username==null || props.values.username.length===0){
      setProfileError({
        ...profileError,
        usernameEr:true
      })
    }
    else if(props.values.email==null || props.values.email.length===0){
      setProfileError({
        ...profileError,
        emailEr:true
      })
    }
    else if(props.values.watsNumber==null || props.values.watsNumber.length===0){
      setProfileError({
        ...profileError,
        wa_idEr:true
      })
    }
    else if(props?.values?.countryCode==null || props?.values?.countryCode?.length===0){
      setProfileError({
        ...profileError,
        countryCodeEr:true
      })
    }
    else{
      const watsNumber=props.values.watsNumber;
      const whatsFunc=await axios.post("https://device6chatapi.el.r.appspot.com/api/conversations/contactValidation",{wa_id:watsNumber})
      if(whatsFunc.data.contacts[0].status==="valid"){
        setProfileError({
          ...profileError,
          wa_idValid:false
        })
        props.setIsSubmit(true)
      }
      else{
        setProfileError({
          ...profileError,
          wa_idValid:true
        })
        props.setIsSubmit(false)
      }
    }
  }

  const handleDateChange = (i) => {
    props.setValues({
      ...props.values,
      dateOfBirth: i,
    });
  };

  const changeCountryHandler = (val) => {
    console.log({ valtest: val });
    props.setValues({
      ...props.values,
      country: val,
    });
    setCountryVal(val);
    let city = [];
    let city1 = cityTimeZones.findFromCityStateProvince(val);
    city1.forEach((el) => city.push(el.city));
    setRegionValue(city);
    console.log({ cityTestVal: city });
  };

  const countryCodeHandler = (val) => {
    setProfileError({
      ...profileError,
      countryCodeEr:false
    })
    // e.preventDefault();
    // let val = e.target.value;
    // // let val1=en.val
    console.log({ vaaaaaaal: val });
    // let ind=val1.indexOf('+')
    // let countryCode=val.substring(0,ind)

    let val1 = getCountryCallingCode(val);
    props.setCountryCode(val1);
    let countryCode = "+" + "(" + val1 + ")";
    console.log({ vaaaaaaal: countryCode });
    props.setValues({
      ...props.values,
      countryCode: countryCode,
    });
  
    // let insVal = `${en[val]} +${getCountryCallingCode(val)}`;
    // props.setInsCountryVal(insVal);
  };

  const handleCityChange = (e) => {
    console.log({ bigTest: e.target.value });

    const timezones2 = cityTimeZones.findFromCityStateProvince(e.target.value);
    console.log({ timezones2 });

    let zone_name = "";
    let ind;
    let inde = [];
    timezones2.map((el1, index) => {
      if (el1.city === e.target.value) {
        inde.push(index);
        console.log({ city194: el1.city });
        if (el1.country === props.values.country) {
          ind = index;
        }
      }
    });

    if (ind !== null && ind !== "" && ind !== undefined) {
      zone_name = timezones2[ind]?.timezone;
    } else if (inde.length !== 0) {
      zone_name = timezones2[inde[0]]?.timezone;
    } else {
      zone_name = timezones2[0]?.timezone;
    }
    // let zone_name = timezones2[0]?.timezone;
    console.log({ zoneNameCheck: zone_name });
    // setzoneName(zone_name);

    let timezone1 = moment()?.tz(zone_name)?.format();
    console.log({ timeZone1Test: timezone1 });

    props.setValues({
      ...props.values,
      timezone: timezone1,
      city: e.target.value,
    });
  };

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

  const submitHandler = (e) => {
    e.preventDefault();
    props.setIsSubmit(true);
  };

  return (
    <>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              {!profileError.usernameEr ? <TextField

                fullWidth
                label="Full name"
                name="username"
                style={{ height: "45px", borderRadius: "7px" }}
                onChange={handleChange}
                required
                value={props.values.username}
                variant="outlined"
              />
            :
            <TextField
                error
                fullWidth
                label="Please Enter Your Full Name."
                name="username"
                style={{ height: "45px", borderRadius: "7px" }}
                onChange={handleChange}
                required
                value={props.values.username}
                variant="outlined"
                // helperText="Please Enter Your Name."
              />
            
            }
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
            <Grid item md={6} xs={12}>
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
            </Grid>

            <Grid item md={6} xs={12}>
              {!profileError.emailEr ? <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={props.values.email}
                variant="outlined"
              />
            :
            <TextField
                fullWidth
                error
                label="Please enter your email address"
                name="email"
                onChange={handleChange}
                required
                value={props.values.email}
                variant="outlined"
              />
            }
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Facebook Username"
                name="facebookUsername"
                onChange={handleChange}
                value={props.values.facebookUsername}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <div style={{ display: "flex" }}>
                {/* <select
                  value={countryCodeVal}
                  onChange={(e) => countryCodeHandler(e)}
                  style={{
                    width: "30%",
                    marginRight: "10px",
                    borderRadius:"7px"
                  }}
                >
                  <option value="">{countryCodeVal}</option>
                  {getCountries().map((country) => (
                    // {console.log({country:country})}
                    <option key={country} value={country}>
                      {en[country]} +{getCountryCallingCode(country)}
                    </option>
                  ))}
                </select> */}

                <Autocomplete
                  id="country-select-demo"
                  disableClearable
                  onChange={(event,val)=>countryCodeHandler(val)}
                  value={props.values.countryCode}
                  sx={{ width: "45%" }}
                  style={{paddingRight:"4px"}}
                  options={getCountries()}
                  autoHighlight
                  // getOptionLabel={(country) => country }
                    // "+("+ getCountryCallingCode(country)+")" }
                  renderOption={(props, country) => (
                    <Box
                      component="li"
                      keys={country}
                      {...props}
                    >
                     
                    {/* { en[country] +" +"+ getCountryCallingCode(country)} */}
                    {" +"+ getCountryCallingCode(country)}
                    </Box>
                  )}
                  renderInput={(params) => (
                   !profileError.countryCodeEr ? <TextField
                      {...params}
                     
                      label="Country Code"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                    :
                    <TextField
                      {...params}
                     error
                      label="Country Code"
                    />
                  )}
                />

                {!profileError.wa_idEr  ? !profileError.wa_idValid ? <TextField
                  fullWidth
                  label="WhatsApp Number"
                  name="watsNumber"
                  onChange={handleChange}
                  type="number"
                  value={props.values.watsNumber}
                  variant="outlined"
                />
                :
                <TextField
                  fullWidth
                  error
                  label="WhatsApp Number"
                  name="watsNumber"
                  onChange={handleChange}
                  type="number"
                  value={props.values.watsNumber}
                  helperText="Please enter a valid whatsapp number."
                />
              :  
                <TextField
                  fullWidth
                  error
                  label="Please enter a your whatsapp number."
                  name="watsNumber"
                  onChange={handleChange}
                  type="number"
                  value={props.values.watsNumber}
                  variant="outlined"
                />
              }


              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="University"
                name="university"
                onChange={handleChange}
                // required
                value={props.values.university}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              {/* <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={props.values.country}
                variant="outlined"
              /> */}
              <CountryDropdown
                onChange={(val) => changeCountryHandler(val)}
                value={props.values.country}
                style={{
                  border: "1px solid #c6c6c6",
                  borderRadius: "4px",
                  height: "48px",
                  paddingLeft: "15px",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                name="city"
                onChange={handleCityChange}
                // required
                select
                SelectProps={{ native: true }}
                value={props.values.city}
                variant="outlined"
              >
                {regionValue?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Semester"
                name="semester"
                onChange={handleChange}
                // required
                value={props.values.semester}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Branch"
                name="branch"
                onChange={handleChange}
                // required
                value={props.values.branch}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
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
