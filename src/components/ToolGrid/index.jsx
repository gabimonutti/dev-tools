import { Link } from 'wouter';
import Tool from '../Tool';
import './ToolGrid.css';
import { toolFields } from '../../data';

export default function ToolGrid () {
    return (
        <div className='toolgrid-container'>
            { toolFields.map(({ img, title }) => (
                <Link to={`/field/${title}`}>
                    <Tool
                        className='toolgrid-item'
                        key={title}
                        img={img}
                        title={title}
                    />
                </Link>
            )) }
        </div>
    );
}