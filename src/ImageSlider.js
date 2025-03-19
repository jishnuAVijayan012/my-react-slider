import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import the CSS file

const ImageSlider = ({ images }) => {
    const [imgId, setImgId] = useState(1);


    const slideImage = () => {
        const displayWidth = document.querySelector('.img-showcase img:first-child')?.clientWidth || 0;
        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    };

    useEffect(() => {
        slideImage();
    }, [imgId]);

    useEffect(() => {
        const handleResize = () => slideImage();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="card-wrapper">
            <div className="card">
                {/* Card Left */}
                <div className="product-imgs">
                    <div className="img-display">
                        <div className="img-showcase">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Product ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                    <div className="img-select">
                        {images.map((image, index) => (
                            <div className="img-item" key={index}>
                                <a
                                    href="#"
                                    data-id={index + 1}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setImgId(index + 1);
                                    }}
                                >
                                    <img src={image} alt={`Product Thumbnail ${index + 1}`} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card Right */}
                {/* <div className="product-content">
                    <h2 className="product-title">{product?.name || "Product Name"}</h2>
                </div> */}
            </div>
        </div>
    );
};

export default ImageSlider;
