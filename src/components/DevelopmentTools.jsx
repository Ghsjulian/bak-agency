import React from "react";

const DevelopmentTools = () => {
    return (
        <div id="slide" data-aos="zoom-in" className="section">
            <h2>Our Web Development Tools</h2>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src="/tools/git.png" />
                    </div>
                    <div class="slide">
                        <img src="/tools/nodejs.png" />
                    </div>
                    <div class="slide">
                        <img src="/tools/code.png" />
                    </div>
                    <div class="slide">
                        <img src="/tools/terminal.png" />
                    </div>
                    <div class="slide">
                        <img src="/tools/api.png" />
                    </div>
                    <div class="slide">
                        <img src="/tools/mongodb.png" />
                    </div>
                    <div class="slide">
                        <img src="/tools/sheet.png" />
                    </div>
                </div>
            </div>
            {/*<div className="one-column">
                <img src="/tools/git.png" />
                <img src="/tools/nodejs.png" />
                <img src="/tools/code.png" />
                <img src="/tools/terminal.png" />
                <img src="/tools/api.png" />
                <img src="/tools/mongodb.png" />
                <img src="/tools/sheet.png" />
            </div>
            */}
        </div>
    );
};

export default DevelopmentTools;
