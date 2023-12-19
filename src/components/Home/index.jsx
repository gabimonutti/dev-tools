import { useEffect, useState } from 'react';
import ButtonScrollTop from '../ButtonScrollTop';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';
import ToolGrid from '../ToolGrid';
import './Home.css';

export default function Home () {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowScrollButton(true);
          } else {
            setShowScrollButton(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className='home-container'>
            <Nav />
            <div className='content-container'>
                <Header 
                    title='Build your web faster than ever using this tools'
                    description='Discover user-friendly tools to make building your website a breeze. Speed up your development process with these handy resources for a smoother and more efficient experience'
                />
                <ToolGrid />
            </div>
            {showScrollButton && <ButtonScrollTop />}
            <Footer />
        </div>
    );
}