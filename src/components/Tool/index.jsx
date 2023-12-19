import './Tool.css';

export default function Tool ({ img, title, description, onClick }) {
    return (
        <div className='tool-container' onClick={onClick}>
            <img className='tool-img' alt={title} src={img} />
            <h1 className='tool-title'>{title}</h1>
            {description && <p className='tool-description'>{description}</p>}
        </div>
    );
}