import { useState } from "react";
import { toolDetail } from "../../data";
import Tool from "../Tool";
import ModalTool from "../ModalTool";

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
                { detail.map(({ img, title, description, link }) => (
                    <Tool
                        className='toolgrid-item'
                        key={title}
                        img={img}
                        title={title}
                        onClick={() => handleToolClick({ img, title, description, link })}
                    />
                )) }

            </div>
            {modalOpen && (
                <ModalTool
                    img={selectedTool.img}
                    title={selectedTool.title}
                    description={selectedTool.description}
                    link={selectedTool.link}
                    closeModal={closeModal}
                />
            )}
        </>
    );
}