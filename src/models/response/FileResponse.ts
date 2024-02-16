
export interface IFileData{
    "name": string,
    "filepath": string
}

export interface IFileLoadResponse{
    "id": string,
    "file": IFileData
}

export interface IFileDeleteResponse{
    "message": string
}
