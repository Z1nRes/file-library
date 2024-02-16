import React, {useState} from 'react';
import {useDeleteFileRequest, useDeleteFolderRequest} from "../request";
import {IPropsAgreeDelete} from "../models/props";

const AgreeDelete: React.FC<IPropsAgreeDelete> = ({folder }) => {
    const {mutate: deleteFolder} = useDeleteFolderRequest();
    const {mutate: deleteFile} = useDeleteFileRequest();

    const [deleted, setDeleted] = useState<boolean>(false);

    return !deleted ? (
        <>
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">Удалить <span
                    className="text-red-600"
                >{folder.type === "folder" ? folder.name : folder.file?.name}</span>?</h2>
                    <button
                        className="border border-pink-800 bg-red-400 rounded py-1 px-3 text-white"
                        onClick={() => {
                            folder.type === "folder" ? deleteFolder(folder.id) : deleteFile(folder.id);
                            console.log(folder.id);
                            setDeleted(true);
                        }}
                    >
                        Удалить
                    </button>
        </>
    )
    :
    (
        <>
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl"><span
                    className="text-red-600"
                >{folder.type === "folder" ? folder.name : folder.file?.name}</span> успешно удален!</h2>
        </>
    );
};

export default AgreeDelete;