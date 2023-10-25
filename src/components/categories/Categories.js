import React from 'react';
import './Categories.sass';

const Categories = () => {
    return (
        <div className="categories-container">
            <div class="categories-container-list">
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">BUENAS PRACTICAS</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="/good-practices/principles-Yagni-Tell-dont-ask-DRY-and-KYSS">Principios Yagni, Tell don't ask, DRY y KYSS</a></li>
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
                        <li><a href="ruta.com">Confluence</a></li>
                        <li><a href="ruta.com">Swagger</a></li>
                        <li><a href="ruta.com">Notion</a></li>
                    </div>
                </div>
            </div>
            <div class="categories-container-list">
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">TECNICAS</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="/techniques/continuous-deployment">Continuous Deployment</a></li>
                        <li><a href="ruta.com">Continuous Integration</a></li>
                        <li><a href="/techniques/domain-driven-design">Domain Driven Design</a></li>
                        <li><a href="/techniques/continuous-delivery">Continuous Delivery</a></li>
                        <li><a href="ruta.com">Microservicios</a></li>
                        <li><a href="ruta.com">Scrum</a></li>
                        <li><a href="ruta.com">BFF</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">HERRAMIENTAS</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">-</a></li>
                        <li><a href="ruta.com">-</a></li>
                        <li><a href="ruta.com">-</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">MONITOREO</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">New Relic</a></li>
                        <li><a href="ruta.com">Opsgenie</a></li>
                        <li><a href="ruta.com">Datadog</a></li>
                        <li><a href="ruta.com">Grafana</a></li>
                        <li><a href="ruta.com">Kibana</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">METODOLOGIAS</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">Programación extrema</a></li>
                        <li><a href="ruta.com">Kanban</a></li>
                        <li><a href="ruta.com">Scrum</a></li>
                    </div>
                </div>
                <div class="categories-container-list-section">
                    <h4 class="categories-container-list-section-title">OTROS AUTORES</h4>
                    <div class="categories-container-list-section-content">
                        <li><a href="ruta.com">-</a></li>
                        <li><a href="ruta.com">-</a></li>
                        <li><a href="ruta.com">-</a></li>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div >
    )
}

export default Categories;