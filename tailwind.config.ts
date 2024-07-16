/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Flex, sans-serif",
    },
    fontSize: {
      Regular10: [
        "0.625rem",
        {
          lineHeight: ".75rem",
          fontWeight: "400",
        },
      ],
      Regular11: [
        "0.6875rem",
        {
          lineHeight: "1rem",
          fontWeight: "400",
        },
      ],
      Regular12: [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "400",
        },
      ],
      Regular14: [
        "0.875rem",
        {
          lineHeight: "1rem",
          fontWeight: "400",
        },
      ],
      Regular16: [
        "1rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "400",
        },
      ],
      Regular20: [
        "1.25rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "300",
        },
      ],
      Medium12: [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "500",
        },
      ],
      Medium14: [
        "0.875rem",
        {
          lineHeight: "1rem",
          fontWeight: "500",
        },
      ],
      Medium16: [
        "1rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "500",
        },
      ],
      Medium20: [
        "1.25rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "500",
        },
      ],
      Medium32: [
        "2rem",
        {
          lineHeight: "2.375rem",
          fontWeight: "500",
        },
      ],
      Semibold11: [
        "0.6875rem",
        {
          lineHeight: "1rem",
          fontWeight: "600",
        },
      ],
      Semibold12: [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "600",
        },
      ],
      Semibold16: [
        "1rem",
        {
          lineHeight: "1rem",
          fontWeight: "600",
        },
      ],
      Semibold20: [
        "1.25rem",
        {
          lineHeight: "1rem",
          fontWeight: "600",
        },
      ],
      Semibold48: [
        "3rem",
        {
          lineHeight: "1rem",
          fontWeight: "600",
        },
      ],
      Bold11: [
        "0.6875rem",
        {
          lineHeight: "1rem",
          fontWeight: "700",
        },
      ],
      Bold12: [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "700",
        },
      ],
      Bold14: [
        "0.875rem",
        {
          lineHeight: "1rem",
          fontWeight: "700",
        },
      ],
      Bold16: [
        "1rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "700",
        },
      ],
      Bold20: [
        "1.25rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "700",
        },
      ],
      Bold24: [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
      Bold32: [
        "2rem",
        {
          lineHeight: "normal",
          fontWeight: "700",
        },
      ],
      Bold42: [
        "2.625rem",
        {
          lineHeight: "normal",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      colors: {
        gray: {
          0: 'rgba(251, 255, 244, 1)',
          1: "#52525B",
          2: "rgba(134, 146, 166, 1)",
          3: "rgba(17, 24, 39, 1)",
          4: "rgba(82, 82, 91, 1)",
        },
        yellow: {
          0: "rgba(251, 255, 244, 1)"
        },
      },
      boxShadow: {
        'custom': '0px 2px 14px 1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
