import "./Banner.style.scss";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle"; 

type BannerProps = {
  children?: React.ReactNode; 
};

function Banner({ children }: BannerProps) { 
return (
    <div className="Banner flex items-center justify-between">
    <div className="flex items-center">
      <img src="/carleton_logo.png" alt="logo" className="mr-4" />
      <div className="Banner__seperator" style={{ width: '2px', height: '30px', margin: '0 10px' }}></div>
      <div className="Banner__title">Carleton Central</div>
    </div>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ModeToggle/>
      {children}
    </ThemeProvider>
  </div>
  );
}

export default Banner;
