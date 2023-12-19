import './Header.css';

export default function Header ({ title, description }) {
    return (
        <div className="header-container">
            <h1 className="header-title">{title}</h1>
            {description && <p className="header-description">{description}</p>}
        </div>
    );
}