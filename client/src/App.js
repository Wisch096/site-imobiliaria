import AppRoutes from "./routes/routes";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
