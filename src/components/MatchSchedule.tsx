import { Stadium } from '../data/stadiums';
import { motion } from 'motion/react';

interface MatchScheduleProps {
  stadium: Stadium | null;
}

export default function MatchSchedule({ stadium }: MatchScheduleProps) {
  if (!stadium) return null;

  return (
    <section className="mb-20">
      <div className="mb-10 text-center">
        <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">Broadcast Schedule</span>
        <h2 className="text-4xl font-headline font-black text-primary uppercase mt-2">{stadium.name} Fixtures</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stadium.matches.map((match, idx) => {
          const isLive = idx === 0;
          return (
            <motion.div 
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 relative group hover:shadow-md transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-1 flex">
                <div className={`flex-grow ${isLive ? 'bg-primary' : 'bg-secondary'}`}></div>
                <div className="flex-grow bg-white"></div>
                <div className={`flex-grow ${isLive ? 'bg-secondary' : 'bg-primary'}`}></div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black text-primary/40 tracking-widest">FIXTURE #{String(idx + 1).padStart(2, '0')}</span>
                <span className={`text-[10px] font-black ${isLive ? 'text-secondary' : 'text-on-surface-variant'}`}>
                  {isLive ? 'NEXT UP' : 'UPCOMING'}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-4 bg-surface-container-high rounded-sm"></div>
                    <span className="text-sm font-bold text-primary">{match.teams.split(' vs ')[0]}</span>
                  </div>
                  <span className="text-xs font-medium text-on-surface-variant">vs</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-primary">{match.teams.split(' vs ')[1]}</span>
                    <div className="w-6 h-4 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-surface-container text-center">
                  <div className="text-xs font-bold text-primary uppercase">
                    {new Date(match.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-[10px] text-on-surface-variant">{match.stage}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
