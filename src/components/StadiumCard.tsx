import { useState } from 'react';
import { Stadium } from '../data/stadiums';
import { MapPin, Navigation, Clock, Users, Calendar, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { GalleryModal } from './GalleryModal';

interface StadiumCardProps {
  key?: string | number;
  stadium: Stadium;
  onClick: () => void;
  isSelected: boolean;
}

export default function StadiumCard({ stadium, onClick, isSelected }: StadiumCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group border ${isSelected ? 'border-secondary ring-2 ring-secondary/20' : 'border-outline-variant/10'}`}
      >
        <div className="h-48 relative overflow-hidden">
          <img 
            src={stadium.image} 
            alt={stadium.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4">
            <div className="flex bg-white rounded-full overflow-hidden shadow-md h-6 items-center pr-3">
              <div className={`w-2 h-full ${stadium.country === 'USA' ? 'bg-primary' : stadium.country === 'Canada' ? 'bg-secondary' : 'bg-green-600'}`}></div>
              <div className="w-2 h-full bg-white"></div>
              <div className="w-2 h-full bg-secondary"></div>
              <span className="ml-2 text-[8px] font-black uppercase text-primary">Host: {stadium.country}</span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsGalleryOpen(true);
            }}
            className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100 flex items-center gap-2"
          >
            <ImageIcon size={16} />
            <span className="text-xs font-medium pr-1">Gallery</span>
          </button>
        </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-headline font-bold text-primary">{stadium.name}</h4>
          <span className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-black text-primary uppercase">{stadium.city.split(',')[0]}</span>
        </div>
        <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">{stadium.description}</p>
        
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-on-surface-variant flex items-center gap-1.5"><Navigation size={14} /> {stadium.travelMode === 'Driving' ? 'Drive' : 'Flight'} from Drum:</span>
            <span className="text-primary font-bold">{stadium.travelTime}</span>
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span className="text-on-surface-variant flex items-center gap-1.5"><MapPin size={14} /> Distance:</span>
            <span className="text-primary font-bold">{stadium.distance} Miles</span>
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span className="text-on-surface-variant flex items-center gap-1.5"><Users size={14} /> Capacity:</span>
            <span className="text-primary font-bold">{stadium.capacity.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </motion.div>

    <GalleryModal
      isOpen={isGalleryOpen}
      onClose={() => setIsGalleryOpen(false)}
      images={stadium.gallery || [stadium.image]}
      title={`${stadium.name}, ${stadium.city}`}
    />
  </>
  );
}
