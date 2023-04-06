import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {ListItemButton, ListItemIcon} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import {ILesson} from "../../../../../types/ICourse";
import styles from './lesson-list.module.scss'

interface ILessonListProps {
    data: ILesson[],
    selectedIndex: number,
    setSelectedIndex: Function
}

export function LessonList(props: ILessonListProps) {
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        props.setSelectedIndex(index);
    };

    return (
        <List className={styles.list}
            sx={{  bgcolor: 'background.paper', '& ul': {padding: 0}}}
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
                            <ListItemText className={styles.listItemText} primary={item.title}/>
                        </ListItem>
                    </ListItemButton> :
                    <ListItemButton disabled key={`item-${item.title}`}>
                        <ListItemIcon>
                            <LockIcon/>
                        </ListItemIcon>
                        <ListItemText className={styles.listItemText} primary={item.title}>
                        </ListItemText>
                    </ListItemButton>
            ))}
        </List>
    );
}