const COLORS = [
  'red',
  'darkred',
  'pink',
  'hotpink',
  'orange',
  'gold',
  'yellow',
  'purple',
  'magenta',
  'indigo',
  'lime',
  'green',
  'darkgreen',
  'olive',
  'teal',
  'cyan',
  'lightblue',
  'blue',
  'navy',
  'brown',
  'maroon',
  'tan',
  'white',
  'silver',
  'gray',
  'black',
];

export const randomColor = (): string => {
  const index = Math.floor(Math.random() * COLORS.length);
  return COLORS[index];
}
