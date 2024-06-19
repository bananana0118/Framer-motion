import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

const Transition = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    return (
        <>
        {children}
        <AnimatePresence mode="wait">
          
            <motion.div
                key={location.pathname}
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{
                    scaleY: [1],
                    transformOrigin: "bottom",
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{
                    scaleY: 0,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100vw",
                    height: "100vh",
                    transformOrigin: "bottom",
                    backgroundColor: "red",
                }}
            />
            <motion.div
                
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{
                    scaleY: 0,
                    transition: {
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 1,
                        transformOrigin: "top",
                    },
                }}
                exit={{
                    scaleY: 0,
                    transition: {
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 1,
                        transformOrigin: "top",
                    },
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    transformOrigin: "top",
                    backgroundColor: "black",
                }}
            />
        </AnimatePresence>
        </>
    );
};

export default Transition;
