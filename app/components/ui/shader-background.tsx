"use client";

import { useEffect, useState } from "react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

export function ShaderBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#89b8ff]">
      {mounted && (
        <>
          <MeshGradient
            className="absolute inset-0 w-full h-full"
            colors={["#89b8ff", "#ffffff", "#ffffff", "#ffffff", "#ffd9fc"]}
            speed={0.3}
          />
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-40"
            colors={["#89b8ff", "#ffb9fa", "#ffffff", "#ffd9fc"]}
            speed={0.2}
          />
        </>
      )}

      {/* Pulsing border decorative element */}
      {mounted && (
        <div className="absolute bottom-8 right-8 z-30">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <PulsingBorder
              colors={["#ffffff", "#ffffff", "#ffd9fc", "#c4a0d4", "#ffd9fc", "#ffd9fc", "#ffb9fa"]}
              colorBack="#89b8ff00"
              speed={1.5}
              roundness={1}
              thickness={0.1}
              softness={0.2}
              intensity={5}
              spots={5}
              spotSize={0.1}
              pulse={0.1}
              smoke={0.5}
              smokeSize={4}
              scale={0.65}
              rotation={0}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            />

            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ transform: "scale(1.6)" }}
            >
              <defs>
                <path
                  id="circle"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>
              <text className="text-sm fill-foreground/40 font-medium">
                <textPath href="#circle" startOffset="0%">
                  COSMIC • Dissolve the Routine • COSMIC • Dissolve the Routine •
                </textPath>
              </text>
            </motion.svg>
          </div>
        </div>
      )}
    </div>
  );
}
