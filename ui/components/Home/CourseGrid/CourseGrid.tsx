import Grid from "@mui/system/Unstable_Grid";
import styles from "../../../styles/pages-styles/index-page.module.scss";
import Link from "next/link";
import CourseCard from "../CourseCard/CourseCard";
import {Stack} from "@mui/system";
import {Box, Pagination, Skeleton} from "@mui/material";
import * as React from "react";
import {ICourse} from "../../../../types/ICourse";
import {useState} from "react";

export interface ICourseProps {
    courses:  ICourse[]  | undefined
    countPages: number | undefined
}

const CourseGrid = ({courses, countPages}: ICourseProps) => {
    const [page, setPage] = useState(1);
    const pageHandleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    courses !== undefined && console.log(courses.length);
    return (
        <>
            {courses !== undefined ? (
                    <>
                        <Grid container spacing={{xs: 1, sm: 1, md: 3}} columns={{xs: 1, sm: 2, md: 3, xl: 4}}>
                            {courses.slice((page - 1) * 12, page * 12).map((item) =>
                                <Grid xs={1} className={styles.gridCenter} key={item.id}>
                                    <Link href={`/course/${item.id}`}><CourseCard data={item}/></Link>
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
                        <Grid container spacing={{xs: 1, sm: 1, md: 3}} columns={{xs: 1, sm: 2, md: 3, xl: 4}}>
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
        </>
    );
};

export default CourseGrid;