import CourseCard from "../components/CourseCard";
import Grid from "@mui/system/Unstable_Grid";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import {ICourseProps} from "../types/ICourse";
import Layout from "../components/Layout";
import {Box, Pagination, Skeleton} from "@mui/material";
import * as React from "react";
import {Stack} from "@mui/system";

export default function Home() {
    async function fetchCourses() {
        let headers = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0.Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM",
            "Host": "api.wisey.app"
        };
        let requestOptions2 = {
            method: 'GET',
            headers: headers,
        };
        let res = await fetch("http://api.wisey.app/api/v1/core/preview-courses", requestOptions2)
        let courses: ICourseProps = await res.json();
        return courses;
    }

    const [courses, setCourses] = useState<ICourseProps>()
    useEffect(() => {
        fetchCourses().then(res => setCourses(res)).then(() =>
            setCountPages(Math.ceil(32 / 8)));
    }, [])

    const [page, setPage] = useState(1);
    const [countPages, setCountPages] = useState<number>(1);
    const pageHandleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Layout>
            <Typography variant="h2" gutterBottom color="text.primary">
                Choose your courses!
            </Typography>
            {courses !== undefined ? (
                    <>
                        <Grid container spacing={{xs: 1, sm: 1, md: 3}} columns={{xs: 1, sm: 2, md: 2, xl: 5}}>
                            {courses.courses.slice((page - 1) * 10, page * 10).map((item) =>
                                <Grid xs={1} sx={{display: 'flex', justifyContent: "center"}} key={item.id}>
                                    <Link href={`/lesson/${item.id}`}><CourseCard data={item} /></Link>
                                </Grid>)
                            }
                        </Grid>
                        <Stack spacing={2}
                               sx={{display: 'flex', justifyContent: "center", alignItems: 'center', margin: 2}}>
                            <Pagination count={countPages} page={page} onChange={pageHandleChange}/>
                        </Stack>
                    </>

                )
                : (
                    <>
                        <Grid container spacing={{xs: 1, sm: 1, md: 3}} columns={{xs: 1, sm: 2, md: 3, xl: 4}}>
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) =>
                                    <Grid xs={1} sx={{display: 'flex', justifyContent: "center"}} key={item}>
                                        <Skeleton variant="rectangular" animation="wave" sx={{width: 300}}
                                                  height={345}/>
                                    </Grid>)
                            }
                        </Grid>
                        <Box sx={{display: 'flex', justifyContent: "center", alignItems: 'center', margin: 2}}>
                            <Skeleton variant="rectangular" animation="wave" sx={{width: 300}} height={50}/>
                        </Box>
                    </>
                )
            }
        </Layout>
    )
}
