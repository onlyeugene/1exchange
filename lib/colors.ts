export const colors = {
  primary: {
    blue: "#0f98c1",
    darkBlue: "#0f98c10",
    lightBlue: "#2fb6ff",
    light: "#ffffff",
  },
  secondary: {
    // Add secondary colors here
  },
  accent: {
    // Add accent colors here
  },
  text: {
    primary: "#ffffff",
    secondary: "#6b7280",
    dark: "#1f2937",
    light: "#ffffff",
    gray: "#6b7280",
  },
  background: {
    light: "#2fb6ff",
    dark: "#111827",
    blue: "#0f98c1",
  },
} as const;

// Type for color keys
export type ColorKey = keyof typeof colors;
