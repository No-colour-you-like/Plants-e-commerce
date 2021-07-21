import React from "react";
import CategoryPreview from "../category-preview/CategoryPreview";

const Previews = ({ sectionData }) => {
  return sectionData.type.map((productData, i) => {
    return <CategoryPreview key={i} productData={productData} />;
  });
};

export default Previews;
