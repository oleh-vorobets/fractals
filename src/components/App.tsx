import React, { useState } from 'react';
import '../styles/App.css';
import { Canvas } from './Canvas';
import { Interactive } from './Interactive';
import { drawFractal } from '../actions/cesaroFractal';
import { drawFractal as drawAlgebraFractal } from '../actions/algebraFractal';

function App() {
    const [iterations, setIteration] = useState(0);
    const [firstX, setFirstX] = useState(0);
    const [firstY, setFirstY] = useState(0);
    const [secondX, setSecondX] = useState(0);
    const [secondY, setSecondY] = useState(0);
    const [angle, setAngle] = useState(0);
    const [rotateAngle, setRotateAngle] = useState(0);
    const [color, setColor] = useState('');
    const [bgColor, setBgColor] = useState('');

    const [iterations2, setIteration2] = useState(0);
    const [real, setReal] = useState(0);
    const [image, setImage] = useState(0);
    const [zoom, setZoom] = useState(100);
    const [atractor, setAtractor] = useState(0);
    const [bgColor2, setBgColor2] = useState('');
    const [colorFactor, setColorFactor] = useState(0);

    function algebraFractalDraw(): void {
        const canvas = document!.querySelector('canvas')!;
        const ctx = canvas!.getContext('2d')!;
        const imgData = ctx.createImageData(canvas.width, canvas.height);

        drawAlgebraFractal(
            iterations2,
            real,
            image,
            atractor,
            bgColor2,
            colorFactor,
            zoom,
            canvas,
            ctx,
            imgData
        );
    }

    function handleDraw(): void {
        const canvas = document.querySelector('canvas');
        const context = canvas!.getContext('2d');

        function calculateAngle(
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x3: number,
            y3: number,
            x4: number,
            y4: number
        ) {
            let vector1 = [x2 - x1, y2 - y1];
            let vector2 = [x4 - x3, y4 - y3];

            let dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1];

            let length1 = Math.sqrt(vector1[0] ** 2 + vector1[1] ** 2);
            let length2 = Math.sqrt(vector2[0] ** 2 + vector2[1] ** 2);

            let cosAngle = dotProduct / (length1 * length2);

            let angleRad = Math.acos(cosAngle);

            let angleDeg = (180 / Math.PI) * angleRad;

            if (y1 < y2) {
                return angleDeg;
            } else {
                return -angleDeg;
            }
        }

        drawFractal(
            iterations,
            firstX,
            firstY,
            secondX,
            secondY,
            angle,
            calculateAngle(
                firstX,
                firstY,
                secondX,
                secondY,
                firstX,
                firstY,
                firstY,
                firstY
            ),
            color,
            bgColor,
            context!
        );
    }

    let setValues = {
        setIteration,
        setFirstX,
        setFirstY,
        setSecondX,
        setSecondY,
        setAngle,
        setRotateAngle,
        setColor,
        setBgColor,
        iterations,
        firstX,
        firstY,
        secondX,
        secondY,
        angle,
        rotateAngle,
        color,
        bgColor,
    };

    let setAlgebraicValues = {
        iterations2,
        setIteration2,
        real,
        setReal,
        image,
        setImage,
        colorFactor,
        setColorFactor,
        zoom,
        setZoom,
        atractor,
        setAtractor,
        bgColor2,
        setBgColor2,
    };

    return (
        <div className="container">
            <Interactive
                onDraw={handleDraw}
                onAlgebraicDraw={algebraFractalDraw}
                setValues={setValues}
                setAlgebraicValues={setAlgebraicValues}
            />
            <Canvas />
        </div>
    );
}

export default App;
