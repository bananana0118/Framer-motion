import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Transition from "../../Transition";

const Main = () => {
    return (
        <Transition>
            <motion.div
                style={{
                    backgroundColor: "yellow",
                    width: "100%",
                    height: "100%",
                }}
                key={3}
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
                <div>main</div>
            </motion.div>
        </Transition>
    );
};

export default Main;
