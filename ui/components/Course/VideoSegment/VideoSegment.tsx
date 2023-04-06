import Grid from "@mui/system/Unstable_Grid";
import styles from "../../../styles/pages-styles/lesson-page.module.scss";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import {LessonList} from "./LessonList";
import * as React from "react";
import {ICourseWithLessons} from "../../../../types/ICourse";
import {Video} from "./Video";

export interface ICourseProps {
    data: ICourseWithLessons
}

export const VideoSegment = ({data: course}: ICourseProps) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const finalLesson = course !== undefined ? course.lessons : [];

    // useEffect(() => {
    //     setSelectedIndex(Number(window.localStorage.getItem('lessonNumber')))
    // }, [])
    //
    // useEffect(() => {
    //     window.localStorage.setItem('lessonNumber', selectedIndex.toString());
    // }, [selectedIndex])
    return (
        <Grid className={styles.lessonGrid} container spacing={{xs: 1, sm: 1, md: 2}} columns={{xs: 1, sm: 1, md: 3}}>
            <Grid xs={2}>
                {course.lessons[selectedIndex].status !== 'locked' ?
                    <Video url={course.lessons[selectedIndex].link} preview={course.lessons[selectedIndex].previewImageLink + '/course-' + course.lessons[selectedIndex].order + '.webp'}/> :
                    <Typography variant="h6" color="text.secondary" className={styles.lockText}>
                        <LockIcon fontSize="large" className={styles.lockIcon}/>
                        Sorry, this lesson is locked, try another one
                    </Typography>
                }
            </Grid>
            <Grid xs={1} className={styles.listGrid}>
                <Typography variant="h6" color="text.secondary" className={styles.listTitle}>
                    Choose your lesson:
                </Typography>
                <LessonList data={finalLesson} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            </Grid>
        </Grid>
    );
};
