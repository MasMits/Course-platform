import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ICourseWithLessons} from "../../types/ICourse";
import {NextPageContext} from "next";
import CourseInfo from "../../components/Course/CourseInfo/CourseInfo";
import VideoSegment from "../../components/Course/VideoSegment/VideoSegment";

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


const CoursePage = (course: ICourseWithLessons) => {
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