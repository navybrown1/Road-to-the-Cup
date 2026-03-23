export type Match = {
  id: string;
  date: string;
  stage: string;
  teams: string;
};

export type Stadium = {
  id: string;
  name: string;
  city: string;
  country: 'USA' | 'Canada' | 'Mexico';
  capacity: number;
  distance: number;
  travelTime: string;
  travelMode: 'Driving' | 'Flight';
  coordinates: [number, number];
  matches: Match[];
  image: string;
  gallery: string[];
  description: string;
  status: 'Open' | 'Congested' | 'Flight Rec';
};

export const FORT_DRUM_COORDS: [number, number] = [44.0333, -75.7667];

export const STADIUMS: Stadium[] = [
  {
    id: 'toronto',
    name: 'BMO Field',
    city: 'Toronto, ON',
    country: 'Canada',
    capacity: 45000,
    distance: 178,
    travelTime: '3h 15m',
    travelMode: 'Driving',
    coordinates: [43.6332, -79.4186],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/BMO_Field_in_2016.png',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/BMO_Field_in_2016.png',
      'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'Just a 3-hour cruise from Fort Drum. Perfect for a same-day international fixture experience. Note border-crossing relevance.',
    status: 'Open',
    matches: [
      { id: 'm3', date: '2026-06-12', stage: 'Group Stage', teams: 'Canada vs TBD' },
      { id: 'm21', date: '2026-06-17', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm33', date: '2026-06-20', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm46', date: '2026-06-23', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm62', date: '2026-06-26', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm83', date: '2026-07-02', stage: 'Round of 32', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'boston',
    name: 'Gillette Stadium',
    city: 'Foxborough, MA',
    country: 'USA',
    capacity: 65878,
    distance: 320,
    travelTime: '5h 15m',
    travelMode: 'Driving',
    coordinates: [42.0909, -71.2643],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gillette_Stadium_%28Top_View%29.jpg/1280px-Gillette_Stadium_%28Top_View%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gillette_Stadium_%28Top_View%29.jpg/1280px-Gillette_Stadium_%28Top_View%29.jpg',
      'https://images.unsplash.com/photo-1506522063241-19525c3c0428?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'A great drivable option near Boston. Experience the historic New England area while catching World Cup action.',
    status: 'Open',
    matches: [
      { id: 'bos1', date: '2026-06-13', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'bos2', date: '2026-06-16', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'bos3', date: '2026-06-19', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'bos4', date: '2026-06-23', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'bos5', date: '2026-06-26', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'bos6', date: '2026-06-29', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'bos7', date: '2026-07-09', stage: 'Quarter-final', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'nynj',
    name: 'MetLife Stadium',
    city: 'East Rutherford, NJ',
    country: 'USA',
    capacity: 82500,
    distance: 295,
    travelTime: '5h 15m',
    travelMode: 'Driving',
    coordinates: [40.8128, -74.0745],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Metlife_stadium_%28Aerial_view%29.jpg/1280px-Metlife_stadium_%28Aerial_view%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Metlife_stadium_%28Aerial_view%29.jpg/1280px-Metlife_stadium_%28Aerial_view%29.jpg',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'Host of the Grand Final. The pinnacle of the 2026 tournament experience.',
    status: 'Open',
    matches: [
      { id: 'm8', date: '2026-06-13', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm17', date: '2026-06-16', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm41', date: '2026-06-22', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm56', date: '2026-06-25', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm67', date: '2026-06-27', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm91', date: '2026-07-05', stage: 'Round of 16', teams: 'TBD vs TBD' },
      { id: 'm97', date: '2026-07-11', stage: 'Quarter-final', teams: 'TBD vs TBD' },
      { id: 'm104', date: '2026-07-19', stage: 'Final', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'philly',
    name: 'Lincoln Financial Field',
    city: 'Philadelphia, PA',
    country: 'USA',
    capacity: 67594,
    distance: 380,
    travelTime: '6h 30m',
    travelMode: 'Driving',
    coordinates: [39.9008, -75.1675],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lincoln_Financial_Field_%28Aerial_view%29.jpg/1280px-Lincoln_Financial_Field_%28Aerial_view%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lincoln_Financial_Field_%28Aerial_view%29.jpg/1280px-Lincoln_Financial_Field_%28Aerial_view%29.jpg',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598424268688-61614949514f?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'The historic heart of the East Coast leg, known for its electric atmosphere.',
    status: 'Congested',
    matches: [
      { id: 'm9', date: '2026-06-14', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm29', date: '2026-06-19', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm42', date: '2026-06-22', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm55', date: '2026-06-25', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm68', date: '2026-06-27', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm89', date: '2026-07-04', stage: 'Round of 16', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'miami',
    name: 'Hard Rock Stadium',
    city: 'Miami Gardens, FL',
    country: 'USA',
    capacity: 64767,
    distance: 1450,
    travelTime: '3h 30m',
    travelMode: 'Flight',
    coordinates: [25.9580, -80.2389],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hard_Rock_Stadium_for_Super_Bowl_LIV_%2849606710103%29.jpg/1280px-Hard_Rock_Stadium_for_Super_Bowl_LIV_%2849606710103%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hard_Rock_Stadium_for_Super_Bowl_LIV_%2849606710103%29.jpg/1280px-Hard_Rock_Stadium_for_Super_Bowl_LIV_%2849606710103%29.jpg',
      'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533760581984-753ee014c330?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'Best Florida option. Flight-based travel estimate from SYR/JFK is more practical than driving.',
    status: 'Flight Rec',
    matches: [
      { id: 'm13', date: '2026-06-15', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm39', date: '2026-06-21', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm54', date: '2026-06-24', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm71', date: '2026-06-27', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm86', date: '2026-07-03', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'm99', date: '2026-07-11', stage: 'Quarter-final', teams: 'TBD vs TBD' },
      { id: 'm103', date: '2026-07-18', stage: 'Third place play-off', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'vancouver',
    name: 'BC Place',
    city: 'Vancouver, BC',
    country: 'Canada',
    capacity: 54500,
    distance: 2780,
    travelTime: '7h 00m',
    travelMode: 'Flight',
    coordinates: [49.2768, -123.1120],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/1280px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/1280px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg',
      'https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560814304-4f05b62af116?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'Not realistically drivable for most travelers. Better by air.',
    status: 'Flight Rec',
    matches: [
      { id: 'm6', date: '2026-06-13', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm27', date: '2026-06-18', stage: 'Group Stage', teams: 'Canada vs TBD' },
      { id: 'm40', date: '2026-06-21', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm51', date: '2026-06-24', stage: 'Group Stage', teams: 'Canada vs TBD' },
      { id: 'm64', date: '2026-06-26', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm85', date: '2026-07-02', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'm96', date: '2026-07-07', stage: 'Round of 16', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'mexicocity',
    name: 'Estadio Azteca',
    city: 'Mexico City',
    country: 'Mexico',
    capacity: 87523,
    distance: 2550,
    travelTime: '5h 45m',
    travelMode: 'Flight',
    coordinates: [19.3029, -99.1505],
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2069&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'The cathedral of North American soccer, hosting its third World Cup opening. Best Mexico option.',
    status: 'Flight Rec',
    matches: [
      { id: 'm1', date: '2026-06-11', stage: 'Group Stage', teams: 'Mexico vs TBD' },
      { id: 'm24', date: '2026-06-17', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'm53', date: '2026-06-24', stage: 'Group Stage', teams: 'Mexico vs TBD' },
      { id: 'm79', date: '2026-06-30', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'm92', date: '2026-07-05', stage: 'Round of 16', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'la',
    name: 'SoFi Stadium',
    city: 'Los Angeles, CA',
    country: 'USA',
    capacity: 70240,
    distance: 2780,
    travelTime: '6h 00m',
    travelMode: 'Flight',
    coordinates: [33.9534, -118.3387],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/SoFi_Stadium_2023.jpg/1280px-SoFi_Stadium_2023.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/SoFi_Stadium_2023.jpg/1280px-SoFi_Stadium_2023.jpg',
      'https://images.unsplash.com/photo-1580659328774-c2741f586648?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'State-of-the-art venue hosting the USMNT opening match and a quarter-final.',
    status: 'Flight Rec',
    matches: [
      { id: 'la1', date: '2026-06-12', stage: 'Group Stage', teams: 'USA vs TBD' },
      { id: 'la2', date: '2026-06-15', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'la3', date: '2026-06-21', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'la4', date: '2026-06-25', stage: 'Group Stage', teams: 'USA vs TBD' },
      { id: 'la5', date: '2026-06-28', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'la6', date: '2026-07-02', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'la7', date: '2026-07-10', stage: 'Quarter-final', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'seattle',
    name: 'Lumen Field',
    city: 'Seattle, WA',
    country: 'USA',
    capacity: 69000,
    distance: 2700,
    travelTime: '5h 45m',
    travelMode: 'Flight',
    coordinates: [47.5952, -122.3316],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Qwest_Field_North.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Qwest_Field_North.jpg',
      'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542223616-740d5dff7f56?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'Known for its incredible noise levels, hosting the USMNT second group stage match.',
    status: 'Flight Rec',
    matches: [
      { id: 'sea1', date: '2026-06-15', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'sea2', date: '2026-06-19', stage: 'Group Stage', teams: 'USA vs TBD' },
      { id: 'sea3', date: '2026-06-24', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'sea4', date: '2026-06-26', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'sea5', date: '2026-07-01', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'sea6', date: '2026-07-06', stage: 'Round of 16', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'dallas',
    name: 'AT&T Stadium',
    city: 'Arlington, TX',
    country: 'USA',
    capacity: 80000,
    distance: 1500,
    travelTime: '4h 00m',
    travelMode: 'Flight',
    coordinates: [32.7473, -97.0945],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg/1280px-Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg/1280px-Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg',
      'https://images.unsplash.com/photo-1531218150217-5afc46c55585?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'A massive indoor venue hosting 9 matches, including a highly anticipated Semi-Final.',
    status: 'Flight Rec',
    matches: [
      { id: 'dal1', date: '2026-06-14', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'dal2', date: '2026-06-17', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'dal3', date: '2026-06-22', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'dal4', date: '2026-06-25', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'dal5', date: '2026-06-27', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'dal6', date: '2026-06-30', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'dal7', date: '2026-07-03', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'dal8', date: '2026-07-06', stage: 'Round of 16', teams: 'TBD vs TBD' },
      { id: 'dal9', date: '2026-07-14', stage: 'Semi-final', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'atlanta',
    name: 'Mercedes-Benz Stadium',
    city: 'Atlanta, GA',
    country: 'USA',
    capacity: 71000,
    distance: 950,
    travelTime: '2h 30m',
    travelMode: 'Flight',
    coordinates: [33.7554, -84.4006],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mercedes_Benz_Stadium_time_lapse_capture_2017-08-13.jpg/1280px-Mercedes_Benz_Stadium_time_lapse_capture_2017-08-13.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mercedes_Benz_Stadium_time_lapse_capture_2017-08-13.jpg/1280px-Mercedes_Benz_Stadium_time_lapse_capture_2017-08-13.jpg',
      'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'Architectural marvel hosting 8 matches, including the other Semi-Final.',
    status: 'Flight Rec',
    matches: [
      { id: 'atl1', date: '2026-06-15', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'atl2', date: '2026-06-18', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'atl3', date: '2026-06-21', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'atl4', date: '2026-06-24', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'atl5', date: '2026-06-27', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'atl6', date: '2026-07-01', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'atl7', date: '2026-07-07', stage: 'Round of 16', teams: 'TBD vs TBD' },
      { id: 'atl8', date: '2026-07-15', stage: 'Semi-final', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'houston',
    name: 'NRG Stadium',
    city: 'Houston, TX',
    country: 'USA',
    capacity: 72220,
    distance: 1650,
    travelTime: '4h 30m',
    travelMode: 'Flight',
    coordinates: [29.6847, -95.4107],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nrg_stadium.jpg/1280px-Nrg_stadium.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nrg_stadium.jpg/1280px-Nrg_stadium.jpg',
      'https://images.unsplash.com/photo-1555580168-9c7ee808b8b0?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516889441113-132d7310df04?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'A major hub in Texas hosting several key matches.',
    status: 'Flight Rec',
    matches: [
      { id: 'hou1', date: '2026-06-14', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'hou2', date: '2026-06-17', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'hou3', date: '2026-06-20', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'hou4', date: '2026-06-23', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'hou5', date: '2026-06-26', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'hou6', date: '2026-06-29', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'hou7', date: '2026-07-04', stage: 'Round of 16', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'kansascity',
    name: 'Arrowhead Stadium',
    city: 'Kansas City, MO',
    country: 'USA',
    capacity: 76416,
    distance: 1150,
    travelTime: '3h 30m',
    travelMode: 'Flight',
    coordinates: [39.0489, -94.4839],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg/1280px-Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg/1280px-Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg',
      'https://images.unsplash.com/photo-1590880449155-b54f958ce314?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'Known for its loud fans, this stadium will be a fortress in the Midwest.',
    status: 'Flight Rec',
    matches: [
      { id: 'kc1', date: '2026-06-16', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'kc2', date: '2026-06-20', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'kc3', date: '2026-06-25', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'kc4', date: '2026-06-27', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'kc5', date: '2026-07-03', stage: 'Round of 32', teams: 'TBD vs TBD' },
      { id: 'kc6', date: '2026-07-11', stage: 'Quarter-final', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'sfbay',
    name: 'Levi\'s Stadium',
    city: 'Santa Clara, CA',
    country: 'USA',
    capacity: 68500,
    distance: 2900,
    travelTime: '6h 30m',
    travelMode: 'Flight',
    coordinates: [37.4032, -121.9698],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Levi%27s_Stadium_in_February_2016_prior_to_Super_Bowl_50_%2824398261729%29.jpg/1280px-Levi%27s_Stadium_in_February_2016_prior_to_Super_Bowl_50_%2824398261729%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Levi%27s_Stadium_in_February_2016_prior_to_Super_Bowl_50_%2824398261729%29.jpg/1280px-Levi%27s_Stadium_in_February_2016_prior_to_Super_Bowl_50_%2824398261729%29.jpg',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'High-tech stadium in the heart of Silicon Valley.',
    status: 'Flight Rec',
    matches: [
      { id: 'sf1', date: '2026-06-13', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'sf2', date: '2026-06-16', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'sf3', date: '2026-06-19', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'sf4', date: '2026-06-22', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'sf5', date: '2026-06-25', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'sf6', date: '2026-07-01', stage: 'Round of 32', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'guadalajara',
    name: 'Estadio Akron',
    city: 'Zapopan, Jalisco',
    country: 'Mexico',
    capacity: 48000,
    distance: 2400,
    travelTime: '6h 00m',
    travelMode: 'Flight',
    coordinates: [20.6817, -103.4626],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho_%283%29.jpg/1280px-Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho_%283%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho_%283%29.jpg/1280px-Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho_%283%29.jpg',
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562057638-c6460fae2311?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'A beautiful modern stadium in Mexico.',
    status: 'Flight Rec',
    matches: [
      { id: 'gua1', date: '2026-06-11', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'gua2', date: '2026-06-18', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'gua3', date: '2026-06-23', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'gua4', date: '2026-06-26', stage: 'Group Stage', teams: 'TBD vs TBD' },
    ],
  },
  {
    id: 'monterrey',
    name: 'Estadio BBVA',
    city: 'Guadalupe, Nuevo León',
    country: 'Mexico',
    capacity: 53500,
    distance: 2000,
    travelTime: '5h 00m',
    travelMode: 'Flight',
    coordinates: [25.6698, -100.2444],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Estadio_BBVA_Bancomer_%281%29.jpg/1280px-Estadio_BBVA_Bancomer_%281%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Estadio_BBVA_Bancomer_%281%29.jpg/1280px-Estadio_BBVA_Bancomer_%281%29.jpg',
      'https://images.unsplash.com/photo-1605282540540-333065275817?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=2000&auto=format&fit=crop'
    ],
    description: 'Stunning stadium with views of the Cerro de la Silla mountain.',
    status: 'Flight Rec',
    matches: [
      { id: 'mon1', date: '2026-06-14', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'mon2', date: '2026-06-20', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'mon3', date: '2026-06-24', stage: 'Group Stage', teams: 'TBD vs TBD' },
      { id: 'mon4', date: '2026-06-29', stage: 'Round of 32', teams: 'TBD vs TBD' },
    ],
  }
];
