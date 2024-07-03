/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(0, 0%, 20%)", // Dark grey for borders
        input: "hsl(0, 0%, 90%)", // Light grey for input backgrounds
        ring: "hsl(0, 0%, 50%)", // Mid grey for focus rings
        background: "hsl(0, 0%, 0%)", // Very dark grey for background
        foreground: "hsl(0, 0%, 100%)", // White for foreground text
        primary: {
          DEFAULT: "hsl(0, 100%, 50%)", // Red for primary color (Deadpool)
          foreground: "hsl(0, 0%, 100%)", // White for primary foreground
        },
        secondary: {
          DEFAULT: "hsl(45, 100%, 50%)", // Yellow for secondary color (Wolverine)
          foreground: "hsl(0, 0%, 0%)", // Black for secondary foreground
        },
        destructive: {
          DEFAULT: "hsl(0, 100%, 30%)", // Dark red for destructive actions
          foreground: "hsl(0, 0%, 100%)", // White for destructive foreground
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 60%)", // Light grey for muted text
          foreground: "hsl(0, 0%, 10%)", // Very dark grey for muted foreground
        },
        accent: {
          DEFAULT: "hsl(220, 100%, 50%)", // Blue for accent color (Wolverine)
          foreground: "hsl(0, 0%, 100%)", // White for accent foreground
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 20%)", // Dark grey for popovers
          foreground: "hsl(0, 0%, 100%)", // White for popover foreground
        },
        card: {
          DEFAULT: "hsl(0, 0%, 15%)", // Very dark grey for cards
          foreground: "hsl(0, 0%, 100%)", // White for card foreground
        },
      },      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}