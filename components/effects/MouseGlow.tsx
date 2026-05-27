"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);

        return () =>
            window.removeEventListener("mousemove", move);
    }, []);

    return (
        <>
            <div
                className="
        fixed
        inset-0
        pointer-events-none
        z-0
      "
                style={{
                    background: `
          radial-gradient(
            600px at ${position.x}px ${position.y}px,
            rgba(198,169,105,0.08),
            transparent 80%
          )
        `,
                }}
            />

            <div
                className="
        fixed
        inset-0
        pointer-events-none
        z-0
      "
                style={{
                    background: `
          radial-gradient(
            300px at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.06),
            transparent 70%
          )
        `,
                }}
            />
        </>
    );
}