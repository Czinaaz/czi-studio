import React from "react";
import PortfolioSlider from "components/PortfolioSlider/PortfolioSlider";
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.headerText}>
                    Projects
                </h1>
            </div>
            <PortfolioSlider/>
            <div className={styles.container}>
                Projects Page
            </div>
        
        
        </>

        )

}

export default Projects;