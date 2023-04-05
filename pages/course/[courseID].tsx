import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ICourseWithLessons} from "../../types/ICourse";
import {NextPageContext} from "next";
import CourseInfo from "../../components/Course/CourseInfo/CourseInfo";
import VideoSegment from "../../components/Course/VideoSegment/VideoSegment";
import {fetchCourseWithLessons} from "../../api/fetchCourseWithLessons";

export const getServerSideProps = async (ctx: NextPageContext) => {
    try {
        const {course} = await fetchCourseWithLessons(ctx);
        return {props: {...course}};

    } catch {
        return {props: {error: "notFind"}};
    }
}


const CoursePage = (course: ICourseWithLessons) => {
    console.log(course)
    return (
        <Layout>
            <Link href='/'>
                <ArrowBackIosNewIcon sx={{color: "white", margin: 5}}/>
            </Link>
            <CourseInfo data={course}/>
            <VideoSegment data={course}/>
        </Layout>
    );
};


export default CoursePage;