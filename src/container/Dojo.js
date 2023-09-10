import React, { PureComponent } from 'react';
import Home from '../components/home/Home';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';


class Dojo extends PureComponent {
    render() {
        return (
            <div>
                <Navbar />
                <Home />
                <Footer />
            </div>

        )
    }
}

export default Dojo;