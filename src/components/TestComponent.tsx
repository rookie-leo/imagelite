'use client'

export function TestComponent() {
    function handleClick() {
        console.log("Button clicked!");
    }

    return (
        <div>
            <h1>👌😁👌</h1>
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return (
        <h2>Arrow Function🏹</h2>
    )
}