import React from "react";

const CoreFeatures = () => {
  return (
    <section className="chat_core_features_area sec_pad">
      <div className="container">
        <div className="hosting_title chat_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
          Here for every moment
            {/* <br /> That makes us <span>top notch</span> */}
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp">
              <div className="round">
                <div className="round_circle"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/20670-ai.png")}
                  alt=""
                />
                {/* <img src={require("../../img/home-chat/chat.png")} alt="" /> */}
              </div>
              <a href=".#">
                <h4>Online Tutoring</h4>
              </a>
              <p>
              Our genius online tutors will help you in breaking down concepts and help you with your homework instantly. Get a study boost now !
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.2s">
              <div className="round">
                <div className="round_circle two"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/triangle.png")}
                  alt=""
                />
                <img src={require('../../img/home-chat/mobile.png')} alt="" />
              </div>
              <a href=".#">
                <h4>Homework Help</h4>
              </a>
              <p>
              Stuck with homework? PhD experts have a distinctive mode of expression assisting students to solve assignments flawlessly.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.4s">
              <div className="round">
                <div className="round_circle three"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/box.png")}
                  alt=""
                />
                <img src={require('../../img/home-chat/book.png')} alt="" />
              </div>
              <a href=".#">
                <h4>Live session</h4>
              </a>
              <p>
              We provide the best tutors for you to interact with in real time to get instant solutions for your problems. Pickup your phone now !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreFeatures;
