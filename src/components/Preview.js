import { useState } from "react";
import HttpService from "../services/httpService";
import { saveAs } from 'file-saver';

export default function Preview(props) {
    // 
    const [mode, setMode] = useState("html");
    const [downloadLoader, setDownloadLoader] = useState(false);
    // 
    const downloadAsPdf = async () => {
        try {
            setDownloadLoader(true);
            const { data } = await HttpService.post("file/download", { htmlData: props.htmlData }, { responseType: 'arraybuffer' });
            const blob = new Blob([data], { type: 'application/pdf' })
            saveAs(blob, "docx2pdf.pdf");
            setDownloadLoader(false);
        } catch (error) {
            alert("Download Failed");
            setDownloadLoader(false);
        }
    }
    // 
    if (props.htmlData === null) return <></>;
    // 
    return (
        <div className="preview-container">
            {/*  */}
            <div className="preview-title">Preview Document</div>
            {/*  */}
            <div className="preview-option">
                <div>
                    <button onClick={() => { setMode('raw') }} className={`${mode === 'raw' ? "active" : ""}`}>Raw Text</button>
                    <button onClick={() => { setMode('html') }} className={`ml-5 ${mode === 'html' ? "active" : ""}`}>Html</button>
                </div>
                <div>
                    <button onClick={downloadAsPdf} disabled={downloadLoader}>{downloadLoader ? 'Downloading...' : 'Download as PDF'}</button>
                    <button className="ml-5 btn-black" onClick={() => { props.setHtmlData(null) }}>Close</button>
                </div>
            </div>
            {/*  */}
            {mode === 'raw' && <div className="preview-content">{props.htmlData}</div>}
            {/*  */}
            {mode === 'html' && <div className="preview-content" dangerouslySetInnerHTML={{ __html: props.htmlData }} />}
            {/*  */}
            <div>
                <center><button className="btn-black" onClick={() => { props.setHtmlData(null) }}>Close</button></center>
            </div>
        </div>
    );
}