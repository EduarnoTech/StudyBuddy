import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';

class SolutionWidget extends Component {
  render() {
    let FooterData = this.props.FooterData;
    var { ftitle, onClickService } = this.props;
    return (
      <Reveal effect='fadeInUp' duration={1400}>
        <div className='col-lg-3 col-md-6'>
          <div
            className='f_widget about-widget pl_70 wow fadeInLeft'
            data-wow-delay='0.4s'
          >
            <h3 className='f-title f_600 t_color f_size_18 mb_40'>SERVICES</h3>
            <ul className='list-unstyled f_list'>
              {FooterData.Solution.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={onClickService}
                    style={{ cursor: 'pointer' }}
                  >
                    <Link
                      to='./'
                      title='Pages'
                      role='button'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default SolutionWidget;
