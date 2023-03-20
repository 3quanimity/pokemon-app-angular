export class Pokemon {
  id: number;
  egg: string;
  img: string;
  num: string;
  name: string;
  type: Array<string>;
  candy: string;
  height: string;
  weight: string;
  avg_spawns: number;
  spawn_time: string;
  weaknesses: Array<string>;
  candy_count?: number;
  multipliers?: Array<number> | null;
  spawn_chance: number;
  next_evolution?: Array<{ num: string; name: string }>;
  prev_evolution?: Array<{ num: string; name: string }>;
}
