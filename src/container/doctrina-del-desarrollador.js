import React, { PureComponent, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';
import HttpMethods from '../components/documents/good-practices/http-methods/Http-methods';
import LegacyCode from '../components/documents/refactoring/legacy-code/Legacy-code';
import CodeSmellAndTechniques from '../components/documents/refactoring/code-smell-and-techniques/Code-smell-and-techniques';
import WorkWithUs from '../components/work-with-us/Work-with-us';
import AboutUs from '../components/about-us/About-us';
import Contact from '../components/contact/Contact';
import CleanArchitecture from '../components/documents/good-practices/clean-architecture/Clean-architecture';
import Tdd from '../components/documents/good-practices/tdd/Tdd';

class DoctrinaDelDesarrollador extends PureComponent {

    render() {
        return (
            <div>
                <Suspense>
                    <Navbar />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/work-with-us" element={<WorkWithUs />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/contact" element={<Contact />} />

                            <Route path="/refactoring/code-smell-and-techniques" element={<CodeSmellAndTechniques />} />
                            <Route path="/refactoring/legacy-code" element={<LegacyCode />} />

                            <Route path="/good-practices/http-methods" element={<HttpMethods />} />
                            <Route path="/good-practices/clean-architecture" element={<CleanArchitecture />} />
                            <Route path="/good-practices/tdd" element={<Tdd />} />

                        </Routes>
                    </BrowserRouter>
                    <Footer />
                </Suspense>
            </div>
        )
    }
}

export default DoctrinaDelDesarrollador;