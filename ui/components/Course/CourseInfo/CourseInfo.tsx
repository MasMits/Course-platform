import React from 'react';
import {Box} from "@mui/material";
import styles from "../../../styles/pages-styles/lesson-page.module.scss";
import Typography from "@mui/material/Typography";
import {ICourseWithLessons} from "../../../../types/ICourse";

export interface ICourseProps {
    data: ICourseWithLessons
}

export const CourseInfo = ({data: course}: ICourseProps) => {
    console.log(course)
    return (
        <Box className={styles.header}>
            <Box className={styles.image}>
                <img
                    src={course.previewImageLink + '/cover.webp'}
                    alt={course.title}
                    width='100%'
                />
                <Typography variant="h5" gutterBottom color="text.primary">
                    {course.title}
                </Typography>
                <Typography variant="body2" gutterBottom color="text.secondary">
                    {course.description}
                </Typography>
                <div id='test-1'>I'm Here</div>
            </Box>
        </Box>
    );
};