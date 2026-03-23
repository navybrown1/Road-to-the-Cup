import { useState } from 'react';
import { Stadium } from '../data/stadiums';
import { motion } from 'motion/react';

interface ComparisonTableProps {
  stadiums: Stadium[];
  onSelectStadium: (stadium: Stadium) => void;
  selectedStadium: Stadium | null;
}

type SortOption = 'distance' | 'capacity' | 'date';

export default function ComparisonTable({ stadiums, onSelectStadium, selectedStadium }: ComparisonTableProps) {
  const [sortBy, setSortBy] = useState<SortOption>('distance');
  const [countryFilter, setCountryFilter] = useState<string>('All');

  const filteredStadiums = stadiums.filter(s => countryFilter === 'All' || s.country === countryFilter);
  
  const sortedStadiums = [...filteredStadiums].sort((a, b) => {
    if (sortBy === 'distance') return a.distance - b.distance;
    if (sortBy === 'capacity') return b.capacity - a.capacity;
    if (sortBy === 'date') return new Date(a.matches[0].date).getTime() - new Date(b.matches[0].date).getTime();
    return 0;
  });

  return (
    <section className="mb-16">
      <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 overflow-x-auto">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-4xl font-headline font-black text-primary tracking-tighter mb-4 uppercase">The Venue Comparison</h2>
          <p className="text-on-surface-variant mb-6">Direct data intelligence for your 2026 road trip planning. Compare drive logistics and stadium capacity across the East Coast & Canada corridor.</p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-on-surface-variant uppercase">Country:</span>
              <select 
                value={countryFilter} 
                onChange={(e) => setCountryFilter(e.target.value)}
                className="bg-white border-none rounded-lg text-sm px-3 py-1.5 focus:ring-2 focus:ring-primary/20"
              >
                <option value="All">All</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-on-surface-variant uppercase">Sort By:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-white border-none rounded-lg text-sm px-3 py-1.5 focus:ring-2 focus:ring-primary/20"
              >
                <option value="distance">Shortest Travel Time</option>
                <option value="capacity">Highest Capacity</option>
                <option value="date">Earliest Match Date</option>
              </select>
            </div>
          </div>
        </div>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest">
              <th className="pb-4 pl-4">Venue Name</th>
              <th className="pb-4">Location</th>
              <th className="pb-4">Drive Distance (Drum)</th>
              <th className="pb-4">Capacity</th>
              <th className="pb-4">First Match</th>
              <th className="pb-4 pr-4 text-right">Route Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedStadiums.map((stadium) => (
              <motion.tr 
                key={stadium.id}
                onClick={() => onSelectStadium(stadium)}
                whileHover={{ scale: 1.01 }}
                className={`bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] group hover:bg-primary hover:text-white transition-colors cursor-pointer ${selectedStadium?.id === stadium.id ? 'ring-2 ring-secondary' : ''}`}
              >
                <td className="py-6 pl-6 font-bold font-headline">{stadium.name}</td>
                <td className="py-6">{stadium.city}</td>
                <td className="py-6">{stadium.distance} Miles</td>
                <td className="py-6">{stadium.capacity.toLocaleString()}</td>
                <td className="py-6">{new Date(stadium.matches[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</td>
                <td className="py-6 pr-6 text-right">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    stadium.status === 'Open' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 
                    stadium.status === 'Congested' ? 'bg-secondary text-white' : 
                    'bg-surface-container-high text-on-surface-variant group-hover:text-primary'
                  }`}>
                    {stadium.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
