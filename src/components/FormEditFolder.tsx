import React, {SyntheticEvent, useState} from 'react';
import { useEditFolderRequest} from "../request";

const FormEditFolder = ({setOpen, folder}: any) => {
    const [name, setName] = useState<string>(folder.name)
    const [nameDirty, setNameDirty] = useState<boolean>(false);
    const [nameError, setNameError] = useState<string>('Поле "Имя" не может быть пустым!');
    const [changed, setChanged] = useState<boolean>(false);

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

    const {mutate} = useEditFolderRequest();

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        mutate({parentId: "root", name: name, id: folder.id});
        setChanged(true);
        setTimeout(() => {
            setOpen(false);
            setChanged(false);
        }, 800)
    }

    return !changed ? (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={name}
                    onBlur={e => blurHandler(e)}
                    onChange={e => {
                        setName(e.target.value);
                        requiredHandler(e)
                    }}
                />

                <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-3"
                    type="submit"
                >
                    Изменить
                </button>
                {(nameDirty && nameError) && <div
                    className="p-4 mt-4 text-sm text-red-400 rounded-lg border-double border-4 border-red-500">{nameError}</div>}
            </form>
        </>
    )
    :
        (
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl"><span
                className="text-red-600"
            >{folder.name}</span> успешно изменен!</h2>
        )
};

export default FormEditFolder;