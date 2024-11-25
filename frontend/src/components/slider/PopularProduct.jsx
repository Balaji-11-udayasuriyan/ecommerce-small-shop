import React from "react";

const PopularProduct = () => {

    return(

        <section className="product-tabs section-padding position-relative">
          <div className="container">
              <div className="section-title style-2 wow animate__animated animate__fadeIn">
                <div className="title">
                  <h3>Popular Product</h3>
                </div>
              </div>
              
              <div className="row">

                  {/* Product 1 */}

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="frontend/imgs/shop/product-3-1.jpg" alt="Product" />
                            <img className="hover-img" src="frontend/imgs/shop/product-3-2.jpg" alt="Product hover" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{ width: '85%' }}></div>
                          </div>
                          <span className="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="vendor-details-1.html">StarKist</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>$48.85</span>
                            <span className="old-price">$52.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product 2 */}
                  
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="frontend/imgs/shop/product-4-1.jpg" alt="Product" />
                            <img className="hover-img" src="frontend/imgs/shop/product-4-2.jpg" alt="Product hover" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Healthy Chips - Sea Salt & Vinegar</a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{ width: '90%' }}></div>
                          </div>
                          <span className="font-small ml-5 text-muted"> (4.5)</span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="vendor-details-1.html">CrunchTime</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>$35.99</span>
                            <span className="old-price">$40.0</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product 3 */}

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img className="default-img" src="frontend/imgs/shop/product-5-1.jpg" alt="Product" />
                            <img className="hover-img" src="frontend/imgs/shop/product-5-2.jpg" alt="Product hover" />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html">
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                            <i className="fi-rs-shuffle"></i>
                          </a>
                          <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="fi-rs-eye"></i>
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html">Snack</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Healthy Chips - BBQ</a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div className="product-rating" style={{ width: '80%' }}></div>
                          </div>
                          <span className="font-small ml-5 text-muted"> (4.1)</span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="vendor-details-1.html">CrunchTime</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>$32.85</span>
                            <span className="old-price">$38.0</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="shop-cart.html">
                              <i className="fi-rs-shopping-cart mr-5"></i>Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </section>
    );
}

export default PopularProduct;
