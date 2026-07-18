/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
    colors: {
      bg: '#0c0f0d',
      surface: '#131a15',
      'surface-raised': '#182018',
      ink: '#e8f5ec',
      muted: '#8fa89a',
      accent: '#5fcb93',
      'accent-dim': '#3f8c66',
      border: '#24352a',
    },
  },
};
export const plugins = [];
