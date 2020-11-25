import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-accent2 md:px-2">
      <Header className="fixed top-0 left-0 right-0 z-10 md:min-w-980" />

      <main className="mt-20 flex-1 w-full md:min-w-980">{children}</main>

      <Footer className="md:min-w-980"/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
