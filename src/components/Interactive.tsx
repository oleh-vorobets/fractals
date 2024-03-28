import '../styles/Interactive.css';
import { useState } from 'react';
import './ModalWindow';
import { ModalWindow } from './ModalWindow';
import { InteractiveType } from '../types/InteractiveTypes';

export function Interactive(props: InteractiveType) {
    const [modalWindow, setModalWindow] = useState(0);

    function handleModalWindow(num: number) {
        setModalWindow(num);
    }

    function takePhoto() {
        const canvas = document!.querySelector('canvas')!;
        const downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL();
        downloadLink.download = `${Date.now()}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <>
            <button className="camera btn" onClick={takePhoto}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 svg-camera"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                </svg>
            </button>
            {modalWindow === 1 ? (
                <ModalWindow
                    modalWindow={modalWindow}
                    onModalWindow={handleModalWindow}
                    title="Cesero Line"
                    onDraw={props.onDraw}
                    setValues={props.setValues}
                />
            ) : modalWindow === 2 ? (
                <ModalWindow
                    modalWindow={modalWindow}
                    onModalWindow={handleModalWindow}
                    title="Algebraic Fractal"
                    onDraw={props.onAlgebraicDraw}
                    setValues={props.setAlgebraicValues}
                />
            ) : (
                <>
                    <button
                        className="open--btn btn right-arrow--btn"
                        onClick={() => setModalWindow(1)}
                    >
                        C
                    </button>
                    <button
                        className="open--btn btn right-arrow--btn bottom-btn"
                        onClick={() => setModalWindow(2)}
                    >
                        A
                    </button>
                </>
            )}
        </>
    );
}
