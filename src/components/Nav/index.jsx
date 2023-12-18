import { Link } from 'wouter';
import './Nav.css';

export default function Nav () {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <div className='nav-brand'>
                    <img className='nav-img' alt='DevTools' src='/tools.png' />
                    <h1 className='nav-title'>Dev Tools</h1>
                </div>
            </Link>
            <div className='nav-links'>
                <a href='https://github.com/gabimonutti' target='_blank' >
                    <img className='nav-img' alt='Github' src='/github.png' />
                </a>
                <a href='https://www.linkedin.com/in/gabriel-monutti/' target='_blank' >
                    <img className='nav-img' alt='LinkedIn' src='/linkedin.png' />
                </a>
            </div>
        </div>
    );
}