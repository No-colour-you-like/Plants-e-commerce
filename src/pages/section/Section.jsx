import React from "react";
import { Route } from "react-router-dom";
import CategoryFull from "../../components/category-full/CategoryFull";
import Previews from "../../components/previews/Previews";

import { connect } from "react-redux";

import "./section.scss";

const Section = ({ sectionData, productsData }) => {
  const plantsData = productsData[0],
    giftsData = productsData[1],
    gardenCareData = productsData[2],
    wellnessData = productsData[3],
    artData = productsData[4];

  return (
    <section className="section">
      <h1 className="section-title">{sectionData.title}</h1>
      <div className="section-content">
        <Route
          exact
          path="/plants-e-commerce/plants"
          component={() => <Previews sectionData={sectionData} />}
        />
        <Route
          exact
          path="/plants-e-commerce/gifts"
          component={() => <Previews sectionData={sectionData} />}
        />
        <Route
          exact
          path="/plants-e-commerce/gardencare"
          component={() => <Previews sectionData={sectionData} />}
        />
        <Route
          exact
          path="/plants-e-commerce/wellness"
          component={() => <Previews sectionData={sectionData} />}
        />
        <Route
          exact
          path="/plants-e-commerce/art"
          component={() => <Previews sectionData={sectionData} />}
        />
        <Route
          exact
          path="/plants-e-commerce/plants/live"
          component={() => <CategoryFull productItems={plantsData.type[0]} />}
        />
        <Route
          exact
          path="/plants-e-commerce/plants/faux"
          component={() => <CategoryFull productItems={plantsData.type[1]} />}
        />
        <Route
          exact
          path="/plants-e-commerce/plants/flowers"
          component={() => <CategoryFull productItems={plantsData.type[2]} />}
        />
        <Route
          exact
          path="/plants-e-commerce/gifts/collection"
          component={() => <CategoryFull productItems={giftsData.type[0]} />}
        />
        <Route
          exact
          path="/plants-e-commerce/gifts/bundle"
          component={() => <CategoryFull productItems={giftsData.type[1]} />}
        />
        <Route
          exact
          path="/plants-e-commerce/wellness/wellness"
          component={() => <CategoryFull productItems={wellnessData.type[0]} />}
        />
        <Route
          exact
          path="/plants-e-commerce/wellness/skincare"
          component={() => <CategoryFull productItems={wellnessData.type[1]} />}
        />
        <Route
          exact
          path="/plants-e-commerce/art/art"
          component={() => <CategoryFull productItems={artData.type[0]} />}
        />
        <Route
          exact
          path="/plants-e-commerce/gardencare/gardencare"
          component={() => (
            <CategoryFull productItems={gardenCareData.type[0]} />
          )}
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    productsData: state.products.data,
  };
};

export default connect(mapStateToProps)(Section);
