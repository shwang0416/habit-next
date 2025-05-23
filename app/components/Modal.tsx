const Modal = ({children, footer, isOpen, onClose}: {children: React.ReactNode, footer?: React.ReactNode, isOpen: boolean, onClose: () => void}) => {
    return (
        <div className="">
            <div 
                onClick={onClose}
                className={`${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} 
                absolute inset-0 z-[999] grid h-screen w-screen place-items-center 
                bg-gray-900/50 opacity-0 backdrop-blur-xs transition-opacity duration-300`}>
                <div className="relative">
                <div 
                    className="flex flex-col justify-between bg-white/80 border-1 border-lime-700 p-8 w-[360px] h-[500px] shadow-xl"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Modal Header */}
                    {/* Modal Body */}
                    <div className="">
                        {children}
                    </div>
                    {/* Modal Footer */}

                    <div className="flex gap-2 justify-end">
                    {
                        footer
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;