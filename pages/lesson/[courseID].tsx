import LessonList from "../../components/LessonList";
import Layout from "../../components/Layout";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Video from "../../components/Video";
import Grid from "@mui/system/Unstable_Grid";
import { ICourseWithLessons} from "../../types/ICourse";
import { useState} from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Box} from "@mui/material";
import {NextPageContext} from "next";
import LockIcon from "@mui/icons-material/Lock";

export const getServerSideProps = async (ctx: NextPageContext) => {
    try {
        let headers = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0.Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM",
            "Host": "api.wisey.app"
        };
        let requestOptions2 = {
            method: 'GET',
            headers: headers,
        };

        let res = await fetch(`http://api.wisey.app/api/v1/core/preview-courses/${ctx.query.courseID}`, requestOptions2)
        let course: ICourseWithLessons = await res.json();
        return {props: {...course}};

    } catch {
        return {props: {error: "notFind"}};
    }
}


const CoursePage = (course_: ICourseWithLessons) => {
    const [course, setCourse] = useState<ICourseWithLessons>(course_)
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
        <Layout>
            <Link href='/'>
                <ArrowBackIosNewIcon sx={{color: "white", margin: 5}}/>
            </Link>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{maxWidth: 1092}}>
                    <img
                        src={course.previewImageLink + '/cover.webp'}
                        alt="Paella dish"
                        width='100%'
                    />
                    <Typography variant="h5" gutterBottom color="text.primary">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom color="text.secondary">
                        {course.description}
                    </Typography>

                </Box>
            </Box>
            <Grid sx={{
                maxWidth: 1092,
                paddingTop: 5,
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'center',
                alignItems: 'center'
            }} container spacing={{xs: 1, sm: 1, md: 2}} columns={{xs: 1, sm: 1, md: 3}}>
                <Grid xs={2}>
                    {course.lessons[selectedIndex].status !== 'locked' ?
                        <Video url={course.lessons[selectedIndex].link} preview={course.lessons[selectedIndex].previewImageLink + '/lesson-' + course.lessons[selectedIndex].order + '.webp'}/> :
                        <Typography variant="h6" color="text.secondary" sx={{padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <LockIcon fontSize="large" sx={{margin: 4}}/>
                            Sorry, this lesson is locked, try another one
                        </Typography>
                    }
                </Grid>
                <Grid xs={1}
                      sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h6" color="text.secondary" sx={{padding: 2}}>
                        Choose your lesson:
                    </Typography>
                    <LessonList data={finalLesson} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
                </Grid>
            </Grid>
        </Layout>
    );
};


export default CoursePage;