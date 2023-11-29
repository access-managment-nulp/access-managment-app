import SpecialitiesTable from "./components/specialities-table/specialities-table";
import data from "../../mock/specialities2.json"
import ConfirmDialog from "../shared/dialogs/confirm-dialog/confirm-dialog";
import { useState } from "react";
import { Access, Speciality } from "../../models/speciality.model";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import ReactSelect from "react-select";

export default function SpecialitiesPage() {
  const [show, setShow] = useState(false);
  const {register, handleSubmit, control, formState: {errors}, reset} = useForm<Speciality>();

  const accessesSelectOptions = data.flatMap(e => e.accesses);
  const accessGroupsSelectOptions = data.flatMap(e => e.accessGroups);

  const onEdit = (data: Speciality) => {
    setShow(true);

    reset(data);
  }

  const onHide = () => {
    setShow(false);
  }

  const onSubmit = (e: Speciality) => {
    onHide();

    console.log(e);
    
  }

  return (
    <>
      <div className="row">
        <div className="col-12 mt-5">
          <SpecialitiesTable data={data} click={onEdit}/>
        </div>
      </div>
      <ConfirmDialog title="Edit speciality" show={show} onHide={onHide} onConfirm={handleSubmit(onSubmit)}>
        <>
          <Form.Group className="mb-3">
            <Form.Label>Speciality</Form.Label>
            <Form.Control type="text" {...register('name')} readOnly={true}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Access Groups</Form.Label>
            <Controller
              name="accessGroups"
              control={control}
              render={({ field }) => (
                  <ReactSelect
                    closeMenuOnSelect={false}
                    isMulti
                    options={accessGroupsSelectOptions}
                    getOptionValue={e => '' + e.id}
                    getOptionLabel={e => e.name}
                    {...field}
                  />
                )
              }
            />
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
                    options={accessesSelectOptions}
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
    </>
  );
}
