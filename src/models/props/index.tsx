import React from "react";

export interface IPropsModal {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode
}

export interface IPropsTable {
    setRootFolder: boolean,
    setPrevFolder: boolean,
    onChange: any
}