import './ModalTool.css';

export default function ModalTool ({ img, title, description, link, closeModal }) {
    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };
    
    return (
        <div>
            <div className="modal" onClick={handleOutsideClick}>
                <div className="modal-content">
                    <div className='modal-img-container'>
                        <img className='modal-img' src={img} alt={title} />
                    </div>
                    <div className='modal-info'>
                        <h1 className='modal-title'>{title}</h1> 
                        <a href={link} target='_blank'>
                            <button className='modal-btn'>VISIT THE WEB</button>
                        </a>
                        <p className='modal-description'>{description}</p>
                    </div>
                    <span className="close" onClick={closeModal}>&times;</span>
                </div>
            </div>
        </div>
    );
}