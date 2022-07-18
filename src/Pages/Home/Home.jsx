import React from 'react'
import Products from '../Products/Products';
import { FcAbout, FcBusinessman, FcFullTrash } from "react-icons/fc";
import FabIcon from '../../component/FabIcon';
import "../../App.scss"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const DoSomeOperations = () => {
        console.log("clicked")
    }
    const actions = [
        { label: "About", icon: <FcAbout />, onClick: DoSomeOperations },
        { label: "Profile", icon: <FcBusinessman />, onClick: DoSomeOperations },
        { label: "Trash", icon: <FcFullTrash />, onClick: DoSomeOperations },
    ];
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-10 image"
                            src='https://source.unsplash.com/random/?computer'
                            alt="First slide"
                            // style={{ width: "100%", height: 550, backgroundSize:"contain" }}
                            
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src='https://source.unsplash.com/random/?filter'
                            alt="Second slide"
                            // style={{ width: "100%", height: 550, }}
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src='https://source.unsplash.com/random/?desk'
                            alt="Third slide"
                            // style={{ width: "100%", height: 550, }}
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Products />
            <div>
                <FabIcon actions={actions} />
            </div>

         
        </>
    )
}

export default Home
