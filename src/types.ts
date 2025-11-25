export interface Match {
  id: string;
  sport: string;
  league: string;
  teams: string;
  matchTime: string;
  prediction: string;
  odds: number;
  confidence: number;
  reasoning: string;
  isLive: boolean;
  market?: string;
}

export interface Ticket {
  id: string;
  strategy: 'The Iron Bank' | 'The Bookie Basher' | 'The High-Yield Assassin';
  matches: Match[];
  totalOdds: number;
  confidence: number;
  timestamp: string;
  reasoning: string;
  mathematicalEdge: number;
}

export interface AppState {
  tickets: Ticket[];
  isLoading: boolean;
  error: string | null;
  mode: '24h' | 'live' | 'betbuilder';
  riskLevel: 'safe' | 'balanced' | 'risky';
  sportFilter: string;
  darkMode: boolean;
  history: Ticket[];
}
