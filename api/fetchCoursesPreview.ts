import {ICourse} from "../types/ICourse";

export const fetchCoursesPreview = async () => {
    let headers = {
        "Authorization": `${process.env.AUTHORIZATION}`,
        "Host": `${process.env.HOST}`
    };
    let requestOptions = {
        method: 'GET',
        headers: headers,
    };
    let res = await fetch(`${process.env.API_HOST}/preview-courses`, requestOptions)
    let data: { courses: ICourse[] } = await res.json();
    let countPages = Math.ceil((data.courses.length || 1) / 10);
    return {courses: data.courses, countPages: countPages};
}