import "./specialities-table.scss";

import React from "react";
import {
  Access,
  AccessGroup,
  Speciality,
} from "../../../../models/speciality.model";
import { Button } from "react-bootstrap";
import List from "../../../shared/list/list";

type SpecialitiesPageProps = {
  data: Array<Speciality>;
  click?: (item: Speciality) => void; 
};

type SpecialityRowProps = {
  data: Speciality;
  click?: (item: Speciality) => void; 
};

type SpecialityRowState = {
  expanded: boolean;
};

class SpecialitiesTableRow extends React.Component<
  SpecialityRowProps,
  SpecialityRowState
> {
  static displayName = "SpecialitiesTable.Row";

  constructor(props: SpecialityRowProps) {
    super(props);
    this.state = { expanded: false };
  }

  private onRowExpand() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render(): React.ReactNode {
    const { data, click } = this.props;

    return (
      <>
        <tr className="align-middle">
          <td className="text-nowrap">
            <Button variant="none" onClick={(ev) => this.onRowExpand()}>
              {this.state.expanded ? "v" : ">"}
            </Button>
            {data.name}
          </td>
          <td className="">
            <div className="text-truncate">
              {data.accessGroups.map((e) => e.name).join(", ")}
            </div>
          </td>
          <td className="">
            <div className="text-truncate">
              {data.accesses.map((e) => e.name).join(", ")}
            </div>
          </td>

          <td>
            <div className="d-flex justify-content-center"><Button variant="warning" onClick={ () => click?.(data)}>Edit</Button></div>
          </td>
        </tr>
        {this.state.expanded && (
          <tr className="expandable-container">
            <td colSpan={4}>
              <div className="expandable-content row d-flex justify-content-around m-4">
                <div className="col-auto list-container flex-grow-1 ">
                  <h4 className="text-center">Access Groups</h4>
                  <div className="list-wrapper">
                    <List className="list" items={data.accessGroups}>
                      <List.Item
                        keySelector={(e) => e.name + e.id}
                        renderItem={this.renderAccessGroupItem}
                      />
                    </List>
                  </div>
                </div>
                <div className="col-auto list-container flex-grow-1 ">
                  <h4 className="text-center">Accesses</h4>
                  <div className="list-wrapper">
                    <List className="list" items={data.accesses}>
                      <List.Item
                        keySelector={(e) => e.name + e.id}
                        renderItem={this.renderAccessItem}
                      />
                    </List>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )}
      </>
    );
  }

  private renderAccessGroupItem = (accessGroup: AccessGroup) => {
    return <>{accessGroup.name}</>;
  };

  private renderAccessItem = (access: Access) => {
    return <>{access.name}</>;
  };
}

export default class SpecialitiesTable extends React.Component<
  SpecialitiesPageProps,
  {}
> {
  static displayName = "SpecialitiesTable";
  render(): React.ReactNode {
    return (
      <>
        <table className="table table-striped table-bordered ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Access Groups</th>
              <th>Acesses</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((e) => (
              <SpecialitiesTableRow key={e.name + e.id} data={e} click={this.props.click} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
