import React from 'react';
import './categories.sass';

const Categories = () => {
    return (
        <div className="categories-container">
            <div class="categories-container-list">
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">BUENAS PRACTICAS</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Principios Yagni, Tell don't ask y KYSS</a></li>
                        <li><a href="/good-practices/http-methods">6 http metodos en REST</a></li>
                        <li><a href="/good-practices/clean-architecture">Clean Architecture</a></li>
                        <li><a href="ruta.com">Principios Solid</a></li>
                        <li><a href="/good-practices/tdd">TDD</a></li>
                    </div>

                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">PATRONES DE DISEÑO</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Decorator</a></li>
                        <li><a href="ruta.com">Strategy</a></li>
                        <li><a href="ruta.com">Factory</a></li>
                        <li><a href="ruta.com">Facada</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">REFACTORIZACION</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="/refactoring/code-smell-and-techniques">Codigo smell y tecnicas</a></li>
                        <li><a href="/refactoring/legacy-code">Codigo legacy</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">TESTING</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Integracion</a></li>
                        <li><a href="ruta.com">Coverage</a></li>
                        <li><a href="ruta.com">Unitarios</a></li>
                        <li><a href="ruta.com">BDD</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">DOCUMENTACION</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">BDD</a></li>
                        <li><a href="ruta.com">TDD</a></li>
                    </div>
                </div>
            </div>
            <div class="categories-container-list">
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">TECNICAS</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Continuous Deployment</a></li>
                        <li><a href="ruta.com">Continuous Integration</a></li>
                        <li><a href="ruta.com">Domain Driven Design</a></li>
                        <li><a href="ruta.com">Continuous Delivery</a></li>
                        <li><a href="ruta.com">Microservicios</a></li>
                        <li><a href="ruta.com">Scrum</a></li>
                        <li><a href="ruta.com">BFF</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">HERRAMIENTAS</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Principios Yagni</a></li>
                        <li><a href="ruta.com">Domain Driven Design</a></li>
                        <li><a href="ruta.com">Principios Solid</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">MONITOREO</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Factory</a></li>
                        <li><a href="ruta.com">Strategy</a></li>
                        <li><a href="ruta.com">Facada</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">TESTING</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Integracion</a></li>
                        <li><a href="ruta.com">Unitarios</a></li>
                        <li><a href="ruta.com">TDD</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">DOCUMENTACION</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Integracion</a></li>
                        <li><a href="ruta.com">Unitarios</a></li>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div >
    )
}

export default Categories;