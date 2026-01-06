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
        kitty: {
          pink: "hsl(var(--kitty-pink))",
          bow: "hsl(var(--kitty-bow))",
          blush: "hsl(var(--kitty-blush))",
        },
        pastel: {
          cream: "hsl(var(--cream))",
          lavender: "hsl(var(--soft-lavender))",
          mint: "hsl(var(--soft-mint))",
          yellow: "hsl(var(--soft-yellow))",
          peach: "hsl(var(--soft-peach))",
          sky: "hsl(var(--soft-sky))",
        },
        tree: {
          trunk: "hsl(var(--tree-trunk))",
          leaf: "hsl(var(--tree-leaf))",
        },
        ground: "hsl(var(--ground))",
      },
      fontFamily: {
        display: ["'Bubblegum Sans'", "cursive"],
        handwriting: ["'Dancing Script'", "cursive"],
        sans: ["'Quicksand'", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.5rem",
        "2xl": "2rem",
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
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.3) translateY(50px)" },
          "50%": { transform: "scale(1.1) translateY(-10px)" },
          "70%": { transform: "scale(0.95) translateY(5px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "float-up": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-150vh) rotate(15deg)", opacity: "0" },
        },
        "kitty-appear": {
          "0%": { opacity: "0", transform: "scale(0) translateY(50px)" },
          "60%": { transform: "scale(1.2) translateY(-10px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(350 80% 75% / 0.4)", transform: "scale(1)" },
          "50%": { boxShadow: "0 0 40px hsl(350 80% 75% / 0.6)", transform: "scale(1.05)" },
        },
        "heart-sink": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(200px) scale(0.5)", opacity: "0" },
        },
        "tree-grow": {
          "0%": { transform: "scaleY(0)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", transformOrigin: "bottom" },
        },
        "leaf-fall": {
          "0%": { transform: "translateY(0) rotate(0deg) translateX(0)", opacity: "1" },
          "100%": { transform: "translateY(100px) rotate(360deg) translateX(30px)", opacity: "0.3" },
        },
        "leaf-sway": {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "blink": {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" },
        },
        "wave": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(20deg)" },
          "75%": { transform: "rotate(-10deg)" },
        },
        "float-heart": {
          "0%": { transform: "translateY(0) scale(1) rotate(0deg)", opacity: "0.7" },
          "50%": { transform: "translateY(-30px) scale(1.1) rotate(10deg)", opacity: "1" },
          "100%": { transform: "translateY(-60px) scale(0.8) rotate(-10deg)", opacity: "0" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "0", transform: "scale(0) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1) rotate(180deg)" },
        },
        "photo-reveal": {
          "0%": { opacity: "0", transform: "scale(0.8) rotate(-5deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "kitty-idle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "float-up": "float-up 3s ease-in forwards",
        "kitty-appear": "kitty-appear 0.5s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "heart-sink": "heart-sink 1.5s ease-in forwards",
        "tree-grow": "tree-grow 2s ease-out forwards",
        "leaf-fall": "leaf-fall 4s ease-in-out infinite",
        "leaf-sway": "leaf-sway 3s ease-in-out infinite",
        "blink": "blink 4s ease-in-out infinite",
        "wave": "wave 1.5s ease-in-out infinite",
        "float-heart": "float-heart 3s ease-in-out infinite",
        "sparkle": "sparkle 2s ease-in-out infinite",
        "photo-reveal": "photo-reveal 0.8s ease-out forwards",
        "fade-slide-up": "fade-slide-up 0.8s ease-out forwards",
        "kitty-idle": "kitty-idle 2s ease-in-out infinite",
        "fade-out": "fade-out 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
