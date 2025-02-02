import React from 'react'

const Hamburger = () => {
    return (
        <>
        
        <div className='hamburger'>
            <div className='burger burger1' />
            <div className='burger burger2' />
            <div className='burger burger3' />
        </div>

        <style jsx>{`
            .hamburger {
                width: 2rem;
                height: 2rem;
                display: flex;
                justify-content: space-around;
                flex-flow: column nowrap;
                justify-content: space-between;  
                z-index: 10;
            }

            .burger {
                width: 2rem;
                height: 0.25rem;
                burger-radius: 10px;
                background-color: white;
                transform-origin: 1px;
                transition: all 0.3s linear;
            }
        `}</style>
        </>
    );
};

export default Hamburger;