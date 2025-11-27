import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          dark: "hsl(var(--gold-dark))",
          light: "hsl(var(--gold-light))",
        },
        chocolate: {
          DEFAULT: "hsl(var(--chocolate))",
          light: "hsl(var(--chocolate-light))",
        },
        "red-deep": "hsl(var(--red-deep))",
        "red-light": "hsl(var(--red-light))",
        "neon-pink": "hsl(var(--neon-pink))",
        "neon-magenta": "hsl(var(--neon-magenta))",
        "neon-yellow": "hsl(var(--neon-yellow))",
        "neon-red": "hsl(var(--neon-red))",
      },
      backgroundImage: {
        "gradient-warm": "var(--gradient-warm)",
        "gradient-gold": "var(--gradient-gold)",
        "gradient-neon": "var(--gradient-neon)",
        "gradient-neon-text": "var(--gradient-neon-text)",
        "gradient-premium": "var(--gradient-premium)",
        "gradient-cream": "var(--gradient-cream)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
        "gradient-fire": "var(--gradient-fire)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        strong: "var(--shadow-strong)",
        neon: "var(--shadow-neon)",
        "neon-strong": "var(--shadow-neon-strong)",
        premium: "var(--shadow-premium)",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "neon-pulse": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 10px rgba(234, 193, 123, 0.8)) drop-shadow(0 0 20px rgba(234, 193, 123, 0.5))",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px rgba(234, 193, 123, 1)) drop-shadow(0 0 40px rgba(234, 193, 123, 0.7))",
          },
        },
        "glow-text": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(234, 193, 123, 0.5), 0 0 20px rgba(234, 193, 123, 0.3)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(234, 193, 123, 0.8), 0 0 40px rgba(234, 193, 123, 0.5), 0 0 60px rgba(234, 193, 123, 0.3)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "glow-text": "glow-text 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
