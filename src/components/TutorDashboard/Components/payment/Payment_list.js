import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";

const Payments = (props) => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const tutId=JSON.parse(localStorage.getItem('tutor')).saveTutor.tutor_id;
  const paymentDetails = async () => {
    let paymentAr = [];
    const Payments = await axios.post(
      "https://device2api.el.r.appspot.com/api/sessionsWeb/payment_details",
      { tutorId: props.tutorId?props.tutorId:tutId }
    );
    if (Payments.data.length !== 0) {
      console.log({ Paymentsss: Payments.data.result });
      let Paymentx = Payments.data.result;
      setPaymentInfo(Paymentx);
    } else {
      console.log("Didn't get Payment response");
    }
  };
  useEffect(() => {
    paymentDetails();
    console.log({ tutrId: props.tutorId });
  }, []);

  return (
    <Fragment>
      <div style={{ height: "100%", overflowY: "scroll" ,marginTop:"50px" }}>
        {/* <h3 style={{marginLeft:"20%",fontColor:"black"}}>  Amount Earned-</h3> */}

        {/* <h1>hare krsna</h1> */}
        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center">
              {/* <div class="col-md-6 text-center mb-5">
              <h2 class="heading-section">Table #09</h2>
            </div> */}
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="table-wrap">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Transaction Id</th>
                        <th>Session Id</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentInfo.map((el1) => (
                        <tr>
                          <th scope="row">{el1.id}</th>
                          <td>{el1.session_id}</td>
                          <td>{el1.created_at}</td>
                          <td>{el1.description}</td>
                          <td>{el1.amount}</td>
                          <td>
                            {el1.status === "processed" && (
                              <a href="#" class="btn btn-success">
                                {el1.status}
                              </a>
                            )}
                            {el1.status === "processing" && (
                              <a href="#" class="btn btn-warning">
                                {el1.status}
                              </a>
                            )}
                            {el1.status !== "processed" &&
                              el1.status !== "processing" && (
                                <a href="#" class="btn btn-danger">
                                  {el1.status}
                                </a>
                              )}
                          </td>
                        </tr>
                      ))}

                      {/* <tr>
                      <th scope="row">1001</th>
                      <td>Mark Otto</td>
                      <td>Japan</td>
                      <td>$3000</td>
                      <td>$1200</td>
                      <td>
                        <a href="#" class="btn btn-warning">
                          Open
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">1001</th>
                      <td>Mark Otto</td>
                      <td>Japan</td>
                      <td>$3000</td>
                      <td>$1200</td>
                      <td>
                        <a href="#" class="btn btn-danger">
                          On hold
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">1001</th>
                      <td>Mark Otto</td>
                      <td>Japan</td>
                      <td>$3000</td>
                      <td>$1200</td>
                      <td>
                        <a href="#" class="btn btn-success">
                          Progress
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">1001</th>
                      <td>Mark Otto</td>
                      <td>Japan</td>
                      <td>$3000</td>
                      <td>$1200</td>
                      <td>
                        <a href="#" class="btn btn-danger">
                          On hold
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">1001</th>
                      <td>Mark Otto</td>
                      <td>Japan</td>
                      <td>$3000</td>
                      <td>$1200</td>
                      <td>
                        <a href="#" class="btn btn-warning">
                          Open
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">1001</th>
                      <td>Mark Otto</td>
                      <td>Japan</td>
                      <td>$3000</td>
                      <td>$1200</td>
                      <td>
                        <a href="#" class="btn btn-warning">
                          Open
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">1001</th>
                      <td>Mark Otto</td>
                      <td>Japan</td>
                      <td>$3000</td>
                      <td>$1200</td>
                      <td>
                        <a href="#" class="btn btn-success">
                          Progress
                        </a>
                      </td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Payments;
