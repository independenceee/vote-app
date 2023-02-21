module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./apps/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            flexGrow: {
                2: "2 0 0",
            },
        },
    },
    plugins: [],
};
