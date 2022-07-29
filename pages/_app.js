import "../scss/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Router/Navbar";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import SpeedDialTooltipOpen from "./components/SpeedDial/SpeedDial";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextThemesProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <SpeedDialTooltipOpen />
          <Component {...pageProps} />
          <NavbarComponent {...pageProps}/>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export default MyApp;
