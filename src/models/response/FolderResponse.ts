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
}

export interface IFolderGetResponse
{
    "data": IFolderData
}

interface IFolderCreateData {

}

export interface IFolderCreateResponse
{
    "data": IFolderData
}