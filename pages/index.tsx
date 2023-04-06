import * as React from "react";
import Typography from "@mui/material/Typography";
import {Layout} from "../ui/components/Layout";
import {CourseGrid} from "../ui/components/Home/CourseGrid";
import {ICourse} from "../types/ICourse";
import {fetchCoursesPreview} from "../api/fetchCoursesPreview";
import {useCoursePreview} from "../hooks/useCoursePreview";

export const getServerSideProps = async () => {
    try {
        const {courses, countPages} = await fetchCoursesPreview();
        return {props: {courses, countPages}};
    } catch {
        return {props: {error: "notFind"}};
    }
}

interface IHomeProps {
    courses: ICourse[],
    countPages: number
}

export default function Home(props: IHomeProps) {
    const {courses, countPages} = useCoursePreview()
    return (
        <Layout>
            <Typography variant="h2" gutterBottom color="text.primary">
                Choose your courses!
            </Typography>
            {/*<CourseGrid courses={props.courses} countPages={props.countPages}/>*/}
            <CourseGrid courses={courses?.courses} countPages={countPages} />
        </Layout>
    )
}
