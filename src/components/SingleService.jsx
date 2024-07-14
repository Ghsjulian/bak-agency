import React, { useState, useEffect } from "react";

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
  }, [services]);
  return (
    <div data-aos="zoom-in" id="page" className="section">
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
            <h5>Search Engine Optimization</h5>
            <p>

               has over 12 years of experience in this particular section.
              We offer professional and affordable SEO services<em> </em>to get
              more customers from all Search Engines. DMS provides advanced
              Local SEO services, Global Search Engine Optimization services,
              <em> </em>On-page and off-page detail audit reports, profitable
              keyword research, optimized content writing, on-page strategies
              implementation, and off-page or link-building services.
            </p>
          </div>
          <div className="service-col">
            <img src="/images/seo_service.png" />
          </div>
        </div>

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
