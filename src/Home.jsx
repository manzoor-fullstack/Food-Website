import React, { useContext } from 'react'
import Header from './components/Header';
import './index.css'
import Section1 from './Home/Section1';
import Section2 from './Home/Section2';
import Section3 from './Home/Section3';
import Section4 from './Home/Section4';
import Section5 from './Home/Section5';
import Section6 from './Home/Section6';
import Section7 from './Home/Section7';
import Section8 from './Home/Section8';
import Section9 from './Home/Section9';
import Section10 from './Home/Section10';
import Footer from './components/Footer';
function Home() {

    return(
        <>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Footer />
        </>
    )
}

export default Home
