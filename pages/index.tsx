import CourseCard from "../components/CourseCard";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";

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
    return (
        <ThemeProvider theme={darkTheme}>
            <CourseCard/>
        </ThemeProvider>
    )
}
