import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Cards from './components/Cards';
import './Main.css';
/* import img1 from './assets/img/01.jpg' */

export function Main({ header, navbar, sections, footer, cards}) { // Destructuring Javascript
    return (
        <>
            {/* <!-- Navigation--> */}
            <Navbar navbar={navbar} />
            {/* <!-- Header--> */}
            <Header header={header} />
            {/* <!-- Content sections --> */}
              {/* <!-- Navigation--> */}
              <Cards cards={cards} />
            {
                sections.map((section, index) => {
                    return (
                        <Section key={section.id} index={index} section={section} />
                    )
                })
            }
            {/* <!-- Footer--> */}
            <Footer footer={footer} />
        </>
    )
}

