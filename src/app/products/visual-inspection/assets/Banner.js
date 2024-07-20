import React from 'react';
import styles from './TypingEffect.module.css';

const Banner = () => {

    
    return (
        <>
        <div className='p-3 w-[80%] mx-auto'>

            <h3 className='font-bold text-[2rem] m-2 text-center'>Revolutionizing Quality Control with Cutting-Edge Technology</h3>

        <div className={styles.banner}>
            <img
                decoding="async"
                src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-22-1-1-scaled.jpg"
                alt="Banner"
            />
            <div className={styles.bannerDesc}>
                <div className={styles.bannerContent}>
                    <p className='color-[#eee]'>
                        At Vision Intelligence Network, we are committed to developing
                        software that transforms quality control inspections on
                        manufacturing machines. Our innovative solutions prioritize safety
                        while providing preventive measures against potential breaches. We
                        are dedicated to delivering exceptional quality control, safety
                        automation, and machine inspection services to our clients.
                    </p>

               

                </div>
            </div>
            </div>
        </div>



</>
        

    );
};

export default Banner;
