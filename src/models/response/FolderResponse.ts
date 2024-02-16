import {IFileData} from "./FileResponse";

interface IChildren
{
    "id": string,
    "name": string,
    "type": string
}


export interface IFolderData
{
    "id": string,
    "name": string,
    "children"?: [IChildren] | []
    "type"?: string
    "file"?: IFileData
}

export interface IFolderGetResponse
{
    "data": IFolderData
}

export interface IFolderCreateResponse
{
    "data": IFolderData
}

export interface IFolderDeleteResponse{
    "message": string
}

export interface IFolderPatchResponse{
    "data": {
        "id": string,
        "name": string
    }
}