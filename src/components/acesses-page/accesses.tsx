import "./accesses.scss";
import List from "../shared/list/list";
import { Access, AccessGroup } from "../../models/speciality.model";
import { useEffect, useState } from "react";
import AccessGroupDeleteDialog from "./components/dialogs/access-group-delete-dialog";
import CreateUpdateDialog from "./components/dialogs/access-group-add-edit-dialog";
import InfoToast from "../shared/toasts/toast";
import { ToastContainer } from "react-bootstrap";
import accessRestService from "../../services/access.rest.service";
import accessGroupRestService from "../../services/accessGroup.rest.service";

export default function AccessesPage() {
  const [accesses, setAccesses] = useState<Array<Access>>([]);
  const [accessGroups, setAccessGroups] = useState<Array<AccessGroup>>([]);

    useEffect(() => {
        accessRestService.getAll().then(e => {
            setAccesses(e.data);
            setDisplayedAccesses(e.data);
        })

        loadAccessGroups();
    }, [])

    function loadAccessGroups() {
        accessGroupRestService.getAll().then(e => {
            setAccessGroups(e.data);
        })
    }

  const [displayedAccesses, setDisplayedAccesses] =
    useState<Array<Access>>([]);

  const [dialogItem, setDialogItem] = useState<AccessGroup>();
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const displayAll = () => setDisplayedAccesses(accesses);

    document.addEventListener("click", displayAll);

    return () => {
      document.removeEventListener("click", displayAll);
    };
  }, [accesses]);

  function handleSubmit(item: AccessGroup) {
    console.log("edit/create", item);

    if(item.id) {
        accessGroupRestService.update(item).then(e => {
            loadAccessGroups();
        });
    } else {
        accessGroupRestService.create(item).then(e => {
            loadAccessGroups();
        });
    }

    setShowEdit(false);
    setShowToast(true);
  }

  function handleToastClose() {
    setShowToast(false);
  }

  const handleDelete = () => {
    console.log("delete", dialogItem);

    if(dialogItem?.id) {
        accessGroupRestService.deleteItem(dialogItem.id).then(e => {
            loadAccessGroups();
        })
    }

    setShowDelete(false);
  }

  const addNew = () => {
    setDialogItem(undefined);
    setShowEdit(true);
  }

  const renderAccessGroupItem = (accessGroup: AccessGroup) => {
    return (
      <div className="item d-flex flex-nowrap">
        <span className="flex-grow-1 align-self-center" style={{ overflowWrap: 'anywhere' }}>
          {accessGroup.name}
        </span>
        <div className="actions d-flex flex-nowrap gap-2 align-self-center">
          <button
            className="btn btn-warning"
            onClick={() => {
              setDialogItem(accessGroup);
              setShowEdit(true);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              setDialogItem(accessGroup);
              setShowDelete(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  const renderAccessItem = (access: Access) => {
    return (
      <div className="item d-flex flex-nowrap">
        <span className="flex-grow-1">{access.name}</span>
      </div>
    );
  };

  const renderAddNew = (onClick: React.MouseEventHandler) => {
    return (
      <div className="d-flex justify-content-center ">
        <button
          className="btn btn-primary w-100"
          onClick={(ev) => {
            ev.stopPropagation();
            onClick(ev);
          }}
        >
          Add new
        </button>
      </div>
    );
  };

  const SuccessIcon = (
    <i className="bi bi-check-circle text-success d-flex align-items-center h4 m-0 "></i>
  );

  return (
    <>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="expandable-content row d-flex justify-content-around m-4">
            <div className="col-6 list-container flex-grow-1">
              <h4 className="text-center">Access Groups</h4>
              <div className="list-wrapper">
                <List
                  className="list"
                  items={accessGroups}
                  footer={renderAddNew(addNew)}
                >
                  <List.Item
                    className="cursor-poiner"
                    onClick={(ev, item) => {
                      ev.stopPropagation();
                      setDisplayedAccesses(item.accesses);
                    }}
                    renderItem={renderAccessGroupItem}
                  />
                </List>
              </div>
            </div>
            <div className="col-6 list-container flex-grow-1 ">
              <h4 className="text-center">Accesses</h4>
              <div className="list-wrapper">
                <List className="list" items={displayedAccesses}>
                  <List.Item renderItem={renderAccessItem} />
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AccessGroupDeleteDialog
        show={showDelete}
        onConfirm={handleDelete}
        onHide={() => setShowDelete(false)}
      />

      <CreateUpdateDialog
        show={showEdit}
        item={dialogItem}
        accesses={accesses}
        accessGroups={accessGroups}
        onSubmit={handleSubmit}
        onHide={() => setShowEdit(false)}
      />

      <InfoToast
        className="toast"
        show={showToast}
        onClose={handleToastClose}
        icon={SuccessIcon}
        text={<strong className="h4 m-0">Success</strong>}
      />
    </>
  );
}
