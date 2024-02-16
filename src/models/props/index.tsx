import React from "react";
import {IFolderData} from "../response/FolderResponse";

export interface IPropsModal {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode
}

export interface IPropsTable {
    setRootFolder: boolean,
    setPrevFolder: boolean,
    onChange: (parentId: string) => void
}

export interface IPropsMoveFolderForm {
    folder: IFolderData,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    parentId: string,
    prevFolderId: string[]
}

export interface IPropsTableItem {
    folder: IFolderData,
    setFolderId: any,
    parentFolderId: any,
    prevFolderId: any,
    setPrevFolderId: any
}

export interface IPropsFormEditFolder{
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    folder: IFolderData
}

export interface IPropsAgreeDelete{
    folder: IFolderData
}

export interface IPropsCreateFolderForm{
    created: boolean,
    setCreated: React.Dispatch<React.SetStateAction<boolean>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    parentFolderId: string
}

export interface IPropsFileUploadForm{
    loadedFile: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>,
    parentFolderId: string
}