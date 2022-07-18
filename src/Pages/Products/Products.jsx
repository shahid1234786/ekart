import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating'
import Footer from '../Footer/Footer';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    // console.log("data", filter);
    const [recommendedproduct, setrecommendedproduct] = useState([]);
    // console.log("recommendedproduct", recommendedproduct);

    const [smartsearch, setsmartsearch] = useState([]);
    // console.log("smartsearch", smartsearch);
    const [loading, setLoading] = useState(false);

    const [category, setcategory] = useState([]);
    const [selectedcategory, setselectedcategory] = useState('');


    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);

        } catch (error) {
            console.error(error);
        }
    };

    const getcategory = async () => {
        try {

            fetch('https://dummyjson.com/products/categories')
                .then(res => res.json())
                .then(data => setcategory(data));

        } catch (error) {
            console.log(error);
        }
    };
    const dummydata = () => {
        try {
            fetch(`https://dummyjson.com/products/category/furniture`)
                .then(res => res.json())
                .then(data => setrecommendedproduct(data.products));

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        getProducts();
        getcategory();
        dummydata();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-12 text-center mb-5 mt-2">
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

                <div className="col-md-12 mb-5" style={{ lineHeight: 2, }}>
                    <div className="row">
                        <div className="col-md-4 ">
                            <Skeleton height={450} width={300} />
                        </div>
                        <div className="col-md-4 ">
                            <Skeleton height={450} width={300} />
                        </div>
                        <div className="col-md-4 ">
                            <Skeleton height={450} width={300} />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const filterProduct = (item) => {
        const updatedList = data.filter((product) => product.category === item);
        setFilter(updatedList);
    }


    const ShowProducts = () => {

        return (
            <>
                <div className="text-center mt-4">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>

                <div className="container-fluid bg-trasparent  p-1" style={{ position: "relative" }}>
                    <div className="row row-cols-1 row-cols-xs-2  row-cols-lg-3 ">


                        {filter.map((product) => {
                            return (
                                <>

                                    <div className="col hp mt-4">
                                        <div className="card h-5 shadow-sm">
                                            <div className='text-center mt-1'>{product.title.substring(0, 30)}...</div>

                                            <span>
                                                <img alt={product.title} src={product.image} className="card-img-top" />
                                            </span>

                                            <div className="card-body">
                                                <div className="clearfix mb-3">
                                                    <span className="float-start badge bg-warning">{product.price}$</span>

                                                    <span className="float-end" style={{ marginTop: "-5px" }}>
                                                        <Rating
                                                            initialValue={product.rating.rate}
                                                            size={20}
                                                            label
                                                            transition
                                                            fillColor='orange'
                                                            emptyColor='gray'
                                                            className='foo'
                                                        /> </span>


                                                </div>
                                                <h5 className="card-title">
                                                    <a target="_blank" href="#">{product.description.substring(0, 80)}...</a>
                                                </h5>

                                                <div className="clearfix mb-1">

                                                    <span className="float-start"><a href="#"><i className="fas fa-info-circle"></i></a></span>

                                                    <span className="float-end">
                                                        <i className="far fa-heart"  ></i>

                                                    </span>
                                                </div>
                                                <div className="d-grid gap-2 my-3">
                                                    <Link to={`/product/productdetails/${product.id}`} className="btn btn-warning bold-btn">Buy Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>

                </div>


            </>
        )

    };
    const SmartSearch = () => {
        return (
            <>

                <div className='container'>
                    <div className='col'>
                        <div style={{ display: "flex", flexDirection: "row" }} className="mb-5 mt-4">
                            <Form.Select aria-label="Default select example" style={{ width: "300px" }}
                                onChange={(e) => {
                                    setselectedcategory(e.target.value)
                                }}
                                value={selectedcategory}
                            >
                                <option>Filter Category</option>
                                {category.map((item, key) => (
                                    <option key={key} value={item}>
                                        {item}
                                    </option>
                                ))}

                            </Form.Select>

                            <Button variant="success" className="mx-5" onClick={() => {

                                try {
                                    fetch(`https://dummyjson.com/products/category/${selectedcategory}`)
                                        .then(res => res.json())
                                        .then(data => setsmartsearch(data.products));

                                } catch (error) {
                                    console.log(error);
                                }

                            }} >Search</Button>
                        </div>


                        {smartsearch.length == 0 ? recommendedproduct.map((product) => {
                            return (
                                <>
                                    <div className="mt-3">
                                        <Card className='card2'>
                                            <span className='text-center mt-1'>{product.title}</span>
                                            <Card.Body>
                                                <div className='cardbody'>
                                                    <img src={product.thumbnail} alt={product.title} className="imageofcard" />
                                                    <div style={{ display: "flex", flexDirection: "column", }}>
                                                        <Card.Text className='productdetails'>
                                                            <Rating
                                                                initialValue={product.rating}
                                                                size={20}
                                                                label
                                                                transition
                                                                fillColor='orange'
                                                                emptyColor='gray'
                                                                className='foo'
                                                            /></Card.Text>
                                                        <Card.Text className='productdetails'>Stock Left = {product.stock}</Card.Text>

                                                    </div>
                                                </div>

                                                <Card.Text className='cardtext'>Brand = {product.brand}</Card.Text>
                                                <Card.Text className='cardtext'>Discounted Percentage = {product.discountPercentage} %</Card.Text>
                                                <Card.Text className='cardtext'>{product.description} ...</Card.Text>

                                                <Card.Footer className='cardfooter'>
                                                    <Card.Text style={{ marginTop: "10px" }} className="float-start badge bg-warning">{product.price} $  <i className="fa fa-shopping-cart ms-2"></i></Card.Text>
                                                    {/* <Card.Text style={{ marginTop: "10px" }}> Rs. {product.price}  <i className="fa fa-shopping-cart ms-2"></i></Card.Text> */}
                                                    <Card.Text style={{ marginTop: "5px" }}> <Link to={`/product/SmartSearchProduct/${product.id}`} className="btn btn-warning bold-btn">Buy Now</Link></Card.Text>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>
                            )
                        }) : smartsearch.map((product) => {
                            return (
                                <>
                                    <div className=" mt-3">
                                        <Card className='card2'>
                                            <span className='text-center mt-1'>{product.title}</span>
                                            <Card.Body>
                                                <div className='cardbody'>
                                                    <img src={product.thumbnail} alt={product.title} className="imageofcard" />
                                                    <div style={{ display: "flex", flexDirection: "column", }}>
                                                        <Card.Text className='productdetails'>
                                                            <Rating
                                                                initialValue={product.rating}
                                                                size={20}
                                                                label
                                                                transition
                                                                fillColor='orange'
                                                                emptyColor='gray'
                                                                className='foo'
                                                            /></Card.Text>
                                                        <Card.Text className='productdetails'>Stock Left = {product.stock}</Card.Text>

                                                    </div>
                                                </div>

                                                <Card.Text className='cardtext'>Brand = {product.brand}</Card.Text>
                                                <Card.Text className='cardtext'>Discounted Percentage = {product.discountPercentage} %</Card.Text>
                                                <Card.Text className='cardtext'>{product.description} ...</Card.Text>

                                                <Card.Footer className='cardfooter'>
                                                    <Card.Text style={{ marginTop: "10px" }}> Rs. {product.price}  <i className="fa fa-shopping-cart ms-2"></i></Card.Text>
                                                    <Card.Text style={{ marginTop: "5px" }}> <Link to={`/product/SmartSearchProduct/${product.id}`} className="btn btn-warning bold-btn">Buy Now</Link></Card.Text>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div >
            </>
        )
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">{loading ? <Loading /> : <ShowProducts />}</div>
                    <div className="col-md-3"><SmartSearch /></div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default Products