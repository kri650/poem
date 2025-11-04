import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
// We'll add the Footer later
// import Footer from '../Footer/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;