import React from 'react'
import './style.css'

 // import Certificado from '../../assets/ieepython.jpg'

const RollTo = (local) => {

    if (local === 'sobre'){
        window.scroll(0,0);
    }
    if (local === 'experiencia'){
        window.scroll(0,530);
    }
    if (local === 'educacao'){
        window.scroll(0,1040);
    }
    if (local === 'skills'){
        window.scroll(0,1600);
    }
    /*
    if (local === 'certificados'){
        window.scroll(0,2000);
    }  */
}


/*                  
                    <section class="section-padrao" id="certificados">
                        <h1 class="title">Certificados e Conquistas</h1>
                        <ul class="certificados">
                           <img class="imagemcertificado" src={Certificado} alt="python ieeufpb" />
                           <img class="imagemcertificado" src={Certificado} alt="python ieeufpb" />
                           <img class="imagemcertificado" src={Certificado} alt="python ieeufpb" />
                           <img class="imagemcertificado" src={Certificado} alt="python ieeufpb" />
                        </ul>
                    </section>



                    <li><button class="roll" onClick={()=> RollTo('certificados')}>Certificados</button></li>
*/



export default function Curriculo() {
    return(
        <section class="securri">
            <header class="curriculo">
                <nav>
                    <button class="roll" id="logo" onClick={()=> RollTo('sobre')}><span>Pedro Foltram</span></button>
                    <ul class="nav-list">
                        <li><a class="roll" href="/home">Início</a></li>
                        <li><button class="roll" onClick={()=> RollTo('sobre')}>Sobre</button></li>
                        <li><button class="roll" onClick={()=> RollTo('experiencia')}>Experiência</button></li>
                        <li><button class="roll" onClick={()=> RollTo('educacao')}>Educação</button></li>
                        <li><button class="roll" onClick={()=> RollTo('skills')}>Skills</button></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section class="section-mae">
                    <section class="section-padrao" id="sobre">
                        <div class="div-title">
                            <h1 class="title-name">Pedro <span>Foltram</span></h1>
                            <h2 class="subtitle">Desenvolvedor | UFPB  ·  Engenharia da Computação
                                <p>
                                    <a class="subtitle-a" href="mailto:pedroaugustofolb@gmail.com">pedroaugustofolb@gmail.com&nbsp;&nbsp;</a>        
                                    | &nbsp;+55   (83)   986251686
                                </p>
                            </h2>
                        </div>
                        <p class="text-about-big">Estudo e trabalho, com diversas tecnologias, visando o desenvolvimento profissional e pessoal naquilo que acredito, a tecnologia
                        a nossa evolução. Atualmente, estou focado em desenvolver habilidades em <b>JavaScript</b>, buscando se aperfeiçoar no uso do <b>ReactJs e NodeJs</b>, além de buscar novas
                        tecnologias.</p> 
                        <div class="social-icons">
                            <a class="social-icon" href="https://www.linkedin.com/in/pedrofoltram/"><i class="fab fa-linkedin-in"></i></a>
                            <a class="social-icon" href="https://github.com/pedroaugustofb"><i class="fab fa-github"></i></a>
                            <a class="social-icon" href="https://api.whatsapp.com/send?phone=5583986251686"><i class="fab fa-whatsapp"></i></a>
                            <a class="social-icon" href="https://instagram.com/pedroaugustofb"><i class="fab fa-instagram"></i></a>
                        </div>
                    </section>

                    <section class="section-padrao" id="experiencia">
                        <div class="div-title">
                            <h1 class="title">Experiência</h1>
                            <div class="div-exp">
                                <h2 class="exp">Desenvolvedor de Software</h2>
                                <p class="tempo">Junho 2021 | Presente </p>
                            </div>
                            <h3 class="subtitle-exp">FastEng | Projeto Pavitech UFCG</h3>
                            <p class="text-about">O FastEng é um auxiliar técnico voltado para a área da Engenharia Civil, nele é possível cadastrar amostras, analisá-las e 
                                consultá-las posteriormente. Além disso, ainda é possivel gerar relatórios sobre seus ensaios. No projeto, atuo como desenvolvedor, 
                                construindo novas features em backend e frontend, corrigindo bugs, e implementando soluções.</p>
                        </div>
                    </section>

                    <section class="section-padrao" id="educacao">
                        <div class="div-title">
                            <h1 class="title">Educação</h1>
                            <div class="div-exp">
                                <h2 class="exp">Colégio Marista Pio X</h2>
                                <p class="tempo">2017 | 2019 </p>
                            </div>
                            <h3 class="subtitle-exp">Ensino Médio</h3>
                            <p class="text-about"></p>
                        </div>
                        <div class="div-title">
                            <div class="div-exp">
                                <h2 class="exp">Universidade Federal da Paraíba</h2>
                                <p class="tempo">2020 | Presente </p>
                            </div>
                            <h3 class="subtitle-exp">Engenharia da Computação</h3>
                            <p class="text-about-small">CRA: 8.54</p>
                        </div>
                    </section>

                    <section class="section-padrao" id="skills">
                        <h1 class="title">Skills</h1>
                        <div class="div-exp">
                            <h2 class="exp">Linguagens e Tecnologias:</h2>
                        </div>
                        <ul class="list-inline dev-icons">
                            <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                            <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                            <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                            <li class="list-inline-item"><i class="fab fa-react"></i></li>
                            <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                            <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                        </ul>
                        <div class="div-exp">
                            <h2 class="exp">Outras Competências:</h2>
                        </div>
                        <ul class="list-comp">
                            <li class="list-comp-item">Experiência com Metodologias Ágeis: Scrum</li>
                            <li class="list-comp-item">Trabalho em Equipe</li>
                            <li class="list-comp-item">Excel Básico</li>
                        </ul>
                    </section>
                    <section class="section-final">
                    </section>
                </section>
            </main>
        </section>
    )
}