import './accesses.scss' 
import List from "../shared/list/list";
import data from "../../mock/specialities2.json"
import { Access, AccessGroup } from "../../models/speciality.model";
import { useEffect, useState } from "react";
import AccessGroupDeleteDialog from './components/dialogs/access-group-delete-dialog';
import CreateUpdateDialog from './components/dialogs/access-group-add-edit-dialog';

export default function AccessesPage() {
    const accessGroups = data.flatMap(e => e.accessGroups).filter(onlyUnique);
    const accesses = data.flatMap(e => e.accesses).filter(onlyUnique);

    const [displayedAccesses, setDisplayedAccesses] = useState<Array<Access>>(accesses);


    const [dialogItem, setDialogItem] = useState<AccessGroup>();
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);


    function onlyUnique<TData>(value: TData, index: number, array: TData[]) {
        return array.indexOf(value) === index;
    }

    useEffect(() => {
        const displayAll = () => setDisplayedAccesses(accesses);

        document.addEventListener('click', displayAll)

        return () => {
            document.removeEventListener('click', displayAll);
        }
    }, []);

    const renderAccessGroupItem = (accessGroup: AccessGroup) => {
        return (
            <div className="item d-flex flex-nowrap">
                <span className="flex-grow-1 align-self-center">{accessGroup.name}</span>
                <div className="actions d-flex gap-2">
                    <button className='btn btn-warning' onClick={() => {setDialogItem(accessGroup); setShowEdit(true);}}>Edit</button>
                    <button className='btn btn-danger' onClick={() => {setDialogItem(accessGroup); setShowDelete(true);}}>Delete</button>
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
                <button className='btn btn-primary w-100' onClick={(ev) => {ev.stopPropagation(); onClick(ev);}}>Add new</button>
            </div>
        );
      };

    return (
        <>
            <div className="row">
                <div className="col-12 mt-4">
                    <div className="expandable-content row d-flex justify-content-around m-4">
                        <div className="col-auto list-container flex-grow-1">
                        <h4 className="text-center">Access Groups</h4>
                        <div className="list-wrapper">
                            <List className="list" items={accessGroups} footer={renderAddNew(() => {setDialogItem(undefined); setShowEdit(true);})}>
                                <List.Item
                                    className='cursor-poiner'
                                    onClick={(ev, item) => {ev.stopPropagation(); ev.currentTarget.classList.add("secondary"); setDisplayedAccesses(item.accesses);}}
                                    renderItem={renderAccessGroupItem}
                                />
                            </List>
                        </div>
                        </div>
                        <div className="col-auto list-container flex-grow-1 ">
                        <h4 className="text-center">Accesses</h4>
                        <div className="list-wrapper">
                            <List className="list" items={displayedAccesses}>
                                <List.Item
                                    renderItem={renderAccessItem}
                                />
                            </List>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <AccessGroupDeleteDialog show={showDelete} onConfirm={() => {console.log('delete', dialogItem); setShowDelete(false);}} onHide={() => setShowDelete(false)}/>
            <CreateUpdateDialog show={showEdit} item={dialogItem} acesses={accesses} onSubmit={(item: AccessGroup) => {console.log('edit/create', item); setShowEdit(false);}} onHide={() => setShowEdit(false)}/>
        </>
    );
}