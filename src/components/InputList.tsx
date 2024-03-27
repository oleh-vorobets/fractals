import { Input } from './Input';
import { InputListType } from '../types/InteractiveTypes';

export function InputList({ setValues }: InputListType) {
    return (
        <div className="input-list">
            <Input
                palette={true}
                range={false}
                setValue={setValues.setBgColor}
                value={setValues.bgColor}
            >
                Fractal background color.
            </Input>
            <Input
                palette={true}
                range={false}
                setValue={setValues.setColor}
                value={setValues.color}
            >
                Fill the inside of the fractal with this color.
            </Input>
            <div className="cesaro-size">
                <Input
                    palette={false}
                    range={false}
                    setValue={setValues.setFirstX}
                    value={setValues.firstX}
                >
                    Cesaro fractal x start.
                </Input>
                <Input
                    palette={false}
                    range={false}
                    setValue={setValues.setFirstY}
                    value={setValues.firstY}
                >
                    Cesaro fractal y start.
                </Input>
            </div>
            <div className="cesaro-size">
                <Input
                    palette={false}
                    range={false}
                    setValue={setValues.setSecondX}
                    value={setValues.secondX}
                >
                    Cesaro fractal x end.
                </Input>
                <Input
                    palette={false}
                    range={false}
                    setValue={setValues.setSecondY}
                    value={setValues.secondY}
                >
                    Cesaro fractal y end.
                </Input>
            </div>
            <Input
                palette={false}
                range={false}
                setValue={setValues.setIteration}
                value={setValues.iterations}
            >
                Cesaro fractal iterations.
            </Input>
            <Input
                palette={false}
                range={false}
                setValue={setValues.setAngle}
                value={setValues.angle}
            >
                Angle for fractal.
            </Input>
        </div>
    );
}
