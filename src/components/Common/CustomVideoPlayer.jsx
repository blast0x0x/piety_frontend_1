import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

const CustomVideoPlayer = ({ src, poster, className = "" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowControls(false);
      }
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  return (
    <div 
      className={`relative w-full h-auto cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        className="w-full h-auto rounded-lg"
        poster={poster}
        onEnded={handleVideoEnd}
        playsInline
        controls
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Button Overlay */}
      {showControls && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg transition-opacity duration-300">
          <button
            onClick={togglePlay}
            className="bg-white/90 hover:bg-white text-black rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-200 hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" fill='#000' />
            ) : (
              <Play className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ml-1" fill='#000' />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer