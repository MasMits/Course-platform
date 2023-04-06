import {ICourse} from "../types/ICourse";
import {useEffect, useState} from "react";

export interface ICourseProps {
    courses: ICourse[]
}

export function useCoursePreview() {
    async function fetchCourses() {
        let headers = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0.Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM",
            "Host": "api.wisey.app"
        };
        let requestOptions2 = {
            method: 'GET',
            headers: headers,
        };
        let res = await fetch("https://api.wisey.app/api/v1/core/preview-courses", requestOptions2)
        let courses: ICourseProps = await res.json();
        return courses;
    }

    const [courses, setCourses] = useState<ICourseProps>()
    const [countPages, setCountPages] = useState<number>();

    useEffect(() => {
        fetchCourses().then((res) => {
                setCourses(res);
                setCountPages(Math.ceil((res.courses.length || 1) / 10))
            }
        )
    }, [])

    return {courses: courses, countPages: countPages}
}