export interface ICourse {
    title: string,
    description: string,
    slug: string,
    id: number,
    lessonsCount: number,
    rating: number,
    tags: string[],
    previewImageLink: string
}


export interface ICourseWithLessons {
    containsLockedLessons: boolean,
    description: string,
    duration: number
    lessons: ILesson[],
    meta: {
        "slug": string,
        "skills": string[],
        "courseVideoPreview": {
            "link": string,
            "duration": number,
            "previewImageLink": string
        }
    }
    launchDate: string,
    title: string,
    id: string,
    rating: number,
    tags: string[],
    previewImageLink: string
}


export interface ILesson {
    id: string,
    link: string,
    order: number,
    previewImageLink: string,
    status: string,
    title: string,
    type: string,
}


