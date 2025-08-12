import memoize from "memoize";

export type Color = keyof typeof COLORS;
export type ColorCSSVariable = `--color-${Color}`;

//Definition of the colors kit used in the application
export const COLORS = {
  primary: "#00B98D",
  secondary: "#E3A55F",
  black: "#040404",
  error: "#D50000",
} as const;

//css variable for setting the css variables in the root css
export const COLORS_ROOT_STYLE = `
  :root {
 ${Object.entries(COLORS)
   .reduce((css, [key, value]) => `${css} --color-${key}: ${value};\n`, "")
   .trim()}
  }
  `.trim();

const getColor = (color: Color) => COLORS[color];
//я добавил сюда мемоизацию, чтобы каждый раз не аллоцировать память для создания новой строки
const getCSSVariable = memoize((color: Color) => `var(--color-${color})`);

export const colorsKit = {
  get: getColor,
  getCSSVariable: getCSSVariable,
} as const;
