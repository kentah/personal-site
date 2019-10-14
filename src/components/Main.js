import React from 'react'; 

import '../css/main.css';

import studio1 from '../images/studio1.png';


const Main = () => {
    return(
        <div id='gray'> 
            <article className='pa3 pa5-ns'>
                <img className='o-50' src={studio1} alt='studio1' />
            </article>
        </div>
    );
}

export default Main;
