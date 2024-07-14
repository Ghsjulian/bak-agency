import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"

const SingleService = ({ data }) => {
  const [services, setServices] = useState(null);
  const [foundObject, setFoundObject] = useState(null);

  useEffect(() => {
    let url = "/services.json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    if (services) {
      const found = services.find((obj) => {
        if (obj.type === data.type) {
          setFoundObject(obj);
        }
      });
    }
  }, []);
  return (
    <div data-aos="zoom-in" id="page" className="section">
     
     <h2>Testing....</h2>

     {/*}
      <div className="service-header">
        <img src="/images/seo_service.png" />
        <h2> Our SEO Services and Strategy Management</h2>
        <div className="service-flex">
          <div className="flex">
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Websites Analysis And Audit</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Google Web Analytics</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Find Out Business Keywords</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Authorizes Social Media Accounts</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Research Keywords Competitors</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Follow Google Algorithm</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Manually On-Page Optimization</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Link Building Campaign</span>
            </li>
          </div>
          <div className="flex">
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Content Checking And Optimization</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Video Submission</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Google Webmaster Tool Setup</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Link Audit &amp; Penguin Recovery</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Bing Webmaster Tool Setup</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Local SEO Services</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Yandex Webmaster Tool Setup</span>
            </li>
            <li>
              <span>
                <i class="bx bx-check-circle"></i>
              </span>
              <span class="smm_content">Monitoring And Reporting</span>
            </li>
          </div>
        </div>
      </div>
      <div className="service-desc">
        <div className="service-col">
          <h4>Search Engine Optimization</h4>
          <p>
            Skyrocket Your Organic Traffic with Our SEO Expertise Get your
            website seen by the right audience. Our data-driven SEO services
            optimize your site for search engines, attracting qualified leads
            and boosting organic traffic. We'll help you dominate search results
            for relevant keywords, turning clicks into conversions.
          </p>
          <h4
            style={{
              textAlign: "center",
              fontSize: "1.7rem",
              marginTop: "4.5rem",
              margin: ".5rem auto",
            }}
          >
            Here's what sets our SEO services apart:
          </h4>
        </div>
        <div className="service-col">
          <img src="/images/seo.png" />
        </div>
      </div>
      <div className="next-service">
        <p
          style={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <b>Targeted Keyword Strategy:</b> We identify the perfect keywords to
          target, ensuring your website reaches the right audience.
          <br />
          <b> Technical SEO Optimization: </b> We ensure your website's
          foundation is search-engine friendly, improving crawlability and user
          experience.
          <br />
          <b>Content Marketing Powerhouse:</b> We craft high-quality,
          SEO-optimized content that engages visitors and drives conversions.{" "}
          <br />
          <b>Regular Reporting & Transparency: </b>Stay informed with clear
          reports that track your progress and SEO success.
        </p>
      </div>
      <div className="bottom-text">
      <strong style={{
         color: "#000"
      }}>
          Invest in long-term growth with our results-oriented SEO services.
        </strong>
        <strong>
        <NavLink style={{
          color : "#F77A14"
        }} to="/contact">Contact us</NavLink> today for a free consultation!
        </strong>
      </div>
      */}
      {/* <div className="service-layouts">
                {!foundObject && <h2>Loading...</h2>}
                <br />
                <br />
                <br />
                {foundObject && (
                    <>
                    
                         <img
                            src={foundObject.service_img}
                            alt={foundObject.service_heading}
                        />  
                        <h2>{foundObject.service_heading}</h2>
                        <p className="service-description">
                            {foundObject.service_description}
                        </p>
                    </>
                )}
            </div>
             */}
    </div>
  );
};

export default SingleService;
