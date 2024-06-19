import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <motion.div
            style={{ backgroundColor: "blue", width: "100%", height: "100%" }}
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                }}
            >
                <Link to="/about">About Us</Link>
                <Link to="/home">home</Link>
                <Link to="/tanggu">tanggu</Link>
                <Link to="/main">main</Link>
            </div>
            <div>home</div>
        </motion.div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Home