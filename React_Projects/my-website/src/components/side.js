import React from "react";

const Side = () => {
    return (
        <div className='side-container'>
            <h1 style={{fontFamily: 'cursive'}}>Cool Links</h1>
            <div className='link-container' style={{display: 'flex', flexDirection: 'column'}}>
                <span className='featured-links' style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                    <h4>Featured</h4>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Free Money</a>
                </span>
                <span className='interesting-links' style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                    <h4>Helpful</h4>
                    <a href='https://www.eatthismuch.com/' target='_blank'>Automatic Meal Planner</a>
                    <a href='https://agoodmovietowatch.com/' target='_blank'>Find a movie to watch</a>
                    <a href='https://www.thisiswhyimbroke.com/'>Buy Unique Products</a>
                    <a href='https://www.boredbutton.com/' target='_blank'>Bored?</a>
                </span>
                <span className='funny-links' style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                    <h4>Funny and Fascinating</h4>
                    <a href='https://www.cleverbot.com/' target='_blank'> Cleverbot</a>
                    <a href='http://zoomquilt.org/' target='_blank'>Zoom Quilt</a>
                    <a href='https://pointerpointer.com/' target='_blank'> Pointer Pointer</a>
                    <a href='http://www.fallingfalling.com/' target='_blank'>Falling Falling</a>
                    <a href='http://eelslap.com/' target='_blank'>Eel Slap</a>
                </span>
                
                
                
            </div>
        </div>
    );
}

export default Side;