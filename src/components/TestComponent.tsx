'use client'

interface TestComponentProps {
    mensagem: string;
}

export function TestComponent(props: TestComponentProps) {
    function handleClick() {
        console.log("Button clicked!");
    }

    return (
        <div>
            <h1>{ props.mensagem }</h1>
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return (
        <h2>Arrow Function🏹</h2>
    )
}