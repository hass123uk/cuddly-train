import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-accent2 lg:px-14">

      {/* these: top-0 left-0 lg:mx-14 are needed because fixed does not play nice with flex */}
      <Header className="fixed top-0 left-0 right-0 z-10 lg:min-w-980 lg:mx-14" />

      <main className="mt-16 flex-1 w-full lg:min-w-980">{children}</main>

      <Footer className="lg:min-w-980 lg:mb-16"/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
