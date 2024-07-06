import React, { useState, useEffect } from "react";

const SingleService = ({ data }) => {
    const [foundObject, setFoundObject] = useState(null);
    const arr = [
        {
            type: "web-development",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Web Development & Design",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "graphics-desgin",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Graphics Desgin And Logo",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "seo-analysis",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Web Development & Design",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "video-editing",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Web Development & Design",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "fullstack-seo",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Full Stack SEO",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "content-writing",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Web Development & Design",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        }
    ];
    useEffect(() => {
        //const found = arr.find(obj => obj.type === data.type);
        const found = arr.find(obj => {
            if (obj.type === data.type) {
                setFoundObject(obj);
                console.log(obj.type);
            }
        });
    }, []);
    console.log(foundObject);
    // if (data.type.name === matchingItem.type) {
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <div className="service-layouts">
                <h2>Ghs Julian</h2>
            </div>
        </div>
    );

    /*
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <div className="service-layouts">
                <img src={matchingItem.service_img} />
                <h2>Ghs Julian  </h2>
                <p className="service-description">
                            {matchingItem.service_description}
                        </p>
            </div>
        </div>
    );
    */
    // }
};

export default SingleService;

/*
import React, { useState } from 'react';

const arr = [
  {
    type: "web-development",
    service_img: "http://localhost:8080/server/assets/images/agent_3.png",
    service_heading: "Web Development & Design",
    service_description:
      "We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible.",
  },
  // ... other objects
  {
    type: "content-writing",
    service_img: "http://localhost:8080/server/assets/images/agent_3.png",
    service_heading: "Content Writing", // Corrected typo
    service_description:
      "We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible.",
  },
];

const ghs = "content-writing"; // Corrected typo

function App() {
  const [foundObject, setFoundObject] = useState(null);

  React.useEffect(() => {
    const found = arr.find((obj) => obj.type === ghs);
    setFoundObject(found);
  }, []); // Empty dependency array to run only once

  return (
    <div>
      {foundObject ? (
        <div>
          <h2>{foundObject.service_heading}</h2>
          <p>{foundObject.service_description}</p>
         
        </div>
      ) : (
        <p>Service not found!</p>
      )}
    </div>
  );
}

export default App;

*/
