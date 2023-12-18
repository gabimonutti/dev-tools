import { toolDetail } from "../../data";
import Tool from "../Tool";

export default function ToolDetailGrid ({ tool }) {
    const detail = toolDetail[tool.toLowerCase().replace(/\s|%20/g, '_').replace(/&/g, 'and')];

    return (
        <div className='toolgrid-container'>
            { detail.map(({ img, title, description }) => (
                <Tool
                    className='toolgrid-item'
                    key={title}
                    img={img}
                    title={title}
                    description={description}
                />
            )) }
        </div>
    );
}