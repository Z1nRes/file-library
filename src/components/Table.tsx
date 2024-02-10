import React, {useEffect, useState} from 'react';
import TableItem from "./TableItem";
import {useGetFolderRequest} from "../request";
import {useQueryClient} from "@tanstack/react-query";

const Table = () => {
    const [folderId, setFolderId] = useState('root');

    const {data} = useGetFolderRequest(folderId);


    useEffect(() => {
        console.log(folderId)
    }, [folderId]);

    return (
        <>
            <div>

                <div className="bg-slate-800 text-white grid grid-cols-6 gap-4 p-3 rounded-3xl">
                    <div className="col-start-1 ps-5">#</div>
                    <div className="col-start-3">Имя</div>
                    <div className="col-start-5">Тип</div>
                    <div className="col-start-6"></div>
                </div>

                {
                    data?.children?.map(folder => <TableItem key={folder.id} folder={folder} setFolderId={setFolderId}/> )
                }
            </div>
        </>
    );
};

export default Table;