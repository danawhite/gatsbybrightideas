import React from 'react'
import Link from 'gatsby-link'

import './index.css';

const IndexPage = () => (
    <div>
        <header className="w100 sans-serif">
            <div className="cover bg-center pb7" style={{backgroundImage: 'url(https://scontent.fphl2-3.fna.fbcdn.net/v/t1.0-9/10401512_10206036145807724_7330657773608183373_n.jpg?oh=488ae667e2986abc43be231678c91d92&oe=5AA760F0)'}}>
                <div className="flex flex-column items-center bg-animate">
                    <nav className="flex mw4">
                        <div className="dtc w2 v-mid pa3">
                            {/*<a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">*/}
                                {/*<img height={32} width={32} src="/src/assets/img/bright-ideas-logo.png"/>*/}
                                {/*/!*<svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>*!/*/}
                            {/*</a>*/}
                        </div>
                        <div className="flex justify-end items-end v-mid tr pt3 pr4">
                            <h4 className="mr1 tc ttu bg-black-90 lh-copy white pa2 tracked-tight" style={{transform: 'skewX(-20deg)', }}><Link className="gray no-underline" to="/">Company</Link></h4>
                            <h4 className="mr1 tc ttu bg-black-90 lh-copy white pa2 tracked-tight" style={{transform: 'skewX(-20deg)', }}><Link className="gray no-underline" to="#">Products</Link></h4>
                            <h4 className="mr1 tc ttu bg-black-90 lh-copy white pa2 tracked-tight" style={{transform: 'skewX(-20deg)', }}><Link className="gray no-underline" to="#">Thoughts</Link></h4>
                            <h4 className="mr1 tc ttu bg-black-90 lh-copy white pa2 tracked-tight" style={{transform: 'skewX(-20deg)', }}><Link className="gray no-underline" to="#">Articles</Link></h4>
                            <h4 className="mr1 tc ttu bg-black-90 lh-copy white pa2 tracked-tight" style={{transform: 'skewX(-20deg)', }}><Link className="gray no-underline" to="#">Screencasts</Link></h4>
                        </div>
                    </nav>
                    <div className="flex-column mt4 mt5-m mt6-l ph3 justify-start items-center">
                        <h3 className="flex tu light-green pa2 f3 f2-ns f1-l fw7 lh-copy saturated">Bright Ideas Digital</h3>
                        <h6 className="flex bg-black-90 ttu pa3 f6 f5-ns f-5 fw6 white lh-copy justify-end">Crafting beautiful experiences</h6>
                        {/*<h6 className="flex bg-black-90 ttu pa3 f5 f-subheadline fw8 white mb3 lh-copy" style={{transform: 'skewX(-20deg)', }}>Coming soon</h6>*/}
                    </div>
                </div>
            </div>
        </header>
        <footer className="pt0 pv4 ph2 ph2-ns tc">
            <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" href="#" title="">
                <svg data-icon="facebook" viewBox="0 0 32 32" style={{fill:"currentcolor"}}>
                    <title>facebook icon</title>
                    <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
                </svg>
            </a>
            <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" href="http://twitter.com/absolutgenius" title="">
                <svg data-icon="twitter" viewBox="0 0 32 32" style={{fill:"currentcolor"}}>
                    <title>twitter icon</title>
                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
                </svg>
            </a>
            <a className="link dim gray dib br-100 h2 w2 mr3 pa2 bg-near-white ba b--black-10" href="http://github.com/danawhite" title="">
                <svg data-icon="github" viewBox="0 0 32 32" fill="currentcolor">
                    <title>github icon</title>
                    <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
                </svg>
            </a>
        </footer>
    </div>
);

export default IndexPage;
