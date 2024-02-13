import React, {SyntheticEvent, useState} from 'react';
import {useCreateFolderRequest} from "../request";

const CreateFolderForm = ({created, setCreated, setOpen, parentFolderId}: any) => {
    const [name, setName] = useState<string>('');
    const [nameDirty, setNameDirty] = useState<boolean>(false);
    const [nameError, setNameError] = useState<string>('Поле "Имя" не может быть пустым!');

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true)
                break
        }
    }

    const requiredHandler = (e: any) => {
        e.target.value.length > 0 ? setNameError('') : setNameError('Поле "Имя" не может быть пустым!');
    }

    const {mutate} = useCreateFolderRequest();

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        mutate({parentId: parentFolderId, name: name});
        setCreated(true);
        setTimeout(() => {
            setName('');
            setOpen(false);
            setCreated(false);
        }, 700)
    }

    return !created ? (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="name"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={name}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurHandler(e)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                    requiredHandler(e)
                }}
            />

            <button
                disabled={name.length === 0}
                className="shadow disabled:bg-gray-500 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ms-3"
                type="submit"
            >
                Создать
            </button>
            {(nameDirty && nameError) && <div
                className="p-4 mt-4 text-sm text-red-400 rounded-lg border-double border-4 border-red-500">{nameError}</div>}
        </form>
    )
    :
    (
        <>
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl"><span
                className="text-red-600"
            >{name}</span> успешно создана!</h2>
        </>
    )
};

export default CreateFolderForm;