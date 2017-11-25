import React from 'react'
import Link from 'gatsby-link'

import 'tachyons/css/tachyons.css';

const IndexPage = () => (
    <div>
        <header className="sans-serif">
            <div className="cover bg-left bg-center-l" style={{backgroundImage: 'url(http://mrmrs.github.io/photos/u/011.jpg)'}}>
                <div className="bg-black-80 pb5 pb6-m pb7-l">
                    <nav className="dt w-100 mw8 center">
                        <div className="dtc v-mid tr pa3">
                            <Link className="f6 fw4 hover-dark-blue no-underline light-gray dn dib-ns pv2 ph3" to="/company/">Company</Link>
                            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/products/">Products</Link>
                            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/thoughts/">Thoughts</Link>
                            <Link className="f6 fw4 hover-white no-underline white dib ml2 pv2 ph3 ba" to="/">Sign Up</Link>
                        </div>
                    </nav>
                    <div className="tc-l mt4 mt5-m mt6-l ph3">
                        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Bright Ideas Digital</h1>
                        <h2 className="fw1 f3 white-80 mt3 mb4">We craft beautiful experiences</h2>
                        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Register to receive updates</a>
                    </div>
                </div>
            </div>
        </header>
        <footer className="pv4 ph3 ph5-ns tc">
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
