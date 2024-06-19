import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { useState } from "react";

const Ball = () => {
    const { scrollY } = useScroll();
    const size = useTransform(scrollY, [0, 100], [200, 20]);
    const [scrollPosition, setScrollPosition] = useState(false);

    useMotionValueEvent(scrollY, "change", () => {
        setScrollPosition(scrollY.get() > 100 ? true : false);
        console.log(`animation started on ${scrollY.get()} `);
    });

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <>
            {scrollPosition ? (
                <motion.div
                    className="box"
                    style={{ width: 20, height: 20 , position:"sticky", top:0, zIndex:-10,}}
                ></motion.div>
            ) : (
                <motion.div
                    className="box"
                    style={{ width: size, height: size,position:"sticky" ,top:0}}
                ></motion.div>
            )}
            <div>
                <motion.div
                    initial="hidden"
                    animate={scrollPosition ? "show" : "hidden"}
                    variants={container}
                    style={{
                        display: "flex",
                        height: 200,
                        alignItems: "flex-end",
                    }}
                >
                    {[
                        "F",
                        "R",
                        "A",
                        "M",
                        "M",
                        "E",
                        "R",
                        "-",
                        "M",
                        "O",
                        "T",
                        "I",
                        "O",
                        "N",
                    ].map((item) => {
                        return (
                            <motion.div
                                variants={itemVariants}
                                style={{ fontSize: 40, height: 40 }}
                            >
                                {item}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    );
};

export default Ball;
