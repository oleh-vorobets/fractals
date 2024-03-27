import '../styles/Canvas.css';
import { useRef, useState, useLayoutEffect } from 'react';
import { SCALE_SIZE } from '../constants/constants';

export function Canvas() {
    const ref = useRef<HTMLCanvasElement>(null);
    const [size, setSize] = useState<{
        width: number | undefined;
        height: number | undefined;
    }>({ width: undefined, height: undefined });

    useLayoutEffect(() => {
        if (ref.current) {
            setSize({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight,
            });
        }
    }, []);

    return (
        <canvas
            ref={ref}
            className="canvas"
            width={
                size.width !== undefined ? size.width * SCALE_SIZE : undefined
            }
            height={
                size.height !== undefined ? size.height * SCALE_SIZE : undefined
            }
        ></canvas>
    );
}
