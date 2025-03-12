import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;
 
    return ReactDOM.createPortal(
        <div className="overflow-hidden fixed inset-0 flex items-center justify-center bg-black/50 z-50 "> 
            <div className="bg-[var(--dark)] relative rounded-lg shadow-lg max-h-[90vh] overflow-auto">
                <button 
                    onClick={onClose} 
                    className=" font-sans font-bold absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors text-xl">
                    X
                </button>
                <div className="p-4  ">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}

export default Modal