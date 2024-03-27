let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let imgData: ImageData;
let Zoom: number;

function hslToRgb(color: { h: number; s: number; l: number }) {
    //console.log(color);
    let h = color.h;
    let s = color.s;
    let l = color.l;
    h /= 360;

    function hueToRgb(p: number, q: number, t: number) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }

    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    return { r, g, b };
}

function setPixel(
    x: number,
    y: number,
    color: { r: number; g: number; b: number },
    bgColor: { r: number; g: number; b: number }
) {
    let index = 4 * (x + canvas.width * y);
    imgData.data[index + 0] = (bgColor.r + color.r) % 255;
    imgData.data[index + 1] = (bgColor.g + color.g) % 255;
    imgData.data[index + 2] = (bgColor.b + color.b) % 255;
    imgData.data[index + 3] = 255;
}

function transform(x: number, width: number) {
    // перетворює в інший проміжок чисел
    return ((x / width) * 4 - 2) * (1 / (Zoom / 100));
}

function isOutside(x: number, y: number) {
    return x < -2 || x > 2 || y < -2 || y > 2;
}

function calculateZCosZ(realPart: number, imaginaryPart: number) {
    let iz_real = -1 * imaginaryPart;
    let iz_imaginary = realPart;

    // Обчислюємо e^(iz) та e^(-iz)
    let e_iz_real = Math.exp(iz_real) * Math.cos(iz_imaginary);
    let e_iz_imaginary = Math.exp(iz_real) * Math.sin(iz_imaginary);

    let e_minus_iz_real = Math.exp(-1 * iz_real) * Math.cos(-1 * iz_imaginary);
    let e_minus_iz_imaginary =
        Math.exp(-1 * iz_real) * Math.sin(-1 * iz_imaginary);

    // Обчислюємо cos(z)
    let cos_z_real = (e_iz_real + e_minus_iz_real) / 2;
    let cos_z_imaginary = (e_iz_imaginary + e_minus_iz_imaginary) / 2;

    // Обчислюємо z * cos(z)
    let z_cos_z_real = realPart * cos_z_real - imaginaryPart * cos_z_imaginary;
    let z_cos_z_imaginary =
        realPart * cos_z_imaginary + imaginaryPart * cos_z_real;

    return { r: z_cos_z_real, i: z_cos_z_imaginary };
}

function getColor(
    x: number,
    y: number,
    iterations: number,
    a: number,
    cx: number,
    cy: number,
    colorFactor: number
) {
    let zx = transform(x, canvas.width);
    let zy = transform(y, canvas.height);
    let i = 0;
    while (i < iterations) {
        const zxSquared = zx * zx;
        const zySquared = zy * zy;
        if (zxSquared + zySquared > a * a || isOutside(zx, zy)) {
            return { h: ((i * colorFactor) % 360) + 240, s: 1, l: 0.5 };
        }
        let temp = calculateZCosZ(zx, zy);
        let real = temp.r + cx;
        let img = temp.i + cy;
        zx = real;
        zy = img;
        i++;
    }
    return { h: 0, s: 0, l: 0 };
}

export function drawFractal(
    iterations: number,
    cx: number,
    cy: number,
    atractor: number,
    bgColor: string,
    colorFactor: number,
    zoom: number,
    cnv: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imageData: ImageData
) {
    canvas = cnv;
    ctx = context;
    imgData = imageData;
    Zoom = zoom;

    for (let i = 0; i < canvas.width; i++) {
        for (let j = 0; j < canvas.height; j++) {
            let color = hslToRgb(
                getColor(i, j, iterations, atractor, cx, cy, colorFactor)
            );
            setPixel(i, j, color, hexToRgb(bgColor));
        }
    }
    ctx.putImageData(imgData, 0, 0);
}

function hexToRgb(hex: string) {
    hex = hex.replace(/^#/, '');

    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b };
}

// drawFrctal(40, 2, -0.05, 0.45);
