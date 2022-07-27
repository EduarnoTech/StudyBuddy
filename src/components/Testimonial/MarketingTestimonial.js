import React, { Component } from 'react';
import Slider from 'react-slick';

class MarketingTestimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let BannerData = this.props.BannerData;
    var { bgColor, reviewRef } = this.props;
    return (
      <section className={`agency_testimonial_area sec_pad ${bgColor}`}>
        <div
          className='container'
          style={{ textAlign: '-webkit-center' }}
          ref={reviewRef}
        >
          <h2 className='f_size_30 f_600 t_color3 l_height40 text-center mb_60'>
            Students sharing their Experience
          </h2>
          <div className='agency_testimonial_info'>
            <Slider className='testimonial_slider' {...settings}>
              <div className='testimonial_item text-center left' key='review1'>
                <div className='author_img'>
                  <img src={require('../../img/home4/review1.jpeg')} alt='' />
                </div>
              </div>
              <div className='testimonial_item text-center left' key='review2'>
                <div className='author_img'>
                  <img src={require('../../img/home4/review2.jpeg')} alt='' />
                </div>
              </div>
              <div className='testimonial_item text-center left' key='review2'>
                <div className='author_img'>
                  <img src={require('../../img/home4/review3.jpeg')} alt='' />
                </div>
              </div>
              <div className='testimonial_item text-center left' key='review2'>
                <div className='author_img'>
                  <img src={require('../../img/home4/review4.jpeg')} alt='' />
                </div>
              </div>
              <div className='testimonial_item text-center left' key='review2'>
                <div className='author_img'>
                  <img src={require('../../img/home4/review5.jpeg')} alt='' />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
export default MarketingTestimonial;
