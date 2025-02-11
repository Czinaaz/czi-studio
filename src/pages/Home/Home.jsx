import React from "react";
import PortfolioSlider from "components/PortfolioSlider/PortfolioSlider";
import styles from './Home.module.css'

const Home = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.headerText}>Homepage</h1>
            </div>
            <PortfolioSlider/>
            <div className={styles.container}>
                Home Page
            </div>
        
        
        </>

        )

}

export default Home;