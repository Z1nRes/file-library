import React, {SyntheticEvent, useState} from 'react';
import {useLoadFileRequest} from "../request";

const FileUploadForm = ({loadedFile, setOpen, setLoaded, parentFolderId}: any) => {
    const [fileName, setFileName] = useState<string>('');
    const [file, setFile] = useState<File>();

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files) {
            setFile(e.target?.files[0])
            setFileName(e.target?.files[0]?.name);
        }
    };

    const {mutate} = useLoadFileRequest();

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();

        mutate({folderId: parentFolderId, file: file});
        setLoaded(true);

        setTimeout(() => {
            setFileName('');
            setOpen(false);
            setLoaded(false);
        }, 700)
    };

    return !loadedFile ? (
        <>
            <form onSubmit={submitHandler} encType="multipart/form-data">
                <input
                    type="file"
                    onChange={handleFileSelected}
                    className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4 file:rounded-md
                                file:border-0 file:text-sm file:font-semibold
                                file:bg-sky-800 file:text-white
                                hover:file:bg-sky-600 file:cursor-pointer"
                />
                <button
                    disabled={!file}
                    className="shadow disabled:bg-gray-500 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded mt-3"
                    type="submit">Отправить</button>
            </form>
        </>
    )
    :
    (
        <>
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl"><span
                className="text-red-600"
            >{fileName}</span> успешно создана!</h2>
        </>
    )
};

export default FileUploadForm;