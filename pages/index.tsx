import CourseCard from "../components/CourseCard";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import {ICourseProps} from "../types/ICourse";

export default function Home() {
    const darkTheme = createTheme({
        components: {
            // Name of the component
        },
        palette: {
            mode: 'dark',
            primary: {
                light: '#757ce8',
                main: '#b2b0b0',
                dark: '#171717',
                contrastText: '#545454',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });

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
        fetchCourses().then(res => setCourses(res));
    }, [])

    console.log("courses");
    console.log(courses);
    let coursesFinal = courses == undefined ? {courses: []} : courses;
    return (
        <ThemeProvider theme={darkTheme}>
            <Typography variant="h2" gutterBottom color="text.primary">
                Choose your courses!
            </Typography>
            <Grid container spacing={{xs: 1, sm: 1, md: 3}} columns={{xs: 1, sm: 2, md: 4, xl: 5}}>
                {coursesFinal.courses.map((item) =>
                <Grid xs={1} sx={{display: 'flex', justifyContent: "center"}}>
                    <Link href='#'><CourseCard data={item}/></Link>
                </Grid>)
                }
            </Grid>
        </ThemeProvider>
    )
}
