import React, { PureComponent, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';
import HttpMethods from '../components/documents/good-practices/http-methods/Http-methods';
import LegacyCode from '../components/documents/refactoring/legacy-code/Legacy-code';

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

                            <Route path="/refactoring/legacy-code" element={<LegacyCode />} />

                            <Route path="/good-practices/http-methods" element={<HttpMethods />} />

                        </Routes>
                    </BrowserRouter>
                    <Footer />
                </Suspense>
            </div>
        )
    }
}

export default Dojo;