import './App.css'
import {useEffect} from "react";
import {Route, Routes} from 'react-router-dom'
import {useTelegram} from "./hooks/useTelegram.js";
import Header from "./components/Header/Header.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";

function App() {
    const {tg} = useTelegram()


    useEffect(() => {
        tg.ready();
    }, [])
    // eslint-disable-next-line no-unused-vars


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                {/*<Route path={'cart'} element={<Cart/>}/>*/}
                {/*<Route path={'order'} element={<Order/>}/>*/}
                {/*<Route path={'checkup'} element={<Checkup/>}/>*/}
            </Routes>
            <ProductList/>
        </div>
    )
}

export default App
