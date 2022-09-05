import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">Experienced and self-motivated developer with valuable industry experience and coding enthusiasm. Result-oriented and has a proven track record of working with team members to achieve goals. Having extensive experience in build and maintain websites and web applications, using programming, design tools, and languages such as HTML, CSS, Python and JavaScript to meet both client and end-user needs. Having a strong sense of enterprise and responsibility can face any difficulties and challenges.</p>
                       
                        <p className="text-faded mb-5">My strong organizational skills and excellent problem-solving abilities allow me to effectively collaborate on cross-functional teams that include designers, software developers, scrum masters, and project managers. My advanced education, professional background in technology, drive for success, and strong attention to detail are great assets that I own.</p>
                        {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Check Out My Work</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About