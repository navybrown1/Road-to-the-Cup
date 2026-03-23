import { useMemo, useState } from 'react';
import { STADIUMS } from '../data/stadiums';
import { Calendar as CalendarIcon, MapPin, Filter } from 'lucide-react';

export default function MatchCalendar() {
  const [filter, setFilter] = useState<string>('All');

  const allMatches = useMemo(() => {
    return STADIUMS.flatMap(stadium =>
      stadium.matches.map(match => ({
        ...match,
        stadiumName: stadium.name,
        city: stadium.city,
        country: stadium.country
      }))
    ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, []);

  const stages = ['All', ...Array.from(new Set(allMatches.map(m => m.stage)))];

  const filteredMatches = useMemo(() => {
    if (filter === 'All') return allMatches;
    return allMatches.filter(m => m.stage === filter);
  }, [allMatches, filter]);

  const matchesByDate = useMemo(() => {
    return filteredMatches.reduce((acc, match) => {
      if (!acc[match.date]) acc[match.date] = [];
      acc[match.date].push(match);
      return acc;
    }, {} as Record<string, typeof allMatches>);
  }, [filteredMatches]);

  const sortedDates = Object.keys(matchesByDate).sort();

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-headline font-bold text-primary">Tournament Calendar</h2>
          <p className="text-on-surface-variant">Comprehensive schedule across all tracked venues.</p>
        </div>
        
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-lg border border-outline-variant/20 overflow-x-auto max-w-full">
          <Filter size={16} className="text-on-surface-variant ml-2 shrink-0" />
          {stages.map(stage => (
            <button
              key={stage}
              onClick={() => setFilter(stage)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === stage 
                  ? 'bg-primary text-on-primary shadow-sm' 
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {sortedDates.length === 0 ? (
          <div className="text-center py-12 text-on-surface-variant bg-surface-container-lowest rounded-2xl border border-outline-variant/20">
            No matches found for the selected filter.
          </div>
        ) : (
          sortedDates.map(date => (
            <div key={date} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 border-b border-outline-variant/10 pb-3">
                <CalendarIcon size={20} className="text-secondary" />
                {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' })}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {matchesByDate[date].map(match => (
                  <div key={`${match.stadiumName}-${match.id}`} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-secondary/30 transition-colors">
                    <div className="text-[10px] font-black tracking-wider text-secondary uppercase mb-1.5">{match.stage}</div>
                    <div className="font-bold text-primary mb-3 text-lg leading-tight">{match.teams}</div>
                    <div className="text-xs text-on-surface-variant flex items-start gap-1.5">
                      <MapPin size={14} className="shrink-0 mt-0.5" />
                      <span>{match.stadiumName}<br/>{match.city}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
