import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
})

export interface IVideoProps {
    preview: string,
    url: string
}

export function Video(props: IVideoProps) {
    return (
        <div className="App">
            <ReactPlayer
                poster={props.preview}
                url={props.url}
                controls={true}
                width='100%'
                height='100%'
            />
        </div>
    );
}
