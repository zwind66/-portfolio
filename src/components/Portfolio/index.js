import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'tap-card',
            description: 'Node/React/Apollo/Express/Mongoose',
            link: "https://tap-card-everyone.herokuapp.com/",
            repo: "https://github.com/Israel2800/MERN-Project-3"
        },
        {
            name: 'read-the-classic',
            description: 'Node/Express/JS/Boostrap/SQL/ORM/MVC',
            link: "https://read-the-calssics.herokuapp.com/",
            repo: "https://github.com/corimest/read-the-classics"
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://zwind66.github.io/run-buddy/",
            repo: "https://github.com/zwind66/run-buddy"
        },
        {
            name: 'what-s-for-tomorrow',
            description: 'JavaScript/API/Bootstrap',
            link: "https://zwind66.github.io/What-s-for-tomorrow/",
            repo: "https://github.com/zwind66/What-s-for-tomorrow"
        },
        {
            name: 'food-festival',
            description: 'JS/Node/PWA',
            link: "https://zwind66.github.io/food-festival/",
            repo: "https://github.com/zwind66/food-festival"
        },
    
        {
            name: 'note-taker',
            description: 'Node/Express/Bootstrap',
            link: "https://note-taker-sz.herokuapp.com/",
            repo: "https://github.com/zwind66/Note-Taker.git"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://zwind66.github.io/Shuai-s-Assignment-5/",
            repo: "https://github.com/zwind66/Shuai-s-Assignment-5"
        },
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;
