export interface ICourse{
    title: string,
    description: string,
    slug: string,
    id: number,
    lessonsCount: number,
    rating: number,
    tags: string[],
    previewImageLink: string
}
export interface ICourseProps {
    courses: ICourse[]
}
