import React, { useRef } from "react";

const FeatureCategory = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 300; // Adjust scroll amount as needed
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 300;
        }
    };

    const categories = [
        { img: "cat-1.png", title: "Cake & Milk", items: 26 },
        { img: "cat-2.png", title: "Organic Kiwi", items: 28 },
        { img: "cat-3.png", title: "Peach", items: 14 },
        { img: "cat-4.png", title: "Red Apple", items: 54 },
        { img: "cat-5.png", title: "Snack", items: 56 },
        { img: "cat-6.png", title: "Vegetables", items: 72 },
        { img: "cat-7.png", title: "Strawberry", items: 36 },
        { img: "cat-8.png", title: "Black Plum", items: 123 },
        { img: "cat-9.png", title: "Custard Apple", items: 34 },
        { img: "cat-10.png", title: "Coffee & Tea", items: 89 },
        { img: "cat-11.png", title: "Headphone", items: 87 },
        { img: "cat-12.png", title: "Headphone", items: 87 },
        { img: "cat-13.png", title: "Headphone", items: 87 },
        { img: "cat-14.png", title: "Headphone", items: 87 },
        { img: "cat-1.png", title: "Headphone", items: 87 },
        { img: "cat-2.png", title: "Headphone", items: 87 },
        { img: "cat-5.png", title: "Headphone", items: 87 },
    ];

    return (
        <section className="popular-categories section-padding">
            <div className="container wow animate__animated animate__fadeIn">
                <div className="section-title">
                    <div className="title">
                        <h3>Featured Categories</h3>
                    </div>
                    <div
                        className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                        id="carausel-10-columns-arrows"
                    >
                        <button
                            onClick={scrollLeft}
                            className="btn btn-success rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: "50px", height: "50px" }}
                            aria-label="Scroll Left"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={scrollRight}
                            className="btn btn-success rounded-circle d-flex justify-content-center align-items-center ms-2"
                            style={{ width: "50px", height: "50px" }}
                            aria-label="Scroll Right"
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                <div className="carausel-10-columns-cover position-relative">
                    <div
                        className="carausel-10-columns d-flex"
                        ref={carouselRef}
                        style={{
                            overflowX: "hidden",
                            scrollBehavior: "smooth",
                            whiteSpace: "nowrap",
                            maxWidth: "calc(350px * 10 + 200px)", // Ensures only 10 items are visible
                        }}
                    >
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`card-2 bg-${index + 1} wow animate__animated animate__fadeInUp`}
                                data-wow-delay={`${index * 0.1}s`}
                                style={{
                                    display: "inline-block",
                                    width: "350px", // Card width adjusted
                                    marginRight: "20px",
                                }}
                            >
                                <figure className="img-hover-scale overflow-hidden">
                                    <a href="shop-grid-right.html">
                                        <img
                                            src={`frontend/imgs/shop/${category.img}`}
                                            alt={category.title}
                                            className="category-image"
                                        />
                                    </a>
                                </figure>
                                <h6>
                                    <a href="shop-grid-right.html">
                                        {category.title}
                                    </a>
                                </h6>
                                <span>{category.items} items</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCategory;
