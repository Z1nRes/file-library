import React, { useEffect, useState} from 'react';
import TableItem from "./TableItem";
import {useGetFolderRequest} from "../request";
import {IPropsTable} from "../models/props";

const Table: React.FC<IPropsTable> = ({setRootFolder, setPrevFolder, onChange}) => {
    const [folderId, setFolderId] = useState<string>('root');
    const [prevFolderId, setPrevFolderId] = useState<string[]>(['root']);

    const {data, refetch} = useGetFolderRequest(folderId);

    useEffect(() => {
        setTimeout(() => {
            if (data) { setFolderId(data.id)}
            refetch();
            onChange(data?.id);
        }, )
    }, [data]);

    useEffect(() => {
        onChange(folderId);
        refetch();
    }, [folderId]);

    useEffect(() => {
        setFolderId("root");
        setPrevFolderId([]);
        onChange(folderId);
        refetch();
    }, [setRootFolder]);

    useEffect(() => {
        setPrevFolderId([...prevFolderId.slice(0, prevFolderId.length - 1)])
        setFolderId(prevFolderId[prevFolderId.length - 1]);
        onChange(folderId);
        refetch();
    }, [setPrevFolder]);

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
                    data?.children?.map(folder => <TableItem key={folder.id} folder={folder} setFolderId={setFolderId} parentFolderId={folderId} prevFolderId={prevFolderId} setPrevFolderId={setPrevFolderId} /> )
                }
            </div>
        </>
    );
};

export default Table;