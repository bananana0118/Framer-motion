import { motion,  } from "framer-motion";
import "./index.css";

export default function Test() {
    return (
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }} //처음엔 투명도0 scale 0.5
            animate={{ opacity: 1, scale: 1 }} // 그다음엔 애니메이트 하면서 1,1로
            transition={{
                //0.8ch rjffutj, 0.5초딜레이 ease는 애니메이션 비율
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            }}
        />
    );
}
