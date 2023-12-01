import { Form } from "react-bootstrap";
import ConfirmDialog from "../../../shared/dialogs/confirm-dialog/confirm-dialog";
import { Controller, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { Access, AccessGroup } from "../../../../models/speciality.model";
import { useEffect } from "react";

type CreateUpdateDialogProps<TData> = {
    show: boolean;
    onHide: () => void;
    item?: TData
    accesses: Array<Access>
    accessGroups: Array<AccessGroup>
    onSubmit?: (item: TData) => void;
}

export default function CreateUpdateDialog(props: CreateUpdateDialogProps<AccessGroup>) {
    const {show,item,onHide,onSubmit, accesses: acesses, accessGroups} = props;

    const {register, handleSubmit, control, formState: {errors}, reset} = useForm<AccessGroup>();

    useEffect(() => {
        
        reset(item ?? {
            id: undefined,
            name: '',
            accesses: []
        }, {
          keepTouched: false
        });
    }, [item, show])

    return (
        <ConfirmDialog title={(item ? "Edit" : "Add new") + " Access Group"} show={show} onHide={onHide} onConfirm={onSubmit && handleSubmit(onSubmit)}>
        <>
          <Form.Group className="mb-3">
            <Form.Label>Access Group</Form.Label>
            <Form.Control type="text" className="field" aria-invalid={errors.name ? "true" : "false"} {...register('name', {required: true, minLength: 3, validate: {exists: (value) => !accessGroups.some(e => e.name === value)}})}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Accesses</Form.Label>
            <Controller
              name="accesses"
              control={control}
              render={({ field }) => (
                  <ReactSelect
                    closeMenuOnSelect={false}
                    isMulti
                    options={acesses}
                    getOptionValue={e => '' + e.id}
                    getOptionLabel={e => e.name}
                    {...field}
                  />
                )
              }
            />
          </Form.Group>
        </>
      </ConfirmDialog>
    )
}