export interface InputType {
    palette: boolean;
    range: boolean;
    children: string;
    setValue:
        | React.Dispatch<React.SetStateAction<number>>
        | React.Dispatch<React.SetStateAction<string>>;
    value: number | string;
}

export interface ModalWindowType {
    modalWindow: number;
    onModalWindow: (num: number) => void;
    title: string;
    onDraw: () => void;
    setValues: StatesType | any; //?
}

export interface CoordinatesType {
    x: number;
    y: number;
}

export interface InteractiveType {
    onDraw: () => void;
    onAlgebraicDraw: () => void;
    setValues: StatesType | any;
    setAlgebraicValues: any; //?
}

export interface InputListType {
    setValues: StatesType;
}

export interface InputAlgebraicListType {
    setValues: StatesAlgebraicType;
}

interface StatesAlgebraicType {
    iterations2: number;
    setIteration2: React.Dispatch<React.SetStateAction<number>>;
    real: number;
    setReal: React.Dispatch<React.SetStateAction<number>>;
    image: number;
    setImage: React.Dispatch<React.SetStateAction<number>>;
    zoom: number;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
    atractor: number;
    setAtractor: React.Dispatch<React.SetStateAction<number>>;
    bgColor2: string;
    setBgColor2: React.Dispatch<React.SetStateAction<string>>;
    colorFactor: number;
    setColorFactor: React.Dispatch<React.SetStateAction<number>>;
}

interface StatesType {
    setIteration: React.Dispatch<React.SetStateAction<number>>;
    setFirstX: React.Dispatch<React.SetStateAction<number>>;
    setFirstY: React.Dispatch<React.SetStateAction<number>>;
    setSecondX: React.Dispatch<React.SetStateAction<number>>;
    setSecondY: React.Dispatch<React.SetStateAction<number>>;
    setAngle: React.Dispatch<React.SetStateAction<number>>;
    setRotateAngle: React.Dispatch<React.SetStateAction<number>>;
    setColor: React.Dispatch<React.SetStateAction<string>>;
    setBgColor: React.Dispatch<React.SetStateAction<string>>;
    iterations: number;
    firstX: number;
    firstY: number;
    secondX: number;
    secondY: number;
    angle: number;
    rotateAngle: number;
    color: string;
    bgColor: string;
}
