import NavBar from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutDetails from "./pages/AboutDetails";
import AllProjects from "./pages/AllProjects";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
       <NavBar /> {/* Zawsze widoczny */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AboutDetails" element={<AboutDetails />} />
        <Route path="/AllProjects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
