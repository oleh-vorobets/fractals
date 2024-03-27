import { InputList } from './InputList';
import { ModalWindowType } from '../types/InteractiveTypes';
import { InputAlgebraicList } from './InputAlgebraicList';

export function ModalWindow({
    modalWindow,
    onModalWindow,
    title,
    onDraw,
    setValues,
}: ModalWindowType) {
    return (
        <div className="interactive">
            <span className="title">{title}</span>
            <button
                className="left-arrow--btn btn close--btn"
                onClick={() => onModalWindow(0)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 svg-arrow"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                </svg>
            </button>
            {modalWindow === 1 ? (
                <InputList setValues={setValues} />
            ) : (
                <InputAlgebraicList setValues={setValues} />
            )}
            <button className="draw-btn" onClick={onDraw}>
                Draw(Fractal)
            </button>
        </div>
    );
}
