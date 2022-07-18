import React from 'react'
import "../../App.scss"

function Footer() {
    return (
        <div className='FooterContainer'>

            <div style={{ width:"100%", }}>
                <footer
                    className="text-center text-lg-start text-dark"
                >
                    <div className='FooterSection'>
                        <section
                            className="d-flex justify-content-between p-3 text-white"
                        >
                            <div className="me-5">
                                <span>Get connected with us on social networks:</span>
                            </div>

                            <div>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </section>
                    </div>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Company name</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "130px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <h6>Assam Technologies</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias !
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "80px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        Domestic RO
                                    </p>
                                    <p>
                                        Commercial RO
                                    </p>
                                    <p>
                                        Bio SURE
                                    </p>
                                    <p>
                                        Air Purifier
                                    </p>
                                  
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "110px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        Your Account
                                    </p>
                                    <p>
                                        Become an Affiliate
                                    </p>
                                    <p>
                                        Shipping Rates
                                    </p>
                                    <p>
                                        Help
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "80px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p><i className="fas fa-home "></i> ASSAM, IN 781038, IN</p>
                                    <p><i className="fas fa-envelope "></i> AssamTechnologies@gmail.com</p>
                                    <p><i className="fas fa-phone "></i> + 91 7002263884</p>
                                    <p><i className="fas fa-print "></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-2 "
                    // style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
                    >
                        © 2020 Copyright: MyMart.com
                    </div>
                </footer>
            </div >
        </div >
    )
}

export default Footer