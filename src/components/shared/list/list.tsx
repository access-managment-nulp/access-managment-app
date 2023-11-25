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

    const {keySelector, renderItem, ...childRest} = children.props;

    return (
      <ListGroup {...rest}>
        {items.map((e) => (
          <ListGroup.Item key={keySelector?.(e)} {...childRest}>{renderItem(e)}</ListGroup.Item>
        ))}
        {footer && <ListGroup.Item {...childRest}>{footer}</ListGroup.Item>}
      </ListGroup>
    );
  }
}
