import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Carousel from 'react-bootstrap/Carousel';
import { Rating } from 'react-simple-star-rating'
import Footer from "../Footer/Footer"

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    // console.log("data",product);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [counter, setCounter] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                fetch(`https://dummyjson.com/products/${id}`)
                    .then(res => res.json())
                    .then(data =>
                       { setProduct(data)
                        setImages(data.images)
                    }
                       
                    );

            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        getProduct();

    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-12 text-center mb-3 mt-2">
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button></div>

                <div className="col-md-5">
                    <Skeleton height={450} />
                </div>

                <div className="col-md-5" style={{ lineHeight: 2.5 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={30} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} width={150} />
                    <Skeleton height={40} />
                    <Skeleton height={180} />
                </div>

            </>
        )
    }

    const SmartSearchProduct = () => {
        return (
            <>

                <div className="container py-5">
                    <div className="row ">

                        <div className="col-md-5">
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 h-10"
                                        src={images[0]}
                                        alt="First slide"
                                        style={{ width: "100%", height: 500, }}
                                    />
                                    <Carousel.Caption>
                                        <h3>{product.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={images[1]}
                                        alt="Second slide"
                                        style={{ width: "100%", height: 500, }}
                                    />

                                    <Carousel.Caption>
                                        <h3>{product.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={images[2]}
                                        alt="Third slide"
                                        style={{ width: "100%", height: 500, }}
                                    />

                                    <Carousel.Caption>
                                        <h3>{product.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                        </div>
                        <div className="col-md-7">
                            <div className=" px-6">
                                <h4 className="text-uppercase text-black-20 mt-2">{product.category}</h4>
                                <hr />
                                <h1 className="lead fw-bolder">{product.title}</h1>
                                <p className="lead">
                                    <Rating
                                        initialValue={product.rating}
                                        size={20}
                                        label
                                        transition
                                        fillColor='orange'
                                        emptyColor='gray'
                                        className='foo'
                                    />
                                </p>
                                <p className="lead">
                                    Item Left {product.stock} <i className="fa fa-shopping-cart"></i>
                                </p>
                                <h3 className="display-5 fw-bold my-4" style={{ color: "#5089FD" }}>Rs. {product.price}</h3>
                                <button className="btn btn-outline-dark px-3 py-2 mx-2" onClick={() => { setCounter(counter + 1) }}> <i className="fa fa-plus"></i></button>
                                <button className="btn btn-outline-dark px-3 py-2">{counter}</button>
                                <button className="btn btn-outline-dark px-3 py-2 mx-2" onClick={() => { setCounter(counter - 1) }}> <i className="fa fa-minus"></i></button>
                                <button className="btn btn-outline-dark ms-2 px-3 py-2" > <i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                <Link to="#" className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</Link>
                                <hr />
                                <p className="lead mt-3">
                                    Rating {product.description}
                                </p>

                            </div>
                        </div>

                    </div>


                    <div class="py-4" style={{ width: "100%" }}>
                        <div class="card text-center">
                            <div class="card-header">
                                <ul class="nav nav-tabs card-header-tabs" id="myTab">
                                    <li class="nav-item">
                                        <a href="#Product" class="nav-link active" data-bs-toggle="tab">Product</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#Review" class="nav-link" data-bs-toggle="tab">Review</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#Comments" class="nav-link" data-bs-toggle="tab">Comments</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="Product">
                                        <h5 class="card-title">Product tab content</h5>
                                        <p class="card-text">Here is some example text to make up the tab's content. Replace it with your own text anytime.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                    <div class="tab-pane fade" id="Review">
                                        <h5 class="card-title">Review tab content</h5>
                                        <p class="card-text">Here is some example text to make up the tab's content. Replace it with your own text anytime.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                    <div class="tab-pane fade" id="Comments">
                                        <h5 class="card-title">Comments tab content</h5>
                                        <p class="card-text">Here is some example text to make up the tab's content. Replace it with your own text anytime.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <div className="container ">
                <div className="row ">
                    {loading ? <Loading /> : <SmartSearchProduct />}
                    {/* <SmartSearchProduct /> */}
                </div>


            </div>

            <Footer />



        </>
    )
}

export default Product
