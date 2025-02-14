import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PortfolioSlider.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import CziCinema from '../../images/portfolioIMG/cinema.png';
import BookStore from '../../images/portfolioIMG/bookstore.png';
import CziSearch from '../../images/portfolioIMG/search.png';
import WebStudio from '../../images/portfolioIMG/webstudio.png'; 

const PortfolioSlider = () => {
    const portfolioItems = [
        {
        id: 1,
        image: CziCinema,
        title: 'Project 1',
        description: 'Description for Project 1',
        },
        {
        id: 2,
        image: BookStore,
        title: 'Project 2',
        description: 'Description for Project 2',
        },
        {
        id: 3,
        image: CziSearch,
        title: 'Project 3',
        description: 'Description for Project 3',
        },
        {
        id: 4,
        image: WebStudio,
        title: 'Project 4',
        description: 'Description for Project 4',
        },
    ];

    const PrevArrow = ({ onClick }) => (
        <button className={styles.prevArrow} onClick={onClick}>
            <FaArrowLeft/>
        </button>
    );
    
    const NextArrow = ({ onClick }) => (
        <button className={styles.nextArrow} onClick={onClick}>
            <FaArrowRight/>
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className={styles.portfolioSlider}>
        <Slider {...settings}>
            {portfolioItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
                <div className={styles.portfolioContent}>
                    <div className={styles.portfolioImage}>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className={styles.portfolioText}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
            ))}
        </Slider>
        
        </div>
    );
};

export default PortfolioSlider;