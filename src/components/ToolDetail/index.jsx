import { useRoute } from 'wouter';
import './ToolDetail.css';
import { toolDetail } from '../../data';
import Tool from '../Tool';
import Nav from '../Nav';
import Footer from '../Footer';
import './ToolDetail.css';
import ToolDetailGrid from '../ToolDetailGrid';

export default function ToolDetail () {
    const [match, params] = useRoute("/field/:tool");
    const tool = match ? params.tool : null;

    return (
        <div className='tooldetail-container'>
            <Nav />
            <div className='content-container'>
                <ToolDetailGrid tool={tool} />
            </div>
            <Footer />
        </div>
    );
}