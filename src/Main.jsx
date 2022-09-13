import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import './Main.css';
/* import img1 from './assets/img/01.jpg' */

export function Main({ header, navbar, footer, cards}) { // Destructuring Javascript
    return (
        <>
            {/* <!-- Navigation--> */}
            <Navbar navbar={navbar} />
            {/* <!-- Header--> */}
            <Header header={header} />
              {/* <!-- Navigation--> */}
              <Cards cards={cards} />
    
            {/* <!-- Footer--> */}
            <Footer footer={footer} />
        </>
    )
}

