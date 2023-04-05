import {ICourse} from "../types/ICourse";

export const fetchCoursesPreview = async () => {
    let headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0.Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM",
        "Host": "api.wisey.app"
    };
    let requestOptions = {
        method: 'GET',
        headers: headers,
    };
    let res = await fetch(`http://api.wisey.app/api/v1/core/preview-courses`, requestOptions)
    let data: { courses: ICourse[] } = await res.json();
    let countPages = Math.ceil((data.courses.length || 1) / 10);
    return {courses: data.courses, countPages: countPages};
}