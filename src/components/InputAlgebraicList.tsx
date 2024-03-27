import { InputAlgebraicListType } from '../types/InteractiveTypes';
import { Input } from './Input';

export function InputAlgebraicList({ setValues }: InputAlgebraicListType) {
    return (
        <div className="input-list">
            <Input
                palette={false}
                range={false}
                setValue={setValues.setAtractor}
                value={setValues.atractor}
            >
                Atractor.
            </Input>
            <Input
                palette={false}
                range={false}
                setValue={setValues.setColorFactor}
                value={setValues.colorFactor}
            >
                Color factor.
            </Input>
            <Input
                palette={true}
                range={false}
                setValue={setValues.setBgColor2}
                value={setValues.bgColor2}
            >
                Color.
            </Input>
            <Input
                palette={false}
                range={false}
                setValue={setValues.setReal}
                value={setValues.real}
            >
                Real number.
            </Input>
            <Input
                palette={false}
                range={false}
                setValue={setValues.setImage}
                value={setValues.image}
            >
                Image number.
            </Input>
            <Input
                palette={false}
                range={false}
                setValue={setValues.setIteration2}
                value={setValues.iterations2}
            >
                Algebraic fractal iterations.
            </Input>
            <Input
                palette={false}
                range={true}
                setValue={setValues.setZoom}
                value={setValues.zoom}
            >
                Zoom
            </Input>
        </div>
    );
}
