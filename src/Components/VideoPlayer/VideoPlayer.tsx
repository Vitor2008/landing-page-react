import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

interface IVideoPlayer {
    playState: boolean;
    setPlayState: (value: boolean) => void;
}

const VideoPlayer: React.FC<IVideoPlayer> = ({playState, setPlayState}) => {

    const player = useRef<HTMLDivElement>(null);

    const closePlayer = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} 
    onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
