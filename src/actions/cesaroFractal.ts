function drawIsoscelesTriangle(
    baseX: number,
    baseY: number,
    baseLength: number,
    angle: number,
    angle2: number,
    iterations: number,
    color: string,
    backgroundColor: string,
    ctx: CanvasRenderingContext2D
) {
    if (iterations === -1) {
        return;
    }
    let baseX2 = baseX + baseLength * Math.cos((Math.PI / 180) * angle2);
    let baseY2 = baseY + baseLength * Math.sin((Math.PI / 180) * angle2);

    let h = (baseLength / 2) * Math.tan((Math.PI / 180) * angle);

    let tempX = (baseX + baseX2) / 2;
    let tempY = (baseY + baseY2) / 2;

    let hLength = Math.sqrt(
        (baseY2 - baseY) * (baseY2 - baseY) +
            (baseX2 - baseX) * (baseX2 - baseX)
    );

    let apexX = tempX + (h * (baseY2 - baseY)) / hLength;
    let apexY = tempY - (h * (baseX2 - baseX)) / hLength;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(apexX, apexY);
    ctx.stroke();
    draw(
        iterations,
        baseX,
        baseY,
        apexX,
        apexY,
        angle,
        angle2 - angle,
        color,
        backgroundColor,
        ctx
    );

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(apexX, apexY);
    ctx.lineTo(baseX2, baseY2);
    ctx.stroke();
    draw(
        iterations,
        apexX,
        apexY,
        baseX2,
        baseY2,
        angle,
        angle2 + angle,
        color,
        backgroundColor,
        ctx
    );

    ctx.beginPath();
    ctx.strokeStyle = backgroundColor;
    ctx.lineWidth = 4;
    ctx.moveTo(baseX2, baseY2);
    ctx.lineTo(baseX, baseY);
    ctx.stroke();
}

export function drawFractal(
    iterations: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    angle: number,
    angle2: number,
    color: string,
    backgroundColor: string,
    ctx: CanvasRenderingContext2D
) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, 5000, 5000);
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    draw(
        iterations,
        x1,
        y1,
        x2,
        y2,
        angle,
        angle2,
        color,
        backgroundColor,
        ctx
    );
}

function draw(
    iterations: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    angle: number,
    angle2: number,
    color: string,
    backgroundColor: string,
    ctx: CanvasRenderingContext2D
) {
    if (iterations === -1) {
        return;
    }
    let length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let h = (length / 2) * Math.sin((Math.PI / 180) * angle);
    let baseLength = (2 * h) / Math.tan((Math.PI / 180) * angle);
    h -= (baseLength / 2) * Math.sin((Math.PI / 180) * angle);
    baseLength = (2 * h) / Math.tan((Math.PI / 180) * angle);

    let xc = (x1 + x2) / 2;
    let yc = (y1 + y2) / 2;

    let xv = x1 - xc;
    let yv = y1 - yc;

    let vector = Math.sqrt(xv * xv + yv * yv);
    xv /= vector;
    yv /= vector;

    let x3 = xc + (baseLength / 2) * xv;
    let y3 = yc + (baseLength / 2) * yv;

    let x4 = xc - (baseLength / 2) * xv;
    let y4 = yc - (baseLength / 2) * yv;

    draw(
        iterations - 1,
        x1,
        y1,
        x3,
        y3,
        angle,
        angle2,
        color,
        backgroundColor,
        ctx
    );
    draw(
        iterations - 1,
        x4,
        y4,
        x2,
        y2,
        angle,
        angle2,
        color,
        backgroundColor,
        ctx
    );

    drawIsoscelesTriangle(
        x3,
        y3,
        baseLength,
        angle,
        angle2,
        iterations - 1,
        color,
        backgroundColor,
        ctx
    );
}

// drawFractal(5, 0, 800, 1000, 800, 87, 0, 'black', 'white', ctx);
