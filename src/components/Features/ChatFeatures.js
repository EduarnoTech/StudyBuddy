import React, { Component } from "react";
import "../common.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

class ChatFeatures extends Component {
  render() {
    let {
      img1,
      img2,
      img3,
      rowClass,
      col1,
      col2,
      url,
      titleSmall,
      titlebig,
      p,
      icon,
      pClass,
      imgClass,
      class3,
      adv
    } = this.props;
    return (
      <section className="chat_features_area">
        <div className="container">
          <div className={`row align-items-center ${rowClass}`}>
            <div className={col1}>
              <div className={`chat_features_img chat_features_img_one ${class3}`}>
                <img
                  className={`p_absoulte dot_bg ${imgClass}`}
                  // style={{width: '659px', borderRadius: '25px'}}
                  src={require("../../img/home-chat/" + img1)}
                  alt=""
                />
                {/* <img
                  className="chat_one"
                  data-parallax='{"x": 0, "y": 80}'
                  src={require("../../img/home-chat/" + img2)}
                  alt=""
                />
                <img
                  className="p_absoulte chat_two"
                  data-parallax='{"x": 0, "y": -80}'
                  src={require("../../img/home-chat/" + img3)}
                  alt=""
                /> */}
              </div>
            </div>
            <div className={col2}>
              <div className={`chat_features_content ${pClass}`}>
                <img src={require("../../img/home-chat/" + icon)} alt="" />
                <h2>
                  <span>{titleSmall}</span> {titlebig}
                </h2>
                <p>{p}</p>
                {/* {adv &&
                <div style={{display: 'flex'}}>
                <div style={{fontSize: '65px', fontWeight: '600', color: '#22ad8d', lineHeight: '1.2', width: 'fit-content'}}>
                  <div style={{textAlign: 'center'}}>Everything</div>
                  <div style={{textAlign: 'center'}}>on</div>
                  <div>WhatsApp </div>
                </div>
                <div style={{alignSelf: 'center'}}>
                <span style={{color: '#22ad8d'}}><WhatsAppIcon fontSize="large" style={{fontSize: '200px'}} /></span>
                  </div>
                </div>
                } */}
                {/* <a href={url}>Learn more</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChatFeatures;
