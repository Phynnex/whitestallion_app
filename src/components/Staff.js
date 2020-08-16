import React from "react";
import person_1 from "../Images/person_1.jpg";
import person_2 from "../Images/person_2.jpg";
import person_3 from "../Images/person_3.jpg";

const Staff = () => {
  return (
    <>
      <section className="testify-container">
        <h1>Meet the Management Team</h1>
        <section className="testify">
          <section class="testimonial">
            <section class="card">
              <section class="layer"></section>
              <section class="content">
                <section class="image">
                  <img width="100px" src={person_3} alt="" />
                </section>
                <section class="details">
                  <h2>
                    Fyne Tonye Angala <br />
                    <span> Marketting Manager</span><br/>
                    <span>White Stallion Group</span>
                  </h2>
                </section>
              </section>
            </section>
          </section>

          <section class="testimonial">
            <section class="card">
              <section class="layer"></section>
              <section class="content">
                <section class="image">
                  <img width="100px" src={person_2} alt="" />
                </section>
                <section class="details">
                  <h2>
                    SoibiboTonye <br />
                    <span>Managing Director</span> <br/>
                    <span>White Stallion Group</span>
                  </h2>
                </section>
              </section>
            </section>
          </section>

          <section class="testimonial">
            <section class="card">
              <section class="layer"></section>
              <section class="content">
                <section class="image">
                  <img width="100px" src={person_1} alt="" />
                </section>
                <section class="details">
                  <h2>
                    Henry Tonye Angala
                    <br />
                    <span>Admin Manager</span><br/>
                    <span>White Stallion Group</span>
                  </h2>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Staff;





