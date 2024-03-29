import React, {useState} from 'react';
import Table from '../components/Table';
import Modal from "../components/Modal";
import CreateFolderForm from "../components/CreateFolderForm";
import FileUploadForm from "../components/FileUploadForm";

const MainPage = () => {
    const [openFolder, setOpenFolder] = useState<boolean>(false);
    const [createdFolder, setCreatedFolder] = useState<boolean>(false);

    const [openFile, setOpenFile] = useState<boolean>(false);
    const [loadedFile, setLoadedFile] = useState<boolean>(false);

    const [rootFolderBtn, setRootFolderBtn] = useState<boolean>(false);
    const [prevFolderBtn, setPrevFolderBtn] = useState<boolean>(false);

    const [parentFolderId, setParentFolderId] = useState<string>("root");

    const handleChange = (parentId: string) => {
        setParentFolderId(parentId);
    }

    return (
        <>
            <div className="px-8 py-4 flex justify-between">
                <div>
                    <button
                        onClick={() => setOpenFolder(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Создать папку
                    </button>
                    <button
                        onClick={() => setOpenFile(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Загрузить файл
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => setPrevFolderBtn(!prevFolderBtn)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Предыдущая папка
                    </button>
                    <button
                        onClick={() => setRootFolderBtn(!rootFolderBtn)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Root
                    </button>
                </div>
            </div>
            <div className="px-8 py-4 ">
                <Table setRootFolder={rootFolderBtn} setPrevFolder={prevFolderBtn} onChange={handleChange}/>
            </div>

            <Modal open={openFolder} onClose={() => setOpenFolder(false)}>
                <CreateFolderForm created={createdFolder} setOpen={setOpenFolder} setCreated={setCreatedFolder} parentFolderId={parentFolderId}/>
            </Modal>
            <Modal open={openFile} onClose={() => setOpenFile(false)}>
                <FileUploadForm loadedFile={loadedFile} setOpen={setOpenFile} setLoaded={setLoadedFile} parentFolderId={parentFolderId}/>
            </Modal>
        </>
    );
};

export default MainPage;