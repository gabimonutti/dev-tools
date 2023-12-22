import { useState } from "react";
import { toolDetail } from "../../data";
import Tool from "../Tool";
import ModalTool from "../ModalTool";
import ToolVisualizer from "../ToolVisualizer";

export default function ToolDetailGrid ({ tool }) {
    const detail = toolDetail[tool.toLowerCase().replace(/\s|%20/g, '_').replace(/&/g, 'and')];

    const [selectedTool, setSelectedTool] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleToolClick = (selectedTool) => {
        setSelectedTool(selectedTool);
        setModalOpen(true);
    };

    return (
        <>
            <div className='toolgrid-container'>
                { detail.map(({ img, img2, title, description, link }) => (
                    <ToolVisualizer
                        className='toolgrid-item'
                        key={title}
                        pageImg={img2}
                        logoImg={img}
                        title={title}
                        onClick={() => handleToolClick({ img, img2, title, description, link })}
                    />
                )) }

            </div>
            {modalOpen && (
                <ModalTool
                    img={selectedTool.img}
                    img2={selectedTool.img2}
                    title={selectedTool.title}
                    description={selectedTool.description}
                    link={selectedTool.link}
                    closeModal={closeModal}
                />
            )}
        </>
    );
}