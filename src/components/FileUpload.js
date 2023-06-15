import { useState } from "react";
import HttpService from "../services/httpService";
import Preview from "./Preview";
//  
export default function FileUpload() {
    // 
    const [htmlData, setHtmlData] = useState(null);
    // 
    const fileHandle = async (event) => {
        const formData = new FormData();
        formData.append("myFile", event.target.files[0]);
        setTimeout(() => event.target.value = null, 0);
        try {
            const response = await HttpService.post("file/upload", formData);
            setHtmlData(response.data);
        } catch (error) {
            setHtmlData(null);
            alert(error?.message);
        }
    }
    // 
    // 
    return (
        <div>
            {/*  */}
            <div className="upload-container">
                <div className="upload-file-container">
                    <div className="upload-file-button">
                        <input type='file' accept=".docx" onChange={fileHandle} />
                    </div>
                    <div className="upload-file-hint">Upload only .docx format files only</div>
                </div>
            </div>
            {/*  */}
            <Preview htmlData={htmlData} setHtmlData={setHtmlData} />
            {/*  */}
        </div>
    );
}