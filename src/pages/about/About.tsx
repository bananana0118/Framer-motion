import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Transition from "../../Transition";
import { useLocation } from "react-router-dom";

const About = () => {
    return (
        <Transition>
            <motion.div
                style={{
                    backgroundColor: "red",
                }}
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                >
                    <Link to="/about">About Us</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/tanggu">Tanggu</Link>
                    <Link to="/main">Main</Link>
                </div>
                <div>About</div>
            </motion.div>
        </Transition>
    );
};

export default About;
