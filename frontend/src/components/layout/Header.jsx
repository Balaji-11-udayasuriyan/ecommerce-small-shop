import React from 'react';

const Header = () => {
  return (
    <header className="header-area header-style-1 header-height-2">
      <div className="mobile-promotion">
        <span>
          Grand opening, <strong>up to 15%</strong> off all items. Only{' '}
          <strong>3 days</strong> left
        </span>
      </div>
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Order Tracking</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div id="news-flash" className="d-inline-block">
                  <ul>
                    <li>100% Secure delivery without contacting the courier</li>
                    <li>Supper Value Deals - Save more with coupons</li>
                    <li>Trendy 25silver jewelry, save up 35% off today</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    Need help? Call Us: <strong className="text-brand"> + 1800 900</strong>
                  </li>
                  <li>
                    <a className="language-dropdown-active" href="#">
                      English <i className="fi-rs-angle-small-down"></i>
                    </a>
                    <ul className="language-dropdown">
                      <li>
                        <a href="#">
                          <img src="" alt="" /> Français
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="#" alt="" /> Deutsch
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="#" alt="" /> Pусский
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="language-dropdown-active" href="#">
                      USD <i className="fi-rs-angle-small-down"></i>
                    </a>
                    <ul className="language-dropdown">
                      <li>
                        <a href="#">
                          <img src="#" alt="" /> INR
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="#" alt="" /> MBP
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="#" alt="" /> EU
                        </a>
                      </li>
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
                <img src="frontend\imgs\theme\logo.svg" alt="logo" />
              </a>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form method="GET" action="#">
                  <select className="select-active" name="category">
                    <option value="All">All Categories</option>
                    {/* Add categories here */}
                  </select>
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
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="#"
                      />
                      <span className="pro-count blue">3</span>
                    </a>
                    <a href="frontend\imgs\theme\icons\icon-compare.svg">
                      <span className="lable ml-0">Compare</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="#">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="#"
                      />
                      <span className="pro-count blue">6</span>
                    </a>
                    <a href="#">
                      <span className="lable">Wishlist</span>
                    </a>
                  </div>
                  {/* Add user info here */}
                  <div className="header-action-icon-2">
                    <a href="#">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="#"
                      />
                    </a>
                    <a href="#">
                      <span className="lable ml-0">Account</span>
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
                  <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
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
            <div className="hotline d-none d-lg-flex">
              <img src="#" alt="hotline" />
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