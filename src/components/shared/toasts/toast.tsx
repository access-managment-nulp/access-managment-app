import './toast.scss';
import React from "react";
import { Toast } from "react-bootstrap";

interface InfoToast {
    show?: boolean;
    onClose?: (e?: React.MouseEvent | React.KeyboardEvent) => void;
    hideDelay?: number;
    icon: React.ReactElement;
    text: React.ReactElement;
    className?: string;
    styles?: React.CSSProperties;

}

function InfoToast({show, onClose, hideDelay, icon, text, ...rest}: InfoToast) {
    
    return (
        <Toast show={show} autohide delay={hideDelay} onClose={onClose} {...rest}>
          <Toast.Body>
            <div className="d-flex h-100 flex-nowrap">
                <div className="icon-container d-flex align-items-center me-2 ">
                    {icon}
                </div>
                <div className="text-container d-flex align-items-center flex-grow-1">
                    {text}
                </div>
                <div className="controls d-flex align-items-center">
                    <button className="btn btn-close" onClick={onClose}></button>
                </div>
            </div>
          </Toast.Body>
        </Toast>
    );
};


export default InfoToast;