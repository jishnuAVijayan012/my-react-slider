import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css'; // Import the CSS file

const ImageSlider = ({ images }) => {
    const [imgId, setImgId] = useState(1);
    const videoRefs = useRef([]);

    const isVideo = (url) => {
        return url?.match(/\.(mp4|webm|ogg|mov|avi|wmv)$/i);
    };

    const slideImage = () => {
        const displayWidth = document.querySelector('.img-showcase img:first-child, .img-showcase video:first-child')?.clientWidth || 0;
        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    };

    // Pause all videos except the current one
    const handleVideoPlayback = () => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index + 1 === imgId) {
                    // Current video - you can choose to auto-play or let user control
                    // video.play().catch(e => console.log('Auto-play prevented:', e));
                } else {
                    // Other videos - pause and reset
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    };

    useEffect(() => {
        slideImage();
        handleVideoPlayback();
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
                            {images.map((media, index) => (
                                isVideo(media) ? (
                                    <video
                                        key={index}
                                        ref={el => videoRefs.current[index] = el}
                                        controls
                                        muted
                                        preload="metadata"
                                        style={{ width: '100%', height: 'auto' }}
                                    >
                                        <source src={media} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img
                                        key={index}
                                        src={media}
                                        alt={`Product ${index + 1}`}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                    <div className="img-select">
                        {images.map((media, index) => (
                            <div className="img-item" key={index}>
                                <a
                                    href="#"
                                    data-id={index + 1}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setImgId(index + 1);
                                    }}
                                >
                                    {isVideo(media) ? (
                                        <div className="video-thumbnail">
                                            <video
                                                muted
                                                preload="metadata"
                                                style={{ width: '100%', height: 'auto' }}
                                            >
                                                <source src={media} type="video/mp4" />
                                            </video>
                                            <div className="play-icon">▶</div>
                                        </div>
                                    ) : (
                                        <img src={media} alt={`Product Thumbnail ${index + 1}`} />
                                    )}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;