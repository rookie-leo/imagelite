'use client'
import { ImageCards, Template } from "@/components"
import { Image } from "@/resources/image/image.resource"
import { useImageService } from "@/resources/image/image.service"
import { useState } from "react"

export default function GaleryPage() {
    const useService = useImageService()
    const [images, setImages] = useState<Image[]>([])

    async function searchImages() {
        const result = await useService.getImage()
        setImages(result)
        console.table(result)
    }

    function renderImageCard(image: Image, index?: number) {
        return (
            <ImageCards
                key={index}
                name={image.name}
                src={image.imageUri}
                tamanho={image.size}
                dataUpload={image.uploadDate}
            />
        )
    }

    function renderImageCards() {
        return images.map((image, index) => renderImageCard(image, index))
    }

    return (
        <Template>
            <button className="btn btn-primary bg-orange-500" onClick={searchImages}>Teste testando mudanças de estado</button>
            <section className="grid grid-cols-3 gap-8">
                {renderImageCards()}
            </section>
        </Template>
    )
}