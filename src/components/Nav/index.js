import React from 'react';

import Link from 'gatsby-link';

const Nav = ({navItems}) => (
    <nav className="dt w-100 mw8 center">
        <div className="dtc v-mid tr pa3">
            <Link className="f6 fw4 hover-dark-blue no-underline light-gray dn dib-ns pv2 ph3" to="/company/">Company</Link>
            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/products/">Products</Link>
            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/thoughts/">Thoughts</Link>
            <Link className="f6 fw4 hover-white no-underline white dib ml2 pv2 ph3 ba" to="/">Sign Up</Link>
        </div>
    </nav>
);

export default Nav;