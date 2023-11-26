import ConfirmDialog from "../../../shared/dialogs/confirm-dialog/confirm-dialog";

type DeleteDialogProps = {
    show?: boolean;
    onConfirm?: () => void;
    onHide?: () => void;
}

export default function AccessGroupDeleteDialog(props: DeleteDialogProps) {
    return(
        <ConfirmDialog title="Delete Access Group" {...props}>
            <>
                Are you sure?
            </>
        </ConfirmDialog>
    );
}