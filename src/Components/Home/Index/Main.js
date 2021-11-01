import React from 'react';
import Header from '../Header/Header';

import Service from '../Service/Service';

import About from '../About/About';
import Example from '../Example/Example';


const Main = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Service/>
            <Example/>

        </div>
    );
};

export default Main;