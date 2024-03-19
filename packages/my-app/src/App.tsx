// App.tsx
import "./App.css";
import { AppShimmer, AppLayout, defineCustomElements } from "react-library";

defineCustomElements();

function App() {
  return (
    <AppLayout>
      <AppShimmer />
    </AppLayout>
  );
}

export default App;
