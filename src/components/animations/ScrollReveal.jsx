import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollReveal = ({ 
    children, 
    direction = "left", // Padrão é vir da esquerda
    delay = 0, 
    distance = 120,     // Distância que o elemento vai percorrer (em pixels)
    duration = 1.2      // Tempo da animação
}) => {
    const elemRef = useRef(null);

    useEffect(() => {
        let x = 0;
        let y = 0;

        // Define a posição inicial baseada na direção escolhida
        if (direction === "left") x = -distance;
        if (direction === "right") x = distance;
        if (direction === "top") y = -distance;
        if (direction === "bottom") y = distance;

        let ctx = gsap.context(() => {
            gsap.fromTo(elemRef.current,
                { 
                    x: x, 
                    y: y, 
                    opacity: 0 
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: duration,
                    delay: delay,
                    ease: "power3.out", // Curva de aceleração suave
                    scrollTrigger: {
                        trigger: elemRef.current,
                        start: "top 85%", // Dispara quando o elemento chega a 85% da altura da tela
                        toggleActions: "play none none reverse" //  controle de animação ao subir a tela e descer, se comentar, faz só uma vez
                    }
                }
            );
        }, elemRef);

        return () => ctx.revert(); // Limpeza de memória
    }, [direction, delay, distance, duration]);

    return (
        <div ref={elemRef} style={{ willChange: 'transform, opacity' }}>
            {children}
        </div>
    );
};