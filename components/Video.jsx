import dynamic from 'next/dynamic'

const ReactHlsPlayer = dynamic(() => import('react-hls-player'), {
    ssr: false,
})

export default function Video(props){
    return (
        <ReactHlsPlayer
            poster={props.preview}
            src={props.url}
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
            hlsConfig={{
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                lowLatencyMode: true,
            }}
        />
    );
};

