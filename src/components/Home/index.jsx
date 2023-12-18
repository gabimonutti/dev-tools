import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';
import ToolGrid from '../ToolGrid';
import './Home.css';

export default function Home () {
    return (
        <div className='home-container'>
            <Nav />
            <div className='content-container'>
                <Header />
                <ToolGrid />
            </div>
            <Footer />
        </div>
    );
}