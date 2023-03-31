import * as React from "react";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout/Layout";
import {useCoursePreview} from "../hooks/useCoursePreview";
import CourseGrid from "../components/Home/CourseGrid/CourseGrid";

export default function Home() {
    const {courses, countPages} = useCoursePreview()

    return (
        <Layout>
            <Typography variant="h2" gutterBottom color="text.primary">
                Choose your courses!
            </Typography>
            <CourseGrid courses={courses} countPages={countPages} />
        </Layout>
    )
}
