import './ButtonScrollTop.css';

export default function ButtonScrollTop () {
    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    return (
        <button className="btn-top" onClick={topFunction}>
            <img className='btn-img invert' src='/arrowup.png' alt='Button Top' />
        </button>
    );
}