import React from 'react';
import './Categories.sass';

const Categories = () => {
    return (
        <div className="categories-container">
            <div class="categories-container-list">
                <div class="categories-container-list-section">
                    <h2>Buenas practicas</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">Principios <span className="highlight-word">Yagni</span>, <span className="highlight-word">Tell don't ask</span> y <span className="highlight-word">KYSS</span></h5>
                        <h5 href="url">Principios <span className="highlight-word">Solid</span></h5>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h2>Patrones de diseño</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">Factory</h5>
                        <h5 href="url">Strategy</h5>
                        <h5 href="url">Facada</h5>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h2>Refactorizacion</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">link text</h5>
                        <h5 href="url">link text</h5>
                        <h5 href="url">link text</h5>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h2>Testing</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">Integracion</h5>
                        <h5 href="url">Coverage</h5>
                        <h5 href="url">Unitarios</h5>
                        <h5 href="url">BDD</h5>
                        <h5 href="url">TDD</h5>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h2>Documentacion</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">Integracion</h5>
                        <h5 href="url">Unitarios</h5>
                    </div>
                </div>
            </div>

            <div class="categories-container-list">
                <div class="categories-container-list-section">
                    <h2>Tecnicas</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">6 http metodos en REST</h5>
                        <h5 href="url">Continuous Deployment</h5>
                        <h5 href="url">Continuous Integration</h5>
                        <h5 href="url"><span className="highlight-word">D</span>omain <span className="highlight-word">D</span>riven <span className="highlight-word">D</span>esign</h5>
                        <h5 href="url">Continuous Delivery</h5>
                        <h5 href="url">Microservicios</h5>
                        <h5 href="url">Scrum</h5>
                        <h5 href="url">BFF</h5>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h2>Herramientas</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">Principios <span className="highlight-word">Yagni</span></h5>
                        <h5 href="url"><span className="highlight-word">D</span>omain <span className="highlight-word">D</span>riven <span className="highlight-word">D</span>esign</h5>
                        <h5 href="url">Principios <span className="highlight-word">Solid</span></h5>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h2>Monitoreo</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">Factory</h5>
                        <h5 href="url">Strategy</h5>
                        <h5 href="url">Facada</h5>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h2>Testing</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">Integracion</h5>
                        <h5 href="url">Unitarios</h5>
                        <h5 href="url">TDD</h5>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h2>Documentacion</h2>
                    <div class="categories-container-list-section-content">
                        <h5 href="url">Integracion</h5>
                        <h5 href="url">Unitarios</h5>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Categories;