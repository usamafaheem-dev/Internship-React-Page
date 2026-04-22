import { useState } from 'react';
import { X } from 'lucide-react';
import videoImage1 from '../assets/images/videosectioniamge1.jpg';
import videoImage2 from '../assets/images/videosectioniamge2.jpg';

const promoData = [
  {
    id: 1,
    title: 'Study at Eduversita',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    bgColor: 'bg-[#a4c639]',
    playIconColor: 'text-[#a4c639]',
    image: videoImage1,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Campus Life & Community',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    bgColor: 'bg-[#ff6347]',
    playIconColor: 'text-[#ff6347]',
    image: videoImage2,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const PromoBlock = ({ title, description, bgColor, playIconColor, image, videoUrl, onPlayClick }) => {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      {/* Text Panel */}
      <div className={`${bgColor} w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative`}>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-white text-base md:text-lg mb-8 leading-relaxed opacity-95">
          {description}
        </p>
        
        {/* Play Button */}
        <button
          onClick={() => onPlayClick(videoUrl)}
          className="group w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative"
          aria-label="Play video"
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></div>
          <svg
            className={`${playIconColor} w-8 h-8 md:w-10 md:h-10 ml-1 relative z-10 group-hover:scale-110 transition-transform`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Image Panel */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close video"
        >
          <X size={32} />
        </button>
        
        {/* Video Frame */}
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Promotional Video"
        ></iframe>
      </div>
    </div>
  );
};

const VideoPromoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayClick = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <section className="relative bg-gray-100 py-12 md:py-16 lg:py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {promoData.map((promo) => (
              <div key={promo.id} className="w-full lg:w-1/2">
                <PromoBlock
                  title={promo.title}
                  description={promo.description}
                  bgColor={promo.bgColor}
                  playIconColor={promo.playIconColor}
                  image={promo.image}
                  videoUrl={promo.videoUrl}
                  onPlayClick={handlePlayClick}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal videoUrl={activeVideo} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default VideoPromoSection;
