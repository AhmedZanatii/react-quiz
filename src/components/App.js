import { ContextProvider } from "../context/useQuiz";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <ContextProvider>
      <AppLayout />
    </ContextProvider>
  );
}
