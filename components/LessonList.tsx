import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {ListItemButton, ListItemIcon} from "@mui/material";
import {ILesson} from "../types/ICourse";
import LockIcon from '@mui/icons-material/Lock';

interface ILessonListProps {
    data: ILesson[],
    selectedIndex: number,
    setSelectedIndex: Function
}

export default function LessonList(props: ILessonListProps) {
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        props.setSelectedIndex(index);
    };

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': {padding: 0},
            }}
            subheader={<li/>}
        >
            {props.data.map((item, index) => (
                item.status !== 'locked' ?
                    <ListItemButton
                        selected={props.selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                        key={`item-${item.title}`}
                    >
                        <ListItem>
                            <ListItemText sx={{color: "white"}} primary={item.title}/>
                        </ListItem>
                    </ListItemButton> :
                    <ListItemButton disabled
                                    key={`item-${item.title}`}
                    >
                        <ListItemIcon>
                            <LockIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{color: "white"}} primary={item.title}>
                        </ListItemText>
                    </ListItemButton>
            ))}
        </List>
    );
}