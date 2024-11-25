import React, { useEffect, useState } from 'react';



const Header = () => {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/categories`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCategories(data);
        console.log("Fetched categories:", data);
        console.log("categories", categories)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="header-area header-style-1 header-height-2">
      <div className="mobile-promotion">
        <span>

          Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left
        </span>
      </div>
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Order Tracking</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div id="news-flash" className="d-inline-block">
                  <ul>
                    <li>100% Secure delivery without contacting the courier</li>
                    <li>Super Value Deals - Save more with coupons</li>
                    <li>Trendy 25% off silver jewelry today</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    Need help? Call Us: <strong className="text-brand">+1800 900</strong>
                  </li>
                  <li>
                    <a className="language-dropdown-active" href="#">English <i className="fi-rs-angle-small-down"></i></a>
                    <ul className="language-dropdown">
                      <li><a href="#"><img src="" alt="Français" /> Français</a></li>
                      <li><a href="#"><img src="#" alt="Deutsch" /> Deutsch</a></li>
                      <li><a href="#"><img src="#" alt="Pусский" /> Pусский</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="language-dropdown-active" href="#">USD <i className="fi-rs-angle-small-down"></i></a>
                    <ul className="language-dropdown">
                      <li><a href="#"><img src="#" alt="INR" /> INR</a></li>
                      <li><a href="#"><img src="#" alt="MBP" /> MBP</a></li>
                      <li><a href="#"><img src="#" alt="EU" /> EU</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <a href="#">
                <img src="frontend/imgs/theme/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form method="GET" action="#">

      {/*----------------------------category logic--------------------------------------------------*/}
                  <select className="select-active" name="category">
                    <option value="All">All Categories</option>
                    {
                      categories && categories.data && categories.data.length > 0 ? (
                        categories.data.map((category) => (
                          <option value={category._id} key={category._id}>
                            {category.name}
                          </option>
                        ))
                      ) : (
                        <option>No data</option>
                      )
                    }
                  </select>
        {/*------------------------------------------------------------------------------------------*/}                  
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="search-location">
                    <form action="#">
                      <select className="select-active">
                        <option>Your Location</option>
                        {/* Add cities here */}
                      </select>
                    </form>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="#">
                      <img className="svgInject" alt="Nest" src="#" />
                      <span className="pro-count blue">3</span>
                    </a>
                    <a href="frontend/imgs/theme/icons/icon-compare.svg">
                      <span className="label ml-0">Compare</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="#">
                      <img className="svgInject" alt="Nest" src="#" />
                      <span className="pro-count blue">6</span>
                    </a>
                    <a href="#">
                      <span className="label">Wishlist</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="#">
                      <img className="svgInject" alt="Nest" src="#" />
                    </a>
                    <a href="#">
                      <span className="label ml-0">Account</span>
                    </a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      {/* Add account dropdown here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <a href="#">
                <img src="#" alt="logo" />
              </a>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <a className="categories-button-active" href="#">
                  <span className="fi-rs-apps"></span> Browse All Categories
                  <i className="fi-rs-angle-down"></i>
                </a>
                <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                  {/* Add categories dropdown here */}
                </div>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    {/* Add menu items here */}
                  </ul>
                </nav>
              </div>
            </div>

          {/* menus */}

          <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                  <nav>
                      <ul>
                          <li class="hot-deals"><img src="frontend/imgs/theme/icons/icon-hot.svg" alt="hot deals" /><a href="shop-grid-right.html">Deals</a></li>
                          <li>
                              <a class="active" href="/">Home <i class="fi-rs-angle-down"></i></a>
                          </li>
                          <li>
                              <a href="about">About</a>
                          </li>
                          <li>
                              <a href="shop-grid-right.html">Shop <i class="fi-rs-angle-down"></i></a>
                              <ul class="sub-menu">
                                  <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                                  <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                                  <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                                  <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                                  <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                                  <li>
                                      <a href="#">Single Product <i class="fi-rs-angle-right"></i></a>
                                      <ul class="level-menu">
                                          <li><a href="shop-product-right.html">Product – Right Sidebar</a></li>
                                          <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                                          <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                                          <li><a href="shop-product-vendor.html">Product – Vendor Info</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="shop-filter.html">Shop – Filter</a></li>
                                  <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                                  <li><a href="shop-cart.html">Shop – Cart</a></li>
                                  <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                                  <li><a href="shop-compare.html">Shop – Compare</a></li>
                                  <li>
                                      <a href="#">Shop Invoice<i class="fi-rs-angle-right"></i></a>
                                      <ul class="level-menu">
                                          <li><a href="shop-invoice-1.html">Shop Invoice 1</a></li>
                                          <li><a href="shop-invoice-2.html">Shop Invoice 2</a></li>
                                          <li><a href="shop-invoice-3.html">Shop Invoice 3</a></li>
                                          <li><a href="shop-invoice-4.html">Shop Invoice 4</a></li>
                                          <li><a href="shop-invoice-5.html">Shop Invoice 5</a></li>
                                          <li><a href="shop-invoice-6.html">Shop Invoice 6</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="#">Vendors <i class="fi-rs-angle-down"></i></a>
                              <ul class="sub-menu">
                                  <li><a href="vendors-grid.html">Vendors Grid</a></li>
                                  <li><a href="vendors-list.html">Vendors List</a></li>
                                  <li><a href="vendor-details-1.html">Vendor Details 01</a></li>
                                  <li><a href="vendor-details-2.html">Vendor Details 02</a></li>
                                  <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                  <li><a href="vendor-guide.html">Vendor Guide</a></li>
                              </ul>
                          </li>
                          <li class="position-static">
                              <a href="#">Mega menu <i class="fi-rs-angle-down"></i></a>
                              <ul class="mega-menu">
                                  <li class="sub-mega-menu sub-mega-menu-width-22">
                                      <a class="menu-title" href="#">Fruit & Vegetables</a>
                                      <ul>
                                          <li><a href="shop-product-right.html">Meat & Poultry</a></li>
                                          <li><a href="shop-product-right.html">Fresh Vegetables</a></li>
                                          <li><a href="shop-product-right.html">Herbs & Seasonings</a></li>
                                          <li><a href="shop-product-right.html">Cuts & Sprouts</a></li>
                                          <li><a href="shop-product-right.html">Exotic Fruits & Veggies</a></li>
                                          <li><a href="shop-product-right.html">Packaged Produce</a></li>
                                      </ul>
                                  </li>
                                  <li class="sub-mega-menu sub-mega-menu-width-22">
                                      <a class="menu-title" href="#">Breakfast & Dairy</a>
                                      <ul>
                                          <li><a href="shop-product-right.html">Milk & Flavoured Milk</a></li>
                                          <li><a href="shop-product-right.html">Butter and Margarine</a></li>
                                          <li><a href="shop-product-right.html">Eggs Substitutes</a></li>
                                          <li><a href="shop-product-right.html">Marmalades</a></li>
                                          <li><a href="shop-product-right.html">Sour Cream</a></li>
                                          <li><a href="shop-product-right.html">Cheese</a></li>
                                      </ul>
                                  </li>
                                  <li class="sub-mega-menu sub-mega-menu-width-22">
                                      <a class="menu-title" href="#">Meat & Seafood</a>
                                      <ul>
                                          <li><a href="shop-product-right.html">Breakfast Sausage</a></li>
                                          <li><a href="shop-product-right.html">Dinner Sausage</a></li>
                                          <li><a href="shop-product-right.html">Chicken</a></li>
                                          <li><a href="shop-product-right.html">Sliced Deli Meat</a></li>
                                          <li><a href="shop-product-right.html">Wild Caught Fillets</a></li>
                                          <li><a href="shop-product-right.html">Crab and Shellfish</a></li>
                                      </ul>
                                  </li>
                                  <li class="sub-mega-menu sub-mega-menu-width-34">
                                      <div class="menu-banner-wrap">
                                          <a href="shop-product-right.html"><img src="assets/imgs/banner/banner-menu.png" alt="Nest" /></a>
                                          <div class="menu-banner-content">
                                              <h4>Hot deals</h4>
                                              <h3>
                                                  Don't miss<br />
                                                  Trending
                                              </h3>
                                              <div class="menu-banner-price">
                                                  <span class="new-price text-success">Save to 50%</span>
                                              </div>
                                              <div class="menu-banner-btn">
                                                  <a href="shop-product-right.html">Shop now</a>
                                              </div>
                                          </div>
                                          <div class="menu-banner-discount">
                                              <h3>
                                                  <span>25%</span>
                                                  off
                                              </h3>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="blog-category-grid.html">Blog <i class="fi-rs-angle-down"></i></a>
                              <ul class="sub-menu">
                                  <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                                  <li><a href="blog-category-list.html">Blog Category List</a></li>
                                  <li><a href="blog-category-big.html">Blog Category Big</a></li>
                                  <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                                  <li>
                                      <a href="#">Single Post <i class="fi-rs-angle-right"></i></a>
                                      <ul class="level-menu level-menu-modify">
                                          <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                          <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                          <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="#">Pages <i class="fi-rs-angle-down"></i></a>
                              <ul class="sub-menu">
                                  <li><a href="page-about.html">About Us</a></li>
                                  <li><a href="page-contact.html">Contact</a></li>
                                  <li><a href="page-account.html">My Account</a></li>
                                  <li><a href="page-login.html">Login</a></li>
                                  <li><a href="page-register.html">Register</a></li>
                                  <li><a href="page-forgot-password.html">Forgot password</a></li>
                                  <li><a href="page-reset-password.html">Reset password</a></li>
                                  <li><a href="page-purchase-guide.html">Purchase Guide</a></li>
                                  <li><a href="page-privacy-policy.html">Privacy Policy</a></li>
                                  <li><a href="page-terms.html">Terms of Service</a></li>
                                  <li><a href="page-404.html">404 Page</a></li>
                              </ul>
                          </li>
                          <li>
                              <a href="page-contact.html">Contact</a>
                          </li>
                      </ul>
                  </nav>
            </div>

            <div className="hotline d-none d-lg-flex">
              <img src="frontend/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
              <p>1900 - 888<span>24/7 Support Center</span></p>
            </div>
            <div className="header-action-icon-2 d-block d-lg-none">
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                {/* Add mobile menu here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
