import { Navigation } from "@navigation";
import { AppProvider } from "@providers";

export default function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}
