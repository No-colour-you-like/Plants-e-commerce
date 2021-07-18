import React from "react";
import "./homepage.scss";
import MenuItem from "../../components/menu-item/MenuItem";

import { connect } from "react-redux";

const HomePage = ({ sectionsData }) => {
  return (
    <div className="directory-menu">
      {sectionsData.map((section, i) => {
        return <MenuItem key={i} sectionInfo={section} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sectionsData: state.products.data,
  };
};

export default connect(mapStateToProps)(HomePage);
