import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar.tsx";
import { Toaster } from "sonner";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NextUIProvider>
      <Toaster richColors position="top-center" />
      <NavBar />
      <main className="bg-[#FFFFFF] max-w-[1150px] m-auto p-5  dark:bg-[#000000] text-[#000000] dark:text-[#FFFFFF]">
        <App />
      </main>
    </NextUIProvider>
  </BrowserRouter>
);
