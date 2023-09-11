import React, { PureComponent, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';

class Dojo extends PureComponent {
    render() {
        return (
            <div>
                <Suspense>
                    <Navbar />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                    <Footer />
                </Suspense>
            </div>
        )
    }
}

export default Dojo;