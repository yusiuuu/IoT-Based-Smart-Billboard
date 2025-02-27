import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ src, muted }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [src]);

    return (
        <video ref={videoRef} autoPlay muted={muted} controls={false} className="video-player">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
