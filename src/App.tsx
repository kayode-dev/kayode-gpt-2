
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from './views/home';
import Footer from './components/footer';
import Select from "./views/select";

function App() {

  return (
    <main className="text-black relative flex flex-col justify-between mx-auto min-h-screen pt-20 w-11/12">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/chat" element={<Select/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </main>
    
  )
}

export default App
