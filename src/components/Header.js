import React from 'react'

const Header = () => {
    const headingStyle={
        color: "white",
        fontSize: "60px",
    };
    const pStyle={
        fontSize: '20px',
    };
    const aboutMe={
        color: 'hsl(130, 18%, 93%)',
        fontSize: "20px",
    };
    return (
        <header className='header'>
            <p3 style={pStyle}>Hi, my name is</p3>
            <h1 style={headingStyle}>Deep Mistry</h1>
            <h2 style={aboutMe}>I am a student at University of Maryland, Baltimore County pursuing Computer Science.</h2>
        </header>
    )
}

export default Header
