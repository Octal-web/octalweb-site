import { BackgroundVideo } from "./components/BackgroundVideo";
import { HeroSection } from "./components/HeroSection";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">
      <BackgroundVideo />
      <Overlay />
      <HeroSection />
    </div>
  )
};

export default App;