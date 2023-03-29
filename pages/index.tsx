import * as React from "react";
import Grid from "@mui/system/Unstable_Grid";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import {Box, Pagination, Skeleton} from "@mui/material";
import {Stack} from "@mui/system";
import CourseCard from "../components/CourseCard/CourseCard";
import Layout from "../components/Layout";
import {useCoursePreview} from "../hooks/useCoursePreview";
import styles from "../styles/pages-styles/index-page.module.scss"

export default function Home() {
    const {courses, countPages} = useCoursePreview()
    const [page, setPage] = useState(1);
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
                                <Grid xs={1} className={styles.gridCenter} key={item.id}>
                                    <Link href={`/lesson/${item.id}`}><CourseCard data={item}/></Link>
                                </Grid>)
                            }
                        </Grid>
                        <Stack spacing={2} className={styles.pagination}>
                            <Pagination count={countPages} page={page} onChange={pageHandleChange}/>
                        </Stack>
                    </>

                )
                : (
                    <>
                        <Grid container spacing={{xs: 1, sm: 1, md: 3}} columns={{xs: 1, sm: 2, md: 2, xl: 5}}>
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) =>
                                    <Grid xs={1}
                                        // className={styles.gridCenter}
                                          sx={{display: 'flex', justifyContent: "center"}}
                                          key={item}>
                                        <Skeleton variant="rectangular" animation="wave" sx={{width: 300}}
                                                  height={345}/>
                                    </Grid>)
                            }
                        </Grid>
                        <Box className={styles.skeletonBox}>
                            <Skeleton variant="rectangular" animation="wave" className={styles.skeletonCard}/>
                        </Box>
                    </>
                )
            }
        </Layout>
    )
}
