import Container from "./Container";

const Dropdown = ({children, isOpen, onClose}: {children: React.ReactNode, isOpen: boolean, onClose: () => void}) => {
    return (
        <>
        <div
        onClick={onClose}
        className={`${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
        fixed top-0 right-0 w-[160px] w-screen h-screen`}
        />
        <Container styles={`${isOpen ? 'absolute top-[60px] right-[16px] w-[160px] flex flex-col p-4 gap-4 bg-stone-100 border-1 border-green-700 shadow-xl shadow-green-800/50' : 'hidden'}`}>
            {children}
        </Container>
        </>

    )
}

export default Dropdown;