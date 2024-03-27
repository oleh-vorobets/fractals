import { InputType } from '../types/InteractiveTypes';

export function Input({
    palette,
    children,
    range,
    value,
    setValue,
}: InputType) {
    const svgBtn = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 svg-color-picker"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
        </svg>
    );

    return (
        <div className="input-block">
            <div>
                <div
                    className={palette ? 'color-picker' : range ? 'range' : ''}
                >
                    {range ? (
                        <input
                            className="input"
                            type="range"
                            value={value}
                            min="100"
                            max="500"
                            onChange={(e) => {
                                // @ts-ignore
                                setValue(() => {
                                    const value = e.target.value;
                                    if (isNaN(Number(value))) {
                                        return value;
                                    } else {
                                        return +value;
                                    }
                                });
                            }}
                        />
                    ) : (
                        // <input
                        //     className="input"
                        //     type="text"
                        //     value={value}
                        //     min={range ? '100' : ''}
                        //     max={range ? '500' : ''}
                        //     onChange={(e) => {
                        //         // @ts-ignore
                        //         setValue(() => {
                        //             const value = e.target.value;
                        //             if (isNaN(Number(value))) {
                        //                 return value;
                        //             } else {
                        //                 return +value;
                        //             }
                        //         });
                        //     }}
                        // />
                        <input
                            className="input"
                            type="text"
                            value={value}
                            onChange={(e) => {
                                // @ts-ignore
                                setValue(() => {
                                    const value = e.target.value;
                                    if (isNaN(Number(value))) {
                                        return value;
                                    } else {
                                        return +value;
                                    }
                                });
                            }}
                        />
                    )}
                    {palette && (
                        <div className="pick-color">
                            <input
                                type="color"
                                value={value}
                                // @ts-ignore
                                onChange={(e) => {
                                    // @ts-ignore
                                    setValue(() => {
                                        const value = e.target.value;
                                        if (isNaN(Number(value))) {
                                            return value;
                                        } else {
                                            return +value;
                                        }
                                    });
                                }}
                            />
                            <button className="btn">{svgBtn} </button>
                        </div>
                    )}
                </div>
            </div>
            <span>
                {children}
                {range && ` ${value}%`}
            </span>
        </div>
    );
}
