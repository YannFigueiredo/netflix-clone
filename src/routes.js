import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}