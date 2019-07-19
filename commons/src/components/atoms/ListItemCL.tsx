import { ListItem, ListItemText, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface ListItemCLProps {
  icon?: String;
  link?: String;
  text: String;
}

const ListItemCL: React.FC<ListItemCLProps> = (props: ListItemCLProps) => {
  return (
    <ListItem
      component={props.link ? Link : 'li'}
      to={props.link ? `/${props.link}` : undefined}
    >
      {props.icon ? <Icon>props.icon</Icon> : undefined}
      <ListItemText>{props.text}</ListItemText>
    </ListItem>
  );
};

export default ListItemCL;
