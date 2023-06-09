import {Layout} from "../../ui/components/Layout";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {CourseInfo} from "../../ui/components/Course/CourseInfo";
import {VideoSegment} from "../../ui/components/Course/VideoSegment";
import { ICourseWithLessons} from "../../types/ICourse";
import {NextPageContext} from "next";
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