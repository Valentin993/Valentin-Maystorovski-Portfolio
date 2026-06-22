import { ComponentType } from 'react';
import { Layers, Sparkles, Laptop, Grid } from 'lucide-react';

export const serviceIconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Layers: Layers,
  Sparkles: Sparkles,
  Laptop: Laptop,
  Grid: Grid
};

