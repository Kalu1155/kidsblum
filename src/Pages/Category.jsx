import React from 'react'
import { useEffect, useState } from "react"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'


const Category = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const ages = queryParams.get("ages");

    const url = "https://jtb.ecmserver.com.ng/api/kids-blum";
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                const extractAge = (tag) => parseInt(tag.split("-")[0]);

                const productData = data.products
                    .filter((product) => product.yeartags.includes(ages))
                    .sort((a, b) => {
                        const aAge = Math.min(...a.yeartags.map(extractAge));
                        const bAge = Math.min(...b.yeartags.map(extractAge));
                        return aAge - bAge;
                    });

                const formattedProducts = productData.map((product) => ({
                    id: product.id,
                    productname: product.productname,
                    currentprice: product.currentprice,
                    thumbnail: product.thumbnail,
                }));

                setProducts(formattedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [ages]);

    return (
        <>
            <Navbar />
            <div
                className="breadcumb-wrapper">
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title" >Category by Ages ({ages})</h1>
                        <ul className="breadcumb-menu">
                            <li  >
                                <a href="/index">Home</a>
                            </li>
                            <li>Category</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="mt-50 space-extra-bottom" id="blog-sec">
                <div className="container">
                    <div className="row justify-content-center flex-row-reverse">
                        <div className="col-xl-9 col-lg-8">
                            <div className="ot-sort-bar">
                                <div
                                    className="row justify-content-md-between justify-content-center align-items-center"
                                >
                                    <div className="col-auto">
                                        <p className="woocommerce-result-count">
                                            Showing 1-3 Of 34 Results
                                        </p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="sort-bar-ordering-wrap">
                                            <form className="woocommerce-ordering" method="get">
                                                <select
                                                    name="orderby"
                                                    className="orderby"
                                                    aria-label="Shop order"
                                                >
                                                    <option value="menu_order" selected="selected">
                                                        Default Sorting
                                                    </option>
                                                    <option value="popularity">Sort by popularity</option>
                                                    <option value="rating">Sort by average rating</option>
                                                    <option value="date">Sort by latest</option>
                                                    <option value="price">
                                                        Sort by price: low to high
                                                    </option>
                                                    <option value="price-desc">
                                                        Sort by price: high to low
                                                    </option>
                                                </select>
                                            </form>
                                            <div className="nav" role="tablist">
                                                <a
                                                    href="#"
                                                    id="tab-shop-list"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#tab-list"
                                                    role="tab"
                                                    aria-controls="tab-list"
                                                    aria-selected="false"
                                                ><i className="fa-solid fa-list"></i
                                                ></a>
                                                <a
                                                    className="active"
                                                    href="#"
                                                    id="tab-shop-grid"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#tab-grid"
                                                    role="tab"
                                                    aria-controls="tab-grid"
                                                    aria-selected="true"
                                                ><i className="far fa-grid-2"></i
                                                ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade active show"
                                    id="tab-grid"
                                    role="tabpanel"
                                    aria-labelledby="tab-shop-grid"
                                >
                                    <div className="row gy-30">
                                        {products.map((product) => (

                                            <div className="col-xxl-4 col-md-5 my-2">
                                                <div
                                                    className="ot-product product-grid bg-white"
                                                    key={product.id}>
                                                    <div className="product-img">
                                                        <img
                                                            src={product.thumbnail}
                                                            alt="Product Image"
                                                        />
                                                        <div className="actions">
                                                            <a href="/wishlist" className="icon-btn"
                                                            ><i className="far fa-heart"></i
                                                            ></a>
                                                            <button className="icon-btn">
                                                                <i className="fa-light fa-arrows-cross"></i>
                                                            </button>

                                                            <a href={`/shopdetails/${product.id}`} className="icon-btn popup-content"
                                                            ><i className="far fa-eye"></i
                                                            ></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h3 className="box-title">
                                                            <a href={`/shopdetails/${product.id}`}
                                                            >{product.productname}</a
                                                            >
                                                        </h3>
                                                        <span className="price">{product.currentprice}</span>
                                                        <div className="woocommerce-product-rating">
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span
                                                                >Rated <strong className="rating">5.00</strong> out of
                                                                    5 based on <span className="rating">1</span> customer
                                                                    rating</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-hover-content">
                                                        <h3 className="box-title">
                                                            <a href={`/shopdetails/${product.id}`}
                                                            >{product.productname}</a
                                                            >
                                                        </h3>
                                                        <span className="price">{product.currentprice}</span>
                                                        <div className="woocommerce-product-rating">
                                                            <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Rated 5.00 out of 5"
                                                            >
                                                                <span
                                                                >Rated <strong className="rating">5.00</strong> out of
                                                                    5 based on <span className="rating">1</span> customer
                                                                    rating</span
                                                                >
                                                            </div>
                                                        </div>
                                                        <a className="ot-btn" href="/cart"
                                                        ><i className="fa-light fa-basket-shopping me-1"></i> Add
                                                            To Cart</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Category