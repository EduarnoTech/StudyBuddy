import React, { useState ,useEffect} from "react";
import Navi from "./Navi";
import Header from "./Header";
import "./Profile.css";
import axios from "axios";
import Button from '@mui/material/Button';

const Profile = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredUniversity, setEnteredUniversity] = useState("");
  const [enteredDob, setEnteredDob] = useState("");
  const [enteredWats, setEnteredWats] = useState("");
  const [enteredTimezone, setEnteredTimezone] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredNewPassword, setEnteredNewPassword] = useState("");
  const [firstPhone, setfirstPhone] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [itsClicked, setItsClicked] = useState("profile");
  // const [isCheck, setIsCheck] = useState();

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  
  const universityHandler = (event) => {
    // event.preventDefault()
    setEnteredUniversity(event.target.value);
  };
  const dobHandler = (event) => {
    setEnteredDob(event.target.value);
  };
  const watsHandler = (event) => {
    setEnteredWats(event.target.value);
  };
  const timezoneHandler = (event) => {
    setEnteredTimezone(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const newPasswordHandler = (event) => {
    setEnteredNewPassword(event.target.value);
  };
  const confirmPasswordHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };
  const submitHandler1 = async (e) => {
    e.preventDefault()

    let postData = {
      name: enteredName,
      university: enteredUniversity,
      dateOfBirth: enteredDob,
      watsNumber: enteredWats,
      timezone: enteredTimezone,
      email: localStorage.getItem("email"),
      id:localStorage.getItem("token")
    };

    await axios
      .post("https://device2api.el.r.appspot.com/client/profile", postData)
      .then((res) => {
        console.log(res);
        if (res) {
          alert("profile updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler2 = async (e) => {
    e.preventDefault()
     let password= enteredPassword;
     let email= localStorage.getItem("email");
    
    let newPassword = enteredNewPassword;
    let confirmPassword = enteredConfirmPassword;

    const check1=await axios
      .post("https://device2api.el.r.appspot.com/client/checkPassword", {
        password: password,
        email:email
      })
      
        console.log('check1:',check1);
        try{
        if (check1.data.success) {
          if (newPassword === confirmPassword) {
            
              const check2= await axios.post("https://device2api.el.r.appspot.com/client/profile1", {
                password: newPassword,
                email:email
              })
              console.log('check2:',check2)
              if (check2.data.password===password) {
                alert("profile updated");
              }
             else{
               console.log("response is not there")
             }
          }
          else{
            alert('conform password and new password feild is not matching')
            console.log('conform password and new password feild is not matching')
          }
        }
        else {
          alert("incorrect password")
          console.log("incorrect password")
        }
      }
      catch(err) {
        console.log(err);
      }
      setEnteredPassword("");
      setEnteredNewPassword("");
      setEnteredConfirmPassword("");

  };



  const getPhone=async()=>{
   
    const email=localStorage.getItem('email')
    try{
    const result=await axios
    .post("https://device2api.el.r.appspot.com/client/getPhone", {email:email})
    let result1=result.data.phone
    setfirstPhone(result1)
    setEnteredName(result.data.username)
    setEnteredUniversity(result.data.university)
    setEnteredDob(result.data.dateOfBirth)
    setEnteredWats(result.data.watsNumber)

    }
    catch(err){console.log("getphone is not working11")}
  }

  useEffect(()=>{
    console.log("useeffect is working in profile")
    getPhone()
  },[])

  return (
    <div>
      <Navi itsClicked={itsClicked}/>
      <Header enteredName={enteredName}/>
      <div class="mt-0 card-container-2 justify-content-between pt-3">
        <template class="row">
          <div class="col-lg-4 mb-3 mb-lg-0">
            <div class="dashboard-card">
              <div class="pb-2">
                <img
                  src="/static/student/img/dp.jpg"
                  class="card-image"
                  alt=""
                />
              </div>
              <div class="card-title h5">{enteredName}</div>
              <div class="card-info pt-1">
                <div class="card-title font-weight-normal">
                  {" "}
                  Personal Information{" "}
                </div>
                <div class="card-subtitle text-smoke">
                  {" "}
                  To modify click in respective boxes{" "}
                </div>
                <form
                  type="form"
                  action=""
                  enctype="multipart/form-data"
                  id="client-details"
                  onSubmit={submitHandler1}
                >
                  <div class="pt-3 pb-3">
                    <div class="card-subtitle text-smoke"> Name </div>
                    <input
                      class="card-input"
                      type="text"
                      name="name"
                      minlength="3"
                      placeholder=""
                      onChange={nameHandler}
                      value={enteredName}
                    />
                  </div>
                  <div class="pb-3">
                    <div class="card-subtitle text-smoke">
                      {" "}
                      University / College{" "}
                    </div>
                    <input
                      class="card-input info-placeholder"
                      type="text"
                      name="university"
                      placeholder=""
                      onChange={universityHandler}
                      value={enteredUniversity}
                    />
                  </div>
                  <div class="pb-3">
                    <div class="card-subtitle text-smoke"> Date of Birth </div>
                    <input
                      class="card-input info-placeholder"
                      type="date"
                      id="dob-datetimepicker10"
                      name="dob"
                      autocomplete="off"
                      placeholder=""
                      // readonly=""
                      onChange={dobHandler}
                      value={enteredDob}
                    />
                  </div>
                  <div class="pb-3">
                    <div class="card-subtitle text-smoke">
                      {" "}
                      Whatsapp Number(With country code, as +1-6072471513){" "}
                    </div>
                    <input
                      class="card-input"
                      type="text"
                      name="whatsapp"
                      onChange={watsHandler}
                      value={enteredWats}
                    />
                  </div>
                  <div class="pb-3">
                    <div class="card-subtitle text-smoke"> Timezone </div>
                    <select
                      id="selecttz"
                      class="card-input"
                      name="usertimezone"
                      onChange={timezoneHandler}
                    >
                      <option>Asia/Kolkata</option>
                      <option>Europe/Andorra</option>
                      <option>Asia/Dubai</option>
                      <option>Asia/Kabul</option>
                      <option>Europe/Tirane</option>
                      <option>Asia/Yerevan</option>
                      <option>Antarctica/Casey</option>
                      <option>Antarctica/Davis</option>
                      <option>Antarctica/DumontDUrville</option>
                      <option>Antarctica/Mawson</option>
                      <option>Antarctica/Palmer</option>
                      <option>Antarctica/Rothera</option>
                      <option>Antarctica/Syowa</option>
                      <option>Antarctica/Troll</option>
                      <option>Antarctica/Vostok</option>
                      <option>America/Argentina/Buenos_Aires</option>
                      <option>America/Argentina/Cordoba</option>
                      <option>America/Argentina/Salta</option>
                      <option>America/Argentina/Jujuy</option>
                      <option>America/Argentina/Tucuman</option>
                      <option>America/Argentina/Catamarca</option>
                      <option>America/Argentina/La_Rioja</option>
                      <option>America/Argentina/San_Juan</option>
                      <option>America/Argentina/Mendoza</option>
                      <option>America/Argentina/San_Luis</option>
                      <option>America/Argentina/Rio_Gallegos</option>
                      <option>America/Argentina/Ushuaia</option>
                      <option>Pacific/Pago_Pago</option>
                      <option>Europe/Vienna</option>
                      <option>Australia/Lord_Howe</option>
                      <option>Antarctica/Macquarie</option>
                      <option>Australia/Hobart</option>
                      <option>Australia/Currie</option>
                      <option>Australia/Melbourne</option>
                      <option>Australia/Sydney</option>
                      <option>Australia/Broken_Hill</option>
                      <option>Australia/Brisbane</option>
                      <option>Australia/Lindeman</option>
                      <option>Australia/Adelaide</option>
                      <option>Australia/Darwin</option>
                      <option>Australia/Perth</option>
                      <option>Australia/Eucla</option>
                      <option>Asia/Baku</option>
                      <option>America/Barbados</option>
                      <option>Asia/Dhaka</option>
                      <option>Europe/Brussels</option>
                      <option>Europe/Sofia</option>
                      <option>Atlantic/Bermuda</option>
                      <option>Asia/Brunei</option>
                      <option>America/La_Paz</option>
                      <option>America/Noronha</option>
                      <option>America/Belem</option>
                      <option>America/Fortaleza</option>
                      <option>America/Recife</option>
                      <option>America/Araguaina</option>
                      <option>America/Maceio</option>
                      <option>America/Bahia</option>
                      <option>America/Sao_Paulo</option>
                      <option>America/Campo_Grande</option>
                      <option>America/Cuiaba</option>
                      <option>America/Santarem</option>
                      <option>America/Porto_Velho</option>
                      <option>America/Boa_Vista</option>
                      <option>America/Manaus</option>
                      <option>America/Eirunepe</option>
                      <option>America/Rio_Branco</option>
                      <option>America/Nassau</option>
                      <option>Asia/Thimphu</option>
                      <option>Europe/Minsk</option>
                      <option>America/Belize</option>
                      <option>America/St_Johns</option>
                      <option>America/Halifax</option>
                      <option>America/Glace_Bay</option>
                      <option>America/Moncton</option>
                      <option>America/Goose_Bay</option>
                      <option>America/Blanc-Sablon</option>
                      <option>America/Toronto</option>
                      <option>America/Nipigon</option>
                      <option>America/Thunder_Bay</option>
                      <option>America/Iqaluit</option>
                      <option>America/Pangnirtung</option>
                      <option>America/Atikokan</option>
                      <option>America/Winnipeg</option>
                      <option>America/Rainy_River</option>
                      <option>America/Resolute</option>
                      <option>America/Rankin_Inlet</option>
                      <option>America/Regina</option>
                      <option>America/Swift_Current</option>
                      <option>America/Edmonton</option>
                      <option>America/Cambridge_Bay</option>
                      <option>America/Yellowknife</option>
                      <option>America/Inuvik</option>
                      <option>America/Creston</option>
                      <option>America/Dawson_Creek</option>
                      <option>America/Fort_Nelson</option>
                      <option>America/Vancouver</option>
                      <option>America/Whitehorse</option>
                      <option>America/Dawson</option>
                      <option>Indian/Cocos</option>
                      <option>Europe/Zurich</option>
                      <option>Africa/Abidjan</option>
                      <option>Pacific/Rarotonga</option>
                      <option>America/Santiago</option>
                      <option>America/Punta_Arenas</option>
                      <option>Pacific/Easter</option>
                      <option>Asia/Shanghai</option>
                      <option>Asia/Urumqi</option>
                      <option>America/Bogota</option>
                      <option>America/Costa_Rica</option>
                      <option>America/Havana</option>
                      <option>Atlantic/Cape_Verde</option>
                      <option>America/Curacao</option>
                      <option>Indian/Christmas</option>
                      <option>Asia/Nicosia</option>
                      <option>Asia/Famagusta</option>
                      <option>Europe/Prague</option>
                      <option>Europe/Berlin</option>
                      <option>Europe/Copenhagen</option>
                      <option>America/Santo_Domingo</option>
                      <option>Africa/Algiers</option>
                      <option>America/Guayaquil</option>
                      <option>Pacific/Galapagos</option>
                      <option>Europe/Tallinn</option>
                      <option>Africa/Cairo</option>
                      <option>Africa/El_Aaiun</option>
                      <option>Europe/Madrid</option>
                      <option>Africa/Ceuta</option>
                      <option>Atlantic/Canary</option>
                      <option>Europe/Helsinki</option>
                      <option>Pacific/Fiji</option>
                      <option>Atlantic/Stanley</option>
                      <option>Pacific/Chuuk</option>
                      <option>Pacific/Pohnpei</option>
                      <option>Pacific/Kosrae</option>
                      <option>Atlantic/Faroe</option>
                      <option>Europe/Paris</option>
                      <option>Europe/London</option>
                      <option>Asia/Tbilisi</option>
                      <option>America/Cayenne</option>
                      <option>Africa/Accra</option>
                      <option>Europe/Gibraltar</option>
                      <option>America/Godthab</option>
                      <option>America/Danmarkshavn</option>
                      <option>America/Scoresbysund</option>
                      <option>America/Thule</option>
                      <option>Europe/Athens</option>
                      <option>Atlantic/South_Georgia</option>
                      <option>America/Guatemala</option>
                      <option>Pacific/Guam</option>
                      <option>Africa/Bissau</option>
                      <option>America/Guyana</option>
                      <option>Asia/Hong_Kong</option>
                      <option>America/Tegucigalpa</option>
                      <option>America/Port-au-Prince</option>
                      <option>Europe/Budapest</option>
                      <option>Asia/Jakarta</option>
                      <option>Asia/Pontianak</option>
                      <option>Asia/Makassar</option>
                      <option>Asia/Jayapura</option>
                      <option>Europe/Dublin</option>
                      <option>Asia/Jerusalem</option>
                      <option>Asia/Kolkata</option>
                      <option>Indian/Chagos</option>
                      <option>Asia/Baghdad</option>
                      <option>Asia/Tehran</option>
                      <option>Atlantic/Reykjavik</option>
                      <option>Europe/Rome</option>
                      <option>America/Jamaica</option>
                      <option>Asia/Amman</option>
                      <option>Asia/Tokyo</option>
                      <option>Africa/Nairobi</option>
                      <option>Asia/Bishkek</option>
                      <option>Pacific/Tarawa</option>
                      <option>Pacific/Enderbury</option>
                      <option>Pacific/Kiritimati</option>
                      <option>Asia/Pyongyang</option>
                      <option>Asia/Seoul</option>
                      <option>Asia/Almaty</option>
                      <option>Asia/Qyzylorda</option>
                      <option>Asia/Qostanay</option>
                      <option>Asia/Aqtobe</option>
                      <option>Asia/Aqtau</option>
                      <option>Asia/Atyrau</option>
                      <option>Asia/Oral</option>
                      <option>Asia/Beirut</option>
                      <option>Asia/Colombo</option>
                      <option>Africa/Monrovia</option>
                      <option>Europe/Vilnius</option>
                      <option>Europe/Luxembourg</option>
                      <option>Europe/Riga</option>
                      <option>Africa/Tripoli</option>
                      <option>Africa/Casablanca</option>
                      <option>Europe/Monaco</option>
                      <option>Europe/Chisinau</option>
                      <option>Pacific/Majuro</option>
                      <option>Pacific/Kwajalein</option>
                      <option>Asia/Yangon</option>
                      <option>Asia/Ulaanbaatar</option>
                      <option>Asia/Hovd</option>
                      <option>Asia/Choibalsan</option>
                      <option>Asia/Macau</option>
                      <option>America/Martinique</option>
                      <option>Europe/Malta</option>
                      <option>Indian/Mauritius</option>
                      <option>Indian/Maldives</option>
                      <option>America/Mexico_City</option>
                      <option>America/Cancun</option>
                      <option>America/Merida</option>
                      <option>America/Monterrey</option>
                      <option>America/Matamoros</option>
                      <option>America/Mazatlan</option>
                      <option>America/Chihuahua</option>
                      <option>America/Ojinaga</option>
                      <option>America/Hermosillo</option>
                      <option>America/Tijuana</option>
                      <option>America/Bahia_Banderas</option>
                      <option>Asia/Kuala_Lumpur</option>
                      <option>Asia/Kuching</option>
                      <option>Africa/Maputo</option>
                      <option>Africa/Windhoek</option>
                      <option>Pacific/Noumea</option>
                      <option>Pacific/Norfolk</option>
                      <option>Africa/Lagos</option>
                      <option>America/Managua</option>
                      <option>Europe/Amsterdam</option>
                      <option>Europe/Oslo</option>
                      <option>Asia/Kathmandu</option>
                      <option>Pacific/Nauru</option>
                      <option>Pacific/Niue</option>
                      <option>Pacific/Auckland</option>
                      <option>Pacific/Chatham</option>
                      <option>America/Panama</option>
                      <option>America/Lima</option>
                      <option>Pacific/Tahiti</option>
                      <option>Pacific/Marquesas</option>
                      <option>Pacific/Gambier</option>
                      <option>Pacific/Port_Moresby</option>
                      <option>Pacific/Bougainville</option>
                      <option>Asia/Manila</option>
                      <option>Asia/Karachi</option>
                      <option>Europe/Warsaw</option>
                      <option>America/Miquelon</option>
                      <option>Pacific/Pitcairn</option>
                      <option>America/Puerto_Rico</option>
                      <option>Asia/Gaza</option>
                      <option>Asia/Hebron</option>
                      <option>Europe/Lisbon</option>
                      <option>Atlantic/Madeira</option>
                      <option>Atlantic/Azores</option>
                      <option>Pacific/Palau</option>
                      <option>America/Asuncion</option>
                      <option>Asia/Qatar</option>
                      <option>Indian/Reunion</option>
                      <option>Europe/Bucharest</option>
                      <option>Europe/Belgrade</option>
                      <option>Europe/Kaliningrad</option>
                      <option>Europe/Moscow</option>
                      <option>Europe/Simferopol</option>
                      <option>Europe/Kirov</option>
                      <option>Europe/Astrakhan</option>
                      <option>Europe/Volgograd</option>
                      <option>Europe/Saratov</option>
                      <option>Europe/Ulyanovsk</option>
                      <option>Europe/Samara</option>
                      <option>Asia/Yekaterinburg</option>
                      <option>Asia/Omsk</option>
                      <option>Asia/Novosibirsk</option>
                      <option>Asia/Barnaul</option>
                      <option>Asia/Tomsk</option>
                      <option>Asia/Novokuznetsk</option>
                      <option>Asia/Krasnoyarsk</option>
                      <option>Asia/Irkutsk</option>
                      <option>Asia/Chita</option>
                      <option>Asia/Yakutsk</option>
                      <option>Asia/Khandyga</option>
                      <option>Asia/Vladivostok</option>
                      <option>Asia/Ust-Nera</option>
                      <option>Asia/Magadan</option>
                      <option>Asia/Sakhalin</option>
                      <option>Asia/Srednekolymsk</option>
                      <option>Asia/Kamchatka</option>
                      <option>Asia/Anadyr</option>
                      <option>Asia/Riyadh</option>
                      <option>Pacific/Guadalcanal</option>
                      <option>Indian/Mahe</option>
                      <option>Africa/Khartoum</option>
                      <option>Europe/Stockholm</option>
                      <option>Asia/Singapore</option>
                      <option>America/Paramaribo</option>
                      <option>Africa/Juba</option>
                      <option>Africa/Sao_Tome</option>
                      <option>America/El_Salvador</option>
                      <option>Asia/Damascus</option>
                      <option>America/Grand_Turk</option>
                      <option>Africa/Ndjamena</option>
                      <option>Indian/Kerguelen</option>
                      <option>Asia/Bangkok</option>
                      <option>Asia/Dushanbe</option>
                      <option>Pacific/Fakaofo</option>
                      <option>Asia/Dili</option>
                      <option>Asia/Ashgabat</option>
                      <option>Africa/Tunis</option>
                      <option>Pacific/Tongatapu</option>
                      <option>Europe/Istanbul</option>
                      <option>America/Port_of_Spain</option>
                      <option>Pacific/Funafuti</option>
                      <option>Asia/Taipei</option>
                      <option>Europe/Kiev</option>
                      <option>Europe/Uzhgorod</option>
                      <option>Europe/Zaporozhye</option>
                      <option>Pacific/Wake</option>
                      <option>America/New_York</option>
                      <option>America/Detroit</option>
                      <option>America/Kentucky/Louisville</option>
                      <option>America/Kentucky/Monticello</option>
                      <option>America/Indiana/Indianapolis</option>
                      <option>America/Indiana/Vincennes</option>
                      <option>America/Indiana/Winamac</option>
                      <option>America/Indiana/Marengo</option>
                      <option>America/Indiana/Petersburg</option>
                      <option>America/Indiana/Vevay</option>
                      <option>America/Chicago</option>
                      <option>America/Indiana/Tell_City</option>
                      <option>America/Indiana/Knox</option>
                      <option>America/Menominee</option>
                      <option>America/North_Dakota/Center</option>
                      <option>America/North_Dakota/New_Salem</option>
                      <option>America/North_Dakota/Beulah</option>
                      <option>America/Denver</option>
                      <option>America/Boise</option>
                      <option>America/Phoenix</option>
                      <option>America/Los_Angeles</option>
                      <option>America/Anchorage</option>
                      <option>America/Juneau</option>
                      <option>America/Sitka</option>
                      <option>America/Metlakatla</option>
                      <option>America/Yakutat</option>
                      <option>America/Nome</option>
                      <option>America/Adak</option>
                      <option>Pacific/Honolulu</option>
                      <option>America/Montevideo</option>
                      <option>Asia/Samarkand</option>
                      <option>Asia/Tashkent</option>
                      <option>America/Caracas</option>
                      <option>Asia/Ho_Chi_Minh</option>
                      <option>Pacific/Efate</option>
                      <option>Pacific/Wallis</option>
                      <option>Pacific/Apia</option>
                      <option>Africa/Johannesburg</option>
                    </select>
                  </div>
                  <div class="pb-3 d-flex">
                    <input
                      type="checkbox"
                      class="my-auto"
                      name="get_email_notifications"
                    />
                    <div class="card-subtitle text-smoke my-auto ml-1">
                      {" "}
                      Get email notifications{" "}
                    </div>
                  </div>
                  <div>
                    <Button type="submit" style={{borderRadius: '7px',color:"white", backgroundColor: 'rgb(105 57 243 / 88%)'}} size="large" variant="contained" class="w-100 card-btn">Update</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-3 mb-lg-0">
            <div class="dashboard-card">
              <div class="card-icon">
                <img
                  src="/static/student/img/Group 447.svg"
                  alt=""
                  class="w-100"
                />
              </div>
              <div class="card-info pb-3">
                <div class="card-title font-weight-normal">
                  {" "}
                  Contact Information{" "}
                </div>
                <div class="card-subtitle text-smoke">
                  {" "}
                  To modify this information, please contact us at{" "}
                </div>
              </div>
              <form action="#">
                <div class="pt-2 pb-3">
                  <div class="card-subtitle text-smoke"> Email ID </div>
                  <input class="card-input" type="text" disabled="" value={localStorage.getItem('email')}/>
                </div>
                <div>
                  <div class="card-subtitle text-smoke"> Phone Number </div>
                  <input class="card-input" type="text" disabled="" value={firstPhone}/>
                </div>
                {/* <div style={{marginTop:'20px'}}>
                  <input
                    type="submit"
                    class="w-100 btn-success card-btn"
                    value="Update"
                  />
                </div> */}
              </form>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="dashboard-card">
              <div class="card-icon">
                <img
                  src="/static/student/img/Group 4457.svg"
                  alt=""
                  class="w-100"
                />
              </div>
              <div class="card-info pb-3">
                <div class="card-title font-weight-normal"> Password </div>
                <div class="card-subtitle text-smoke">
                  {" "}
                  You may set a strong password to secure account{" "}
                </div>
              </div>
              <form
                role="form"
                id=""
                onSubmit={submitHandler2}
              >
                <div class="pt-2 pb-3">
                  <div class="card-subtitle text-smoke"> Current Password </div>
                  <div class="position-relative">
                    <input
                      class="card-input"
                      name="currentpw"
                      type="password"
                      required=""
                      id="currentpw"
                      onChange={passwordHandler}
                      value={enteredPassword}
                    />
                    <img
                      src="/static/student/icon/eye.png"
                      alt=""
                      class="input-icon-eye"
                    />
                  </div>
                </div>
                <div class="pb-3">
                  <div class="card-subtitle text-smoke"> New Password </div>
                  <div class="position-relative">
                    <input
                      class="card-input"
                      id="newpwinp"
                      name="newpw"
                      type="password"
                      required=""
                      onChange={newPasswordHandler}
                      value={enteredNewPassword}
                    />
                    <img
                      src="/static/student/icon/eye.png"
                      alt=""
                      class="input-icon-eye"
                    />
                  </div>
                </div>
                <div class="pb-3">
                  <div class="card-subtitle text-smoke"> Confirm Password </div>
                  <div class="position-relative">
                    <input
                      class="card-input"
                      id="newpwcnf"
                      type="password"
                      required=""
                      onChange={confirmPasswordHandler}
                      value={enteredConfirmPassword}
                    />
                    <img
                      src="/static/student/icon/eye.png"
                      alt=""
                      class="input-icon-eye"
                    />
                  </div>
                </div>
                <div>
                  {/* <input
                    type="submit"
                    class="w-100 btn-success card-btn"
                    value="Update"
                  /> */}
                   <Button style={{borderRadius: '7px',color:"white", backgroundColor: 'rgb(105 57 243 / 88%)'}} size="large" variant="contained" class="w-100 card-btn">Update</Button>
                </div>
              </form>
            </div>
          </div>
        </template>
      </div>
    </div>
  );
};

export default Profile;
