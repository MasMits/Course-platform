import {ICourseWithLessons} from "../types/ICourse";
import {NextPageContext} from "next";

export const fetchCourseWithLessons = async (ctx: NextPageContext) => {
    let headers = {
        "Authorization": `${process.env.AUTHORIZATION}`,
        "Host": `${process.env.HOST}`
    };
    let requestOptions = {
        method: 'GET',
        headers: headers,
    };

    let res = await fetch(`${process.env.API_HOST}/preview-courses/${ctx.query.courseID}`, requestOptions)
    let course: ICourseWithLessons = await res.json();
    return {course: {...course}};
}