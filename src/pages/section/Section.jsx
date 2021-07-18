import React from "react";
import { Route } from "react-router-dom";
import CategoryFull from "../../components/category-full/CategoryFull";
import Previews from "../../components/previews/Previews";

import { connect } from "react-redux";

import "./section.scss";

const Section = ({
  productsData,
  livePlantsData,
  fauxPlantsData,
  flowersData,
}) => {
  return (
    <section className="section">
      <h1 className="section-title">{productsData.title}</h1>
      <div className="section-content">
        <Route
          exact
          path="/plants"
          component={() => <Previews productsData={productsData} />}
        />
        <Route
          exact
          path="/gifts"
          component={() => <Previews productsData={productsData} />}
        />
        <Route
          exact
          path="/plants/live"
          component={() => <CategoryFull productItems={livePlantsData} />}
        />
        <Route
          exact
          path="/plants/faux"
          component={() => <CategoryFull productItems={fauxPlantsData} />}
        />
        <Route
          exact
          path="/plants/flowers"
          component={() => <CategoryFull productItems={flowersData} />}
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    livePlantsData: state.products.data[0].type[0],
    fauxPlantsData: state.products.data[0].type[1],
    flowersData: state.products.data[0].type[2],
  };
};

export default connect(mapStateToProps)(Section);
