import React, { useEffect } from "react";
import Footer from ".././Component/Footer2";
// import Footer2 from '../Footer/Footer2'
import "./About.css";
import g1 from "../../images/gcs1.png";
import g2 from "../../images/gcs2.png";
import c1 from "../../images/image 19.png";
import c2 from "../../images/image 20.png";
import c3 from "../../images/image 21.png";
import c4 from "../../images/image 22.png";
import v1 from "../../images/Group 1.png";
import f1 from "../../images/image 16.png";
import f2 from "../../images/image 18.png";

function About() {
  useEffect(() => {
    document.title = "About Us";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about-container">
        <div className="desc-row">
          <img src={g1} alt="coin stack" />
          <p className="desc-text" style={{ textAlign: "right" }}>
            KARATVALUE, based in Hyderabad, is India's top destination for gold jewellery with stunning designs solely focusing on purity caratage and value. Our founders at KARATVALUE have a strong experience in jewellery retail and mass appeal market products.  With a strong focus on workmanship, quality, and customer experience, we aspire to revolutionize the fine jewellery and lifestyle industry. KARATVALUE has amassed a large family of devoted customers in a short period. We have tens of thousands of one-of-a-kind designs for you to pick from. All of these designs are meticulously crafted with the highest care, allowing you to choose the clarity of the product to meet your specific requirements.
            Our strategic partners and logistics play an important role in spreading KARATVALUE's lustre and bringing us closer to you. Our every piece is a glittering dazzling, courtesy of our world-class service, pleasant personnel, and stunning jewellery along with a customer-friendly exchange policy. Each of our goods is a symbol of excellence, thanks to our cutting-edge design teams and meticulous attention to detail. We ensure that the brightness of our jewellery is well represented via the latest innovation and ethical standards.
          </p>
        </div>
        <div className="desc-row">
          <p className="desc-text">
            <span style={{ color: "#EE9776" }}>Our Mission</span><br />
            Our mission is to honour our clients and make them stand out by delivering quality jewellery that complements their style. We aspire to develop and make jewellery that meets or surpasses the quality, Value, and service expectations of our customers.
          </p>
          <img src={g2} alt="coin stack" />
        </div>
        <div className="desc-row">
          <img src={g1} alt="coin stack" />
          <p className="desc-text" style={{ textAlign: "right" }}>
            <span style={{ color: "#EE9776" }}>Our Vision</span><br />
            Our vision is to be the first place that comes to mind when you're looking for unique jewellery that pays homage to traditional workmanship and designs.
          </p>
        </div>
        <div className="desc-row">
          <p className="desc-text">
            <span style={{ color: "#EE9776" }}>Our Philosophy</span><br />
            The jewellery-making procedure that we use is not conventional. We oppose gold and diamond mining and extraction from the earth. As we all know, the mining industry is harming our world, thus we attempt to utilize as much recycled gold as possible while creating personalized jewellery and delivering it to our customers. We’re primarily dedicated to providing the highest, hall-marked items with a decent finish at a lower cost than retail. Our packaging is likewise environmentally friendly and biodegradable, posing no threat to the environment.
          </p>
          <img src={g2} alt="coin stack" />
        </div>
        <div className="small-container">
          {/* <p className="small-container-text">
            <span style={{ color: "#EE9776" }}>Our Philosophy</span><br />
            The jewellery-making procedure that we use is not conventional. We oppose gold and diamond mining and extraction from the earth. As we all know, the mining industry is harming our world, thus we attempt to utilize as much recycled gold as possible while creating personalized jewellery and delivering it to our customers. We’re primarily dedicated to providing the highest, hall-marked items with a decent finish at a lower cost than retail. Our packaging is likewise environmentally friendly and biodegradable, posing no threat to the environment.
          </p> */}
          <div className="card-container">
            <div className="small-card">
              <img src={c1} alt="gold" />
            </div>
            <div className="small-card">
              <img src={c2} alt="gold" />
            </div>
            <div className="small-card">
              <img src={c3} alt="gold" />
            </div>
            <div className="small-card">
              <img src={c4} alt="gold" />
            </div>
          </div>

          {/* <div className="vertical-lines">
            <div className="lines-container">
              <div className="vline"></div>
              <span className="vertical-text">LOREM</span>
            </div>
            <div className="lines-container">
              <div className="vline" style={{ width: "1.5px" }}></div>
              <span className="vertical-text">LOREM</span>
            </div>
          </div> */}

          {/* <span className="small-container-text" style={{ marginTop: "70px" }}>
            Feugiat sed quam
          </span>
          <span
            className="small-container-text"
            style={{ color: "black", fontWeight: "400", fontSize: "16px" }}
          >
            Congue aliquam dui, gravida accumsan vel. Viverra morbi phasellus
            sed est eget id. Vitae hendrerit suscipit fermsuere. Dui gravida vel
            mauris egestas. Sed sed nunc id ongue aliquam dui, morbi phasellus
            sed est eget id. Vitae hendrerit suscipit.
          </span> */}
          {/* <img src={v1} style={{ width: "98vw", marginTop: "120px" }} /> */}
          {/* <div className="founders">
            <span className="founder-heading">meet our founders</span>
            <div className="founder">
              <img src={f1} />
              <p className="founder-text">
                Way back when a work trip took me to Mangalore Port, which put a
                spell on me; the fish there tasted so good and fresh, and so I
                began to ship them to Bengaluru for my home and, later, to my
                friends here in Bengaluru. Regularly for a long while friends
                would approach me asking for seafood from different states and
                every week friends of friends would get involved until the
                capacity of our living room wasn't up to the demand. I began to
                look for a solution and it was from this the idea of my own
                e-shop D2C first came up.
              </p>
            </div>
            <div className="founder">
              <p className="founder-text">
                Way back when a work trip took me to Mangalore Port, which put a
                spell on me; the fish there tasted so good and fresh, and so I
                began to ship them to Bengaluru for my home and, later, to my
                friends here in Bengaluru. Regularly for a long while friends
                would approach me asking for seafood from different states and
                every week friends of friends would get involved until the
                capacity of our living room wasn't up to the demand. I began to
                look for a solution and it was from this the idea of my own
                e-shop D2C first came up.
              </p>
              <img src={f2} />
            </div>
          </div> */}
        </div>

        <svg
          width="1440"
          height="187"
          viewBox="0 0 1440 187"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 186.998L1440 186.998L1440 186.754L-0.000105723 0.000148768L0 186.998Z"
            fill="white"
          />
        </svg>
      </div>
      <Footer />
    </>
  );
}

export default About;
