import { List } from '@material-ui/core';
import ListItemCL, { ListItemCLProps } from '@src/components/atoms/ListItemCL';
import React from 'react';

export interface ListCLProps {
  items: ListItemCLProps[];
}

const ListCL: React.FC<ListCLProps> = (props: ListCLProps) => {
  return (
    <List>
      {props.items.map(item => {
        <ListItemCL
          icon={item.icon ? item.icon : undefined}
          link={item.link ? item.link : undefined}
          text={item.text}
        />;
      })}
    </List>
  );
};

export default ListCL;
