import { Geist, Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider, Box, CssBaseline } from "@mui/material";
import { theme } from "../../theme";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Forcythe",
  description: "Powered by Forcythe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
