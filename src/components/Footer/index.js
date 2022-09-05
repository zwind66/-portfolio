import React from 'react';

function Footer() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/zwind66"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/shuai-zuo-122642109/"
        },
        {
            name: "fab fa-stack-overflow",
            link: "https://stackoverflow.com/users/13452330/sylvia-prabudy"
        }
    ]

    return (
        <section>
            <footer className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        {icons.map(icon =>
                            (
                                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                            )
                        )}
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;
