// import React from 'react';
// import './Navbar.css';
// import logo from '../../assets/logo.svg';
// import { useEffect, useState } from 'react';
// import { Link as ScrollLink } from 'react-scroll';

// const Navbar = () => {
//   //scroll fn
//   const [menu, setMenu] = useState('hero');
//   //Refresh return to top page
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="navbar">
//       <img src={logo} alt="" />
//       <ul className="nav-menu">
//         <ScrollLink to="hero-scroll" spy={true} smooth={true} offset={-100} duration={500}>
//           <li onClick={() => setMenu('hero')}>Home</li>
//         </ScrollLink>

//         <ScrollLink to="about-scroll" spy={true} smooth={true} offset={-100} duration={500}>
//           <li onClick={() => setMenu('about')}>About Me</li>
//         </ScrollLink>

//         <ScrollLink to="service-scroll" spy={true} smooth={true} offset={-100} duration={500}>
//           <li onClick={() => setMenu('services')}>Services</li>
//         </ScrollLink>
//         <ScrollLink to="project-scroll" spy={true} smooth={true} offset={-100} duration={500}>
//           <li onClick={() => setMenu('projects')}>Projects</li>
//         </ScrollLink>

//         <ScrollLink
//           to="connect-scroll"
//           className="nav-connect"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={500}
//         >
//           <li onClick={() => setMenu('connect')}>Connect With Me</li>
//         </ScrollLink>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('hero');

  // Scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <ScrollLink to="hero-scroll" spy={true} smooth={true} offset={-100} duration={500}>
          <li
            className={menu === 'hero' ? 'active' : ''}
            onClick={() => setMenu('hero')}
          >
            Home
          </li>
        </ScrollLink>

        <ScrollLink to="about-scroll" spy={true} smooth={true} offset={-100} duration={500}>
          <li
            className={menu === 'about' ? 'active' : ''}
            onClick={() => setMenu('about')}
          >
            About Me
          </li>
        </ScrollLink>

        <ScrollLink to="service-scroll" spy={true} smooth={true} offset={-100} duration={500}>
          <li
            className={menu === 'services' ? 'active' : ''}
            onClick={() => setMenu('services')}
          >
            Services
          </li>
        </ScrollLink>

        <ScrollLink to="project-scroll" spy={true} smooth={true} offset={-100} duration={500}>
          <li
            className={menu === 'projects' ? 'active' : ''}
            onClick={() => setMenu('projects')}
          >
            Projects
          </li>
        </ScrollLink>

        <ScrollLink
          to="connect-scroll"
          className="nav-connect"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li
            className={menu === 'connect' ? 'active' : ''}
            onClick={() => setMenu('connect')}
          >
            Connect With Me
          </li>
        </ScrollLink>
      </ul>
    </div>
  );
};

export default Navbar;
