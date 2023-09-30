import React, { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Note = (props) => {
    const [load, setload] = useState(false);

    
    const downloadNote=()=>{
        //props.downloadPDF(props.id);
        
        const capture = document.querySelector('.note');
        setload(true);
        html2canvas(capture, {scale: 3}).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const CompWidth = doc.internal.pageSize.getWidth();
            const CompHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, CompWidth, CompHeight);
            setload(false);
            doc.save('note');
        });
    }

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>

                <button className="btn" onClick={deleteNote}>
                    <BsTrashFill className="deleteIcon" />
                </button>

                <button className="btn" onClick={downloadNote}>
                    <AiOutlineDownload className="deleteIcon" />
                    {
                        load ? (
                            <span>Downloading</span>
                        ) : (
                            <span></span>
                        )
                    }
                </button>

            </div>
        </>
    )
}

export default Note;