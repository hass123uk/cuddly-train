import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-accent2 md:px-2">
      <Header />

      <main className="flex-1 w-full md:min-w-980">{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
