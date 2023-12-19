import { useRoute } from 'wouter';
import './ToolDetail.css';
import Nav from '../Nav';
import Footer from '../Footer';
import './ToolDetail.css';
import ToolDetailGrid from '../ToolDetailGrid';
import Header from '../Header';
import { useEffect, useState } from 'react';
import ButtonScrollTop from '../ButtonScrollTop';

export default function ToolDetail () {
    const [match, params] = useRoute("/field/:tool");
    const tool = match ? params.tool : null;

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
        <div className='tooldetail-container'>
            <Nav />
            <Header 
                title={tool.replace(/%20/g, ' ')}
                description='Find all the tools you need and use them to customize your website'
            />
            <div className='content-container'>
                <ToolDetailGrid tool={tool} />
            </div>
            {showScrollButton && <ButtonScrollTop />}
            <Footer />
        </div>
    );
}