import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';

import '../css/main.css';

import studio1 from '../images/studio1.png';


class Home extends Component {
    render() {
         return(
             <div id='gray'> 
                 <article className='pa3 pa5-ns'>
                     <img className='o-50' src={studio1} alt='studio1' />
                 </article>
             </div>
         );
    }
}

export default Home;
