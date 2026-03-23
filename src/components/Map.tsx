import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { STADIUMS, FORT_DRUM_COORDS, Stadium } from '../data/stadiums';
import { MapPin, Navigation, Clock, Users, Calendar } from 'lucide-react';

// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customIcon = (color: string) => new L.Icon({
  iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const getMarkerColor = (country: string) => {
  switch (country) {
    case 'USA': return 'blue';
    case 'Canada': return 'red';
    case 'Mexico': return 'green';
    default: return 'blue';
  }
};

interface MapProps {
  selectedStadium: Stadium | null;
  onSelectStadium: (stadium: Stadium) => void;
}

function MapController({ selectedStadium }: { selectedStadium: Stadium | null }) {
  const map = useMap();
  
  useEffect(() => {
    const centerCoords: [number, number] = [44.0333, -75.7667];
    console.log('MapController effect:', { selectedStadium, centerCoords });
    if (selectedStadium) {
      if (!selectedStadium.coordinates || isNaN(selectedStadium.coordinates[0]) || isNaN(selectedStadium.coordinates[1])) {
        console.error('Invalid coordinates for selected stadium:', selectedStadium);
        return;
      }
      map.flyTo(selectedStadium.coordinates, 6, { duration: 1.5 });
    } else {
      map.flyTo(centerCoords, 5, { duration: 1.5 });
    }
  }, [selectedStadium, map]);

  return null;
}

export default function WorldCupMap({ selectedStadium, onSelectStadium }: MapProps) {
  console.log('WorldCupMap render:', { selectedStadium, FORT_DRUM_COORDS, STADIUMS });
  
  if (!FORT_DRUM_COORDS || isNaN(FORT_DRUM_COORDS[0]) || isNaN(FORT_DRUM_COORDS[1])) {
    return <div>Error: Invalid FORT_DRUM_COORDS</div>;
  }

  const centerCoords: [number, number] = [44.0333, -75.7667];

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 relative z-0">
      <MapContainer 
        center={centerCoords} 
        zoom={5} 
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        <MapController selectedStadium={selectedStadium} />

        {/* Fort Drum Marker */}
        <Marker position={centerCoords} icon={customIcon('black')}>
          <Popup className="custom-popup">
            <div className="p-4">
              <div className="font-headline font-bold text-primary">Fort Drum, NY</div>
              <div className="text-xs text-on-surface-variant">Your Starting Point</div>
            </div>
          </Popup>
        </Marker>

        {/* Stadium Markers */}
        {STADIUMS.map((stadium) => {
          if (!stadium.coordinates || isNaN(stadium.coordinates[0]) || isNaN(stadium.coordinates[1])) {
            console.error('Invalid stadium coordinates:', stadium);
            return null;
          }
          return (
          <Marker 
            key={stadium.id} 
            position={stadium.coordinates}
            icon={customIcon(getMarkerColor(stadium.country))}
            eventHandlers={{
              click: () => onSelectStadium(stadium),
            }}
          >
            <Popup className="custom-popup">
              <div className="flex flex-col gap-3 p-4">
                <div className="h-24 w-full rounded-lg overflow-hidden relative">
                  <img src={stadium.image} alt={stadium.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold uppercase text-primary">
                    {stadium.country}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-headline font-bold text-lg text-primary leading-tight">{stadium.name}</h3>
                  <p className="text-xs text-on-surface-variant">{stadium.city}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <Navigation size={14} className="text-primary" />
                    <span>{stadium.distance} mi</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <Clock size={14} className="text-primary" />
                    <span>{stadium.travelTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <Users size={14} className="text-primary" />
                    <span>{stadium.capacity.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <Calendar size={14} className="text-primary" />
                    <span>{stadium.matches.length} Matches</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-surface-container">
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Next Match</div>
                  <div className="text-sm font-bold text-primary">{stadium.matches[0].teams}</div>
                  <div className="text-xs text-secondary">{new Date(stadium.matches[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                </div>
              </div>
            </Popup>
          </Marker>
        )})}

        {/* Travel Lines */}
        {STADIUMS.map((stadium) => {
          if (!stadium.coordinates || isNaN(stadium.coordinates[0]) || isNaN(stadium.coordinates[1])) {
            return null;
          }
          return (
          <Polyline 
            key={`line-${stadium.id}`}
            positions={[centerCoords, stadium.coordinates]}
            pathOptions={{ 
              color: selectedStadium?.id === stadium.id ? '#ba022d' : '#00153e', 
              weight: selectedStadium?.id === stadium.id ? 3 : 1,
              opacity: selectedStadium?.id === stadium.id ? 0.8 : 0.3,
              dashArray: stadium.travelMode === 'Flight' ? '5, 10' : undefined
            }}
          />
        )})}
      </MapContainer>
    </div>
  );
}
