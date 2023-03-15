import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {ICourse} from "../types/ICourse";
import {Box, Chip} from "@mui/material";


interface ICourseCard{
    data: ICourse;
}

export default function CourseCard(props: ICourseCard) {
    return (
        <Card sx={{maxWidth: 345, height: '100%' }}>
            <CardMedia
                component="img"
                image={props.data.previewImageLink + '/cover.webp'}
                alt="Paella dish"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.data.title}
                </Typography>
                <Box  sx={{ marginTop: 2 , marginBottom: 2}}>
                    {props.data.tags.map((item) =>
                        <Chip label={item} size="small" variant="outlined" />
                    )}
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {props.data.description}
                </Typography>
            </CardContent>
            <CardActions >
                <Typography variant="body2" color="text.secondary">Rate: {props.data.rating}</Typography>
                <Typography variant="body2" color="text.secondary">Lessons: {props.data.lessonsCount}</Typography>
            </CardActions>
        </Card>
    );
}