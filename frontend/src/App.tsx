import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthForm } from "./components/AuthForm";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>User Auth</h1>
        <AuthForm />
      </div>
    </QueryClientProvider>
  );
};

export default App;
