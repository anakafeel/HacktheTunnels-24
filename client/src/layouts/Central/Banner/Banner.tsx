import "./Banner.style.scss";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle"; 

type BannerProps = {
  children: React.ReactNode; 
};

function Banner({ children }: BannerProps) { 
  return (
    <div className="Banner">
      <img src="/carleton_logo.png" alt="logo" />
      <div className="Banner__seperator"></div>
      <div className="Banner__title">Carleton Central</div>

      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />
        {children}
      </ThemeProvider>
    </div>
  );
}

export default Banner;
