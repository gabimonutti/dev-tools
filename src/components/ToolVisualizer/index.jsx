import './ToolVisualizer.css';

export default function ToolVisualizer ({ pageImg, logoImg, title, description, onClick }) {
    return (
        <div className="tool-visualizer-container" onClick={onClick}>
            <img className="tool-visualizer-pageimg" alt={title} src={pageImg} loading="lazy"/>
            <img className='tool-visualizer-logoimg' alt={title} src={logoImg} loading="lazy"/>
            <h1 className='tool-visualizer-title'>{title}</h1>
            {description && <p className='tool-visualizer-description'>{description}</p>}
        </div>
    );
}