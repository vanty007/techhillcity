import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#E6F7FF" },
          100: { value: "#BAE7FF" },
          200: { value: "#91D5FF" },
          300: { value: "#69C0FF" },
          400: { value: "#40A9FF" },
          500: { value: "#0E0A31" }, // Primary cyan blue
          600: { value: "#0077CC" },
          700: { value: "#005AA3" },
          800: { value: "#003D7A" },
          900: { value: "#002152" },
          950: { value: "#001229" },
        },
      },
      fonts: {
        heading: {
          value:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
        body: {
          value:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: { _light: "{colors.brand.500}", _dark: "{colors.brand.400}" },
        },
        secondary: {
          value: { _light: "#FFFFFF", _dark: "#1A202C" },
        },
        accent: {
          value: { _light: "{colors.brand.600}", _dark: "{colors.brand.300}" },
        },
      },
    },
    breakpoints: {
      sm: "30em", // 480px
      md: "48em", // 768px
      lg: "62em", // 992px
      xl: "80em", // 1280px
      "2xl": "96em", // 1536px
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
