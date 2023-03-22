export class Pokemon {
  id: number;
  name: string;
  num: string;
  height: string;
  weight: string;
  type: Array<string>;
  spawn_chance: number;
  egg?: string;
  img?: string;
  candy?: string;
  avg_spawns?: number;
  spawn_time?: string;
  weaknesses?: Array<string>;
  candy_count?: number;
  multipliers?: Array<number> | null;
  next_evolution?: Array<{ num: string; name: string }>;
  prev_evolution?: Array<{ num: string; name: string }>;

  constructor(
    name: string = "Enter a name...",
    num: string = "Enter pokemon's 3 digits ID to get its its Picture...",
    height: string = "1 m",
    weight: string = "1 kg",
    type: Array<string> = ["Normal"],
    spawn_chance: number = 1
  ) {
    this.name = name;
    this.num = num;
    this.height = height;
    this.weight = weight;
    this.type = type;
    this.spawn_chance = spawn_chance;
  }
}
