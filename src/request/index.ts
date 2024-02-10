import api from "../http";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {IAuthResponse} from "../models/response/AuthResponse";
import {IFolderCreateResponse, IFolderGetResponse} from "../models/response/FolderResponse";
import {useNavigate} from "react-router-dom";

// auth requests
const useLoginRequest = () => {
    const navigate = useNavigate();
    const callback = async (port: {login: string , password: string}) => {
        return await api.post<IAuthResponse>('auth/login', port)
            .then(res => {
                localStorage.setItem('token', res.data.token)
            })
    }

    return useMutation({mutationFn: callback, mutationKey: ['login'], onSuccess: () => {
            navigate('/');
            window.location.reload();
        }})
}

const useRegisterRequest = (login: string , password: string) => {
    const navigate = useNavigate();

    const callback = async () => {
        return await api.post<IAuthResponse>('auth/register', {login, password})
            .then(res => {
                localStorage.setItem('token', res.data.token)

            })
    }

    return useMutation({mutationFn: callback, mutationKey: ['login'], onSuccess: () => {
        navigate('/');
        window.location.reload();
    }})
}

// folder requests
const useGetFolderRequest = (id: string) => {
    const callback = async () => {
        return api.get<IFolderGetResponse>(`drive/folder/${id}`).then(res => res.data.data)
    }

    return useQuery({queryFn: callback, queryKey: ['folders']})
}

const useCreateFolderRequest = () => {
    const refetchClient = useQueryClient();

    const callback = async (port: {parentId: string, name: string}) => {
        return await api.post<IFolderCreateResponse>('drive/folder', port)
    }

    return useMutation({mutationFn: callback, mutationKey: ['createFolder'], onSuccess: () => refetchClient.invalidateQueries({queryKey: ['folders']})})
}

const useDeleteFolderRequest = () => {
    const refetchClient = useQueryClient();

    const callback = async (id: string) => {
        return await api.delete(`drive/folder/${id}`)
    }

    return useMutation({mutationFn: callback, mutationKey: ['createFolder'], onSuccess: () => refetchClient.invalidateQueries({queryKey: ['folders']})})
}

const useEditFolderRequest = () => {
    const refetchClient = useQueryClient();

    const callback = async (port: {parentId: string, name: string, id: string}) => {
        const {parentId, name} = port;

        return await api.patch(`drive/folder/${port.id}`, {parentId, name})
    }

    return useMutation({mutationFn: callback, mutationKey: ['createFolder'], onSuccess: () => refetchClient.invalidateQueries({queryKey: ['folders']})})
}

//file requests
const useLoadFileRequest = () => {
    const refetchClient = useQueryClient();

    const callback = async (port: {folderId: string, file: any}) => {
        return await api.post(`drive/files`, port, { headers: {
                'Content-Type': 'multipart/form-data'
            }})
    }

    return useMutation({mutationFn: callback, mutationKey: ['createFolder'], onSuccess: () => refetchClient.invalidateQueries({queryKey: ['folders']})})
}

const useDeleteFileRequest = () => {
    const refetchClient = useQueryClient();
    const callback = async (id:string) => {

        return await api.delete(`drive/files/${id}`)
    }

    return useMutation({mutationFn: callback, mutationKey: ['createFolder'], onSuccess: () => refetchClient.invalidateQueries({queryKey: ['folders']})})
}

export {
    useLoginRequest,
    useRegisterRequest,
    useGetFolderRequest,
    useCreateFolderRequest,
    useDeleteFolderRequest,
    useEditFolderRequest,
    useLoadFileRequest,
    useDeleteFileRequest
}
