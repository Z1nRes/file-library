interface IChildren
{
    "id": string,
    "name": string,
    "type": string
}

interface IFolderData
{
    "id": string,
    "name": string,
    "children": [IChildren] | []
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