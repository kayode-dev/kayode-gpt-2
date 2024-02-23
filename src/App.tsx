
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from './views/home';
import Select from "./views/select";

function App() {

  return (
    <main className="text-black relative">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/chat" element={<Select/>}/>
        </Routes>
      </BrowserRouter>
    </main>
    
  )
}

export default App
