import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"

const SingleService = ({ data }) => {
  const [services, setServices] = useState(null);
  const [foundObject, setFoundObject] = useState(null);
  const [isLoading,setIsLoading] = useState(true)
  const getData = async () => {
    let url = "/data.json";
    try {
        setIsLoading(true)
        const response = await fetch(url);
        const responseData = await response.json();
        setServices(responseData)
        setIsLoading(false)
    } catch (error) {
        console.error("Error : ", error);
    }
}
  useEffect(() => {
    getData()
    if(isLoading){
      return
    }
    if (!isLoading) {
      const found = services.find((obj) => {
        if (obj.type === data.type) {
          setFoundObject(obj);
        }
      });
    }
 // console.log("Found Object : ",foundObject)
  }, [isLoading]);
  
  return (
    <div data-aos="zoom-in" id="page" className="section">
      {/* { isLoading && <div style={{marginTop : "5rem"}} className="loading"><h2>Loading...</h2></div>} */}
       {foundObject &&
       <div className="service-header">
        <img src={foundObject.service_header_img} alt={data.type} />
        <h2>{foundObject.header_title}</h2>

{/*}
      <div className="service-flex">
          <div className="flex">
            {
              foundObject.left_service_tools.map((list,key)=>{
                return(
                  <li key={key}>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">{list}</span>
            </li>
                )
              })
            }
          </div>

          
          <div className="flex">
            {
              foundObject.right_service_tools.map((li,i)=>{
                return(
                  <li key={i}>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">{li}</span>
            </li>
                )
              })
            }
          </div>
      </div>
      */}
</div>
}
{/*
      <div className="service-header">
        <img src="/images/seo_service.png" />
        <h2> Our SEO Services and Strategy Management</h2>
        <div className="service-flex">
          <div className="flex">
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Websites Analysis And Audit</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Google Web Analytics</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Find Out Business Keywords</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Authorizes Social Media Accounts</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Research Keywords Competitors</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Follow Google Algorithm</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Manually On-Page Optimization</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Link Building Campaign</span>
            </li>
          </div>
          <div className="flex">
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Content Checking And Optimization</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Video Submission</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Google Webmaster Tool Setup</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Link Audit &amp; Penguin Recovery</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Bing Webmaster Tool Setup</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Local SEO Services</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Yandex Webmaster Tool Setup</span>
            </li>
            <li>
              <span>
                <i className="bx bx-check-circle"></i>
              </span>
              <span className="smm_content">Monitoring And Reporting</span>
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
