'use client'
import { ImageCards, Template } from "@/components"
import { useState } from "react"

export default function GaleryPage() {
    const imageUrl1 = "https://upload.wikimedia.org/wikipedia/pt/e/e3/NarutoUzumakiTresFases.png"
    const imageUrl2 = "https://criticalhits.com.br/wp-content/uploads/2022/03/sasuke-uchiha.jpg"
    const name1 = "Naruto Uzumaki Fases"
    const name2 = "Sasuke Uchiha Fases"
    
    const [imageCode, setImageCode] = useState<number>(1)
    const [urlImage, setUrlImage] = useState<string>(imageUrl1)
    const [name, setName] = useState<string>(name1)


    function handleClick() {
        console.log("Clicou")
        if (imageCode == 1) {
            setImageCode(2)
            setUrlImage(imageUrl2)
            setName(name2)
        } else {
            setImageCode(1)
            setUrlImage(imageUrl1)
            setName(name1)
        }
    }

    return (
        <Template>
            <button className="btn btn-primary bg-orange-500" onClick={handleClick}>Teste testando mudanças de estado</button>
            <section className="grid grid-cols-3 gap-8">
                <ImageCards name={name} src={urlImage} dataUpload="04/01/2024"/>
                <ImageCards name={name} src={urlImage} dataUpload="04/01/2024"/>
                <ImageCards name={name} src={urlImage} dataUpload="04/01/2024"/>
                <ImageCards />
                <ImageCards />
            </section>
        </Template>
    )
}