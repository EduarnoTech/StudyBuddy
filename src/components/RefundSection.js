import React from 'react';

const RefundSection = () => {
  return (
    <section className='faq_area bg_color sec_pad'>
      <div className='container'>
        <div
          className='row'
          style={{ justifyContent: 'center', placeContent: 'center' }}
        >
          <div className='col-lg-8'>
            <div className='tab-content faq_content' id='myTabContent'>
              <div
                className='tab-pane fade show active'
                id='purchas'
                role='tabpanel'
                aria-labelledby='purchas-tab'
              >
                <h3 className='f_p f_size_22 f_500 t_color3 mb_20'>
                  Refund policy
                </h3>
                <div id='accordion'>
                  <div className='card' style={{ border: 'none' }}>
                    <div
                      id='collapseOne'
                      className='collapse show'
                      aria-labelledby='headingOne'
                      data-parent='#accordion'
                    >
                      <div
                        className='card-body'
                        style={{ padding: '0px 0px 15px' }}
                      >
                        If after making payment you change your mind and want a
                        refund of your payment, the amount to be refunded will
                        depend on how much work is done. The refund amount will
                        be the amount excluding the payment for work done till
                        that time.
                      </div>
                    </div>
                  </div>
                  <div className='card' style={{ border: 'none' }}>
                    <div
                      id='collapseOne'
                      className='collapse show'
                      aria-labelledby='headingOne'
                      data-parent='#accordion'
                    >
                      <div
                        className='card-body'
                        style={{ padding: '0px 0px 15px' }}
                      >
                        If you feel unsatisfactory of our services, you can
                        request for a refund, after your request our experts
                        will check the quality of work and depending on that the
                        refund amount will be decided.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RefundSection;
