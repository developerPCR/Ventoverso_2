import React from "react";
import { Notification } from "../components/Notification";
import { AlertColor } from "@mui/material";

type ContextProps = {
    getError: (msg: string) => void;
    getSucces:(msg:string) => void;
};

const NotificationContext = React.createContext<ContextProps | null>(null);


export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {

    const [msg, setMsg] = React.useState("")
    const [open, setOpen] = React.useState(false)
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(
        undefined
    );

    const handleCLose = () => {
        setOpen(false)
    }


    const getError = (msg: string) => {
        setSeverity("error");
        setOpen(true);
        setMsg(msg);
    };

    const getSucces = (msg: string) => {
        setSeverity("success");
        setOpen(true);
        setMsg(msg);
    };

    const value = {
        getError,
        getSucces
    };

    return (
        <NotificationContext.Provider value={value} >
            <Notification handleClose={handleCLose} open={open} severity={severity} msg={msg} />
            {children}


        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = React.useContext(NotificationContext)
    if (!context) throw new Error("no existe contexto")
    return context;

}