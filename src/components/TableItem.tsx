import React, {useState} from 'react';
import Modal from "./Modal";
import AgreeDelete from "./AgreeDelete";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import FormEditFolder from "./FormEditFolder";
import {useQueryClient} from "@tanstack/react-query";

const TableItem = ({ folder, setFolderId }: any) => {
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);

    // const queryClient = useQueryClient();


    return (
        <>
            <div className="border border-slate-400 grid grid-cols-6 gap-4 pt-3 pb-2 rounded-3xl mt-2">
                <div className="col-start-1 ps-5">{folder.id}</div>
                <div
                    className={`col-start-3 ${folder.type === "folder" ? "cursor-pointer hover:text-blue-700" : ""}`}
                    onClick={() => {
                        if (folder.type === "folder") {
                            setFolderId(folder.id);
                            // queryClient.invalidateQueries({queryKey: ['folders']});
                        }
                    }}

                >{folder.type === "folder" ? folder.name : folder.file.name}</div>
                <div className="col-start-5">{folder.type}</div>
                <div className="col-start-6 flex justify-end">
                    {
                        folder.type === "folder" ?
                            <FontAwesomeIcon
                                className="py-2 px-3 cursor-pointer hover:text-yellow-300"
                                onClick={() => setOpenEdit(true)}
                                icon={faPenToSquare} />
                            : false
                    }
                    <FontAwesomeIcon
                        className="py-2 px-3 me-4 cursor-pointer hover:text-red-600"
                        onClick={() => setOpenDelete(true)}
                    icon={faTrashCan} />
                </div>
            </div>

            <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
                <AgreeDelete folder={folder} />
            </Modal>
            <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
                <FormEditFolder folder={folder} setOpen={setOpenEdit} />
            </Modal>
        </>
    );
};

export default TableItem;