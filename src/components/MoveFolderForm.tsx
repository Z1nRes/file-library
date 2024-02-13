import React, {useState} from 'react';
import {useEditFolderRequest, useGetFolderRequest} from "../request";

const MoveFolderForm = ({folder, setOpen, parentId, prevFolderId}: any) => {
    const [moveToId, setMoveToId] = useState<string>();
    const {data} = useGetFolderRequest(parentId);

    const {mutate: moveFolder, isSuccess} = useEditFolderRequest();

    const submitHandler = (parentFolderId: string) => {
        moveFolder({parentId: parentFolderId, name: folder.name, id: folder.id})
        isSuccess ? setOpen(false) : setOpen(true);
    }

    return (
        <>
            <h2 className="text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl mb-3">Переместить папку - {folder.name}?</h2>
            <div className="border-4 border-blue-700 rounded-3xl py-3 px-5 mb-3 flex flex-col">
                {
                    data?.children?.map((child) => {
                        if (data?.children === ([]) || (data?.children?.length !== undefined && data?.children?.length <= 1)) {
                            return <h2 className="text-center text-4xl font-bold leading-none tracking-tight text-gray-500 md:text-2xl lg:text-2xl">Нет папок для перемещения</h2>
                        } else if (child.id !== folder.id && child.type === "folder") {
                            return (
                                <button
                                    className={`cursor-pointer hover:text-blue-800 border-b-2 mb-2 ${moveToId === child.id ? "text-blue-800 border-b-blue-800" : "text-black border-b-slate-200"} `}
                                    onClick={() => setMoveToId(child.id)}>{child.name}</button>
                            )
                        }
                    })
                }
            </div>
            <form>
                <button
                    onClick={() => submitHandler(moveToId ? moveToId : parentId)}
                    type="button"
                    name="moveBtn"
                    disabled={!moveToId}
                    className="mb-3 w-full disabled:bg-gray-500 disabled:hover:bg-gray-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Переместить в выбранную папку</button>
                <button
                    onClick={() => { if (prevFolderId) submitHandler(prevFolderId[prevFolderId.length - 1]) }}
                    type="button"
                    name="rootBtn"
                    disabled={prevFolderId.length === 0}
                    className="text-white disabled:bg-gray-500 disabled:hover:bg-gray-500 w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:bg-green-800">
                    Переместить на уровень родительской папки</button>
            </form>
        </>
    );
};

export default MoveFolderForm;