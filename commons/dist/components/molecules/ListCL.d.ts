import { ListItemCLProps } from "../atoms/ListItemCL";
import React from 'react';
export interface ListCLProps {
    items: ListItemCLProps[];
}
declare const ListCL: React.FC<ListCLProps>;
export default ListCL;
