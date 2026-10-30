import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: { extend: {
    colors: { paper: "#F6F8FB", ink: "#14213D", rule: "#D3DAE6", muted: "#586377", teal: "#0F766E" },
    fontFamily: {
      serif: ["Charter", "Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
      sans: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
    } } },
} satisfies Config;
