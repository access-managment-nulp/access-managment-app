import './list.scss'
import React, { CSSProperties } from "react";
import { ListGroup } from "react-bootstrap";

type ListProps<TData> = {
  items: Array<TData>;
  style?: CSSProperties;
  className?: string
  children: React.ReactElement<ListItemProps<TData>>;
  footer?: JSX.Element;
};

type ListItemProps<TData> = {
  style?: CSSProperties;
  className?: string
  renderItem: (item: TData) => React.ReactNode;
  keySelector?: (item: TData) => React.Key | undefined | null;
  onClick?: (event: React.MouseEvent, item: TData) => void;
};

class ListItem<TData> extends React.Component<ListItemProps<TData>> {
  static displayName = "List.ListItem";
  render(): React.ReactNode {
    return null;
  }
}

export default class List<TData> extends React.Component<ListProps<TData>, {}> {
  static displayName = "List";
  static Item = ListItem;

  render(): React.ReactNode {
    const { children, items, footer, ...rest } = this.props;

    const {keySelector, renderItem, onClick, className, ...childRest} = children.props;

    return (
      <ListGroup {...rest} className="d-flex flex-column h-100 overflow-auto ">
          {items.map((e) => (
            <ListGroup.Item onClick={event => onClick?.(event, e)} key={keySelector?.(e)} {...childRest}>{renderItem(e)}</ListGroup.Item>
          ))}
        {footer && <ListGroup.Item className={'footer-item ' + className} {...childRest}>{footer}</ListGroup.Item>}
      </ListGroup>
    );
  }
}
