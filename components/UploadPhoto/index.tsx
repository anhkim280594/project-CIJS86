import React, { ReactElement } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

export default function SamplePhotosUploader(props: any): ReactElement {
    const getUploadParams = async ({ file, meta: { name, type } }) => {
        const data = await axios.post(`https://api-gateway.prod.rootopia.vn/forms/presigned-url`, {
            filename: name,
            filetype: type
        }
        ).then(res => res.data);
        const { fields, url, fileUrl } = data;
        props.onDataChange(fileUrl)
        props.setFiles([file])
        return { fields, meta: { url }, url: url }
    }

    
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }
    const RemoveImg = () => {
        props.onDataChange(null)
        props.setFiles([])
    }
    if (props.initialFiles?.length) {
        return (
            <div style={{position: 'relative'}}>
                <Dropzone
                    onSubmit={handleSubmit}
                    initialFiles={props.initialFiles || []}
                    accept="image/*"
                    canRemove={false}
                    inputContent="Nhấn vào đây và tải ảnh"
                    styles={{preview: {width: '100%', position: 'absolute'}, submitButton: {display: 'none'}, inputLabelWithFiles : {display: 'none'}, dropzone: {padding : '0 30px', margin: '8px 0', overflow: 'hidden'}}}
                />
                <span onClick={RemoveImg} style={{position: 'absolute',zIndex: '222',top: '33%',left: '85%',padding: '12px',cursor: 'pointer',}}>✕</span>
            </div>
        )
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*"
            inputContent="Nhấn vào đây và tải ảnh"
            styles={{preview: {width: '100%', position: 'absolute'}, submitButton: {display: 'none'}, inputLabelWithFiles : {display: 'none'}, dropzone: {padding : '0 30px', margin: '8px 0', overflow: 'hidden'}}}
        />
    )
}
