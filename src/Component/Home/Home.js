import React from 'react';
import Banar from './Banar';
import Carosol from './Carosol';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Carosol></Carosol>
            <Banar></Banar>
            <Info></Info>
        </div>
    );
};

export default Home;