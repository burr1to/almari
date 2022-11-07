import React from "react";
import "./statics/css/catalog.css";
import Layout from "./../../components/global/Layout";
import CatalogItems from "./../../components/global/Product";

function CatalogPage() {
  return (
    <>
      <Layout>
        <div className='catalog-con'>
          <div className='catalog-area'>
            <div className='catalog-filter-area'>
              <h6>Filters</h6>
              <form className='catalog-filter-forms'></form>
            </div>
            <div className='catalog-content-area'>
              <div className='title-area'>
                <h3>Category</h3>
              </div>
              <CatalogItems />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CatalogPage;
