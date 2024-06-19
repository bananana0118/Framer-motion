import "./App.css";
import {
    createBrowserRouter,
    Link,
    useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Tanggu from "./pages/tanggu/Tanggu";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import AnimatedOutlet from "./AnimatedOutlet";
export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                }}
            >
                <Link to="about">About Us</Link>
                <Link to="home">home</Link>
                <Link to="tanggu">tanggu</Link>
                <Link to="main">main</Link>
            </div>
        ),
    },
    {
        path: "about",
        element: <About></About>,
    },
    {
        path: "home",
        element: <Home></Home>,
    },
    {
        path: "tanggu",
        element: <Tanggu></Tanggu>,
    },
    {
        path: "main",
        element: <Main></Main>,
    },
]);

function App() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <AnimatedOutlet key={location.pathname}></AnimatedOutlet>
        </AnimatePresence>
    );
}

export default App;
