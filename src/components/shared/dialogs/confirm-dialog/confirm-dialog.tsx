import React from "react";
import { Button, Modal } from "react-bootstrap";

type ConfirmDialogProps = {
    title?: string;
    children?: React.ReactElement | null;
    show?: boolean;
    onConfirm?: () => void;
    onHide?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export default class ConfirmDialog extends React.Component<ConfirmDialogProps, {}> {
    render(): React.ReactNode {
        const {title, children, show, onConfirm, onHide, ...rest} = this.props;

        return (
            <Modal onHide={onHide} show={show} {...rest} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onConfirm}>Ok</Button>
                    <Button variant="secondary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );


    }
}