/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { STADIUMS, Stadium } from './data/stadiums';
import WorldCupMap from './components/Map';
import StadiumCard from './components/StadiumCard';
import ComparisonTable from './components/ComparisonTable';
import MatchSchedule from './components/MatchSchedule';
import MatchCalendar from './components/MatchCalendar';
import { Search, Bell, User, Car, Timer, Flag, AlertTriangle } from 'lucide-react';

export default function App() {
  const [selectedStadium, setSelectedStadium] = useState<Stadium | null>(STADIUMS[0]);

  const KICKOFF_DATE = new Date('2026-06-11T00:00:00Z');
  const daysToKickoff = Math.max(0, Math.ceil((KICKOFF_DATE.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)));

  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl h-20 flex justify-between items-center px-8 shadow-[0_12px_32px_rgba(0,21,62,0.06)]">
        <div className="text-2xl font-black tracking-tighter text-primary uppercase font-headline">
          UNITED 2026
        </div>
        <nav className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <a href="#" className="text-primary border-b-4 border-secondary pb-1">Driving Routes</a>
          <a href="#" className="text-primary/60 hover:text-primary transition-colors">Match Hub</a>
          <a href="#" className="text-primary/60 hover:text-primary transition-colors">Stadium Logistics</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <input 
              type="text" 
              placeholder="Search venues..." 
              className="bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary/20 w-64 text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
          </div>
          <button className="p-2 hover:bg-surface rounded-full transition-all duration-200">
            <Bell className="text-primary w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-surface rounded-full transition-all duration-200">
            <User className="text-primary w-5 h-5" />
          </button>
        </div>
      </header>

      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden lg:flex h-screen w-72 fixed left-0 top-20 flex-col p-6 gap-4 bg-surface-container-low font-body text-sm font-medium z-40">
        <div className="flex items-center gap-3 mb-6 px-2">
          <div className="w-10 h-10 rounded-xl victory-gradient flex items-center justify-center text-white font-bold">FD</div>
          <div>
            <div className="text-lg font-bold text-primary leading-tight">Fort Drum Hub</div>
            <div className="text-xs text-primary/60">New York Navigation</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          <a href="#" className="flex items-center gap-3 p-3 bg-white text-primary rounded-xl shadow-[0_4px_12px_rgba(0,21,62,0.04)] font-bold transition-transform duration-200 hover:translate-x-1">
            <Car className="w-5 h-5" />
            Road Trip Status
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-primary/70 hover:bg-white/50 rounded-xl transition-transform duration-200 hover:translate-x-1">
            <Timer className="w-5 h-5" />
            World Cup Countdown
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-primary/70 hover:bg-white/50 rounded-xl transition-transform duration-200 hover:translate-x-1">
            <Flag className="w-5 h-5" />
            Country Filter
          </a>
        </nav>
        <div className="mt-auto p-4 rounded-xl bg-white/40 border border-white/60">
          <div className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">Live Alert</div>
          <p className="text-xs mb-3 text-on-surface-variant">Border crossings at Thousand Islands showing 15min delays.</p>
          <button className="w-full py-2 bg-primary text-white rounded-lg text-xs font-bold uppercase transition-all active:scale-95">
            View Live Traffic
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-24 lg:pl-72 min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Hero Dashboard Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-tighter mb-4">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Live Planning Mode
                </div>
                <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary tracking-tighter leading-none mb-4">
                  The Road to the <br/><span className="text-secondary">World Cup.</span>
                </h1>
              </div>
              <div className="flex gap-4">
                <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 text-center">
                  <div className="text-3xl font-headline font-black text-primary leading-none">{daysToKickoff}</div>
                  <div className="text-[10px] font-bold uppercase text-on-surface-variant tracking-widest mt-1">Days to Kickoff</div>
                </div>
                <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 text-center">
                  <div className="text-3xl font-headline font-black text-secondary leading-none">06</div>
                  <div className="text-[10px] font-bold uppercase text-on-surface-variant tracking-widest mt-1">Prime Venues</div>
                </div>
              </div>
            </div>

            {/* Map and Insights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[500px]">
              <div className="h-[400px] lg:h-full lg:col-span-2">
                <WorldCupMap 
                  selectedStadium={selectedStadium} 
                  onSelectStadium={setSelectedStadium} 
                />
              </div>
              
              <div className="flex flex-col gap-6 lg:h-full lg:overflow-y-auto pr-2">
                <div className="bg-secondary-container p-6 rounded-xl relative overflow-hidden shrink-0">
                  <div className="relative z-10">
                    <Car className="text-white mb-4 w-8 h-8" />
                    <h4 className="text-white text-xl font-bold font-headline mb-1">Fuel Forecast</h4>
                    <p className="text-white/80 text-xs">Fort Drum to NY/NJ Corridor estimated at $42.50 round trip.</p>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <AlertTriangle className="w-32 h-32" />
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm shrink-0">
                  <h4 className="text-primary font-bold font-headline mb-4 flex items-center gap-2">
                    <Timer className="w-4 h-4" />
                    Quick Schedule
                  </h4>
                  <div className="space-y-4">
                    {[...STADIUMS].sort((a, b) => a.distance - b.distance).slice(0, 3).map(s => (
                      <div key={s.id} className="flex items-center justify-between pb-3 border-b border-surface-container last:border-0 last:pb-0">
                        <span className="text-xs font-bold text-on-surface-variant">{s.city.split(',')[0]} (Fixture {s.matches[0].id.replace('m', '')})</span>
                        <span className="text-xs font-black text-secondary uppercase">
                          {new Date(s.matches[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm shrink-0">
                  <h4 className="text-primary font-bold font-headline mb-4">Best Options For Me</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-on-surface-variant">Closest Venue:</span>
                      <span className="font-bold text-primary">{[...STADIUMS].sort((a, b) => a.distance - b.distance)[0].city.split(',')[0]} ({[...STADIUMS].sort((a, b) => a.distance - b.distance)[0].distance} mi)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface-variant">Fastest Trip:</span>
                      <span className="font-bold text-primary">{[...STADIUMS].sort((a, b) => parseInt(a.travelTime.split('h')[0]) * 60 + parseInt(a.travelTime.split('h')[1]) - (parseInt(b.travelTime.split('h')[0]) * 60 + parseInt(b.travelTime.split('h')[1])))[0].city.split(',')[0]} ({[...STADIUMS].sort((a, b) => parseInt(a.travelTime.split('h')[0]) * 60 + parseInt(a.travelTime.split('h')[1]) - (parseInt(b.travelTime.split('h')[0]) * 60 + parseInt(b.travelTime.split('h')[1])))[0].travelTime})</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface-variant">Best Int'l Option:</span>
                      <span className="font-bold text-primary">{STADIUMS.find(s => s.country !== 'USA')?.city.split(',')[0]}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface-variant">Best Mexico Option:</span>
                      <span className="font-bold text-primary">{STADIUMS.find(s => s.country === 'Mexico')?.city.split(',')[0]}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface-variant">Best Florida Option:</span>
                      <span className="font-bold text-primary">{STADIUMS.find(s => s.city.includes('FL'))?.city.split(',')[0]}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stadium Cards Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-headline font-black text-primary uppercase tracking-tighter">Premier Venues</h2>
              <div className="h-[2px] flex-grow bg-surface-container-high"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...STADIUMS].sort((a, b) => a.distance - b.distance).map(stadium => (
                <StadiumCard 
                  key={stadium.id} 
                  stadium={stadium} 
                  isSelected={selectedStadium?.id === stadium.id}
                  onClick={() => setSelectedStadium(stadium)} 
                />
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <ComparisonTable 
            stadiums={STADIUMS} 
            onSelectStadium={setSelectedStadium}
            selectedStadium={selectedStadium}
          />

          {/* Match Schedule */}
          <MatchSchedule stadium={selectedStadium} />

          {/* Full Tournament Calendar */}
          <div className="mt-16">
            <MatchCalendar />
          </div>

        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full h-20 bg-white/70 backdrop-blur-xl flex justify-around items-center border-t border-surface-container shadow-2xl z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Car className="w-6 h-6" />
          <span className="text-[10px] font-bold">Routes</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary/40">
          <Timer className="w-6 h-6" />
          <span className="text-[10px] font-bold">Fixtures</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary/40">
          <Flag className="w-6 h-6" />
          <span className="text-[10px] font-bold">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary/40">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold">Account</span>
        </button>
      </nav>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 lg:bottom-12 lg:right-12 w-16 h-16 rounded-full victory-gradient text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group z-40">
        <Car className="w-6 h-6" />
        <div className="absolute right-full mr-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg hidden lg:block">
          Plan New Roadtrip
        </div>
      </button>
    </div>
  );
}

