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
            <section className="flex flex-col items-center justify-center my-5">
                <div className="flex space-x-4">
                    <input type="text" className="border px-5 py-2 rounded-lg text-gray-900" />
                    <select className="border px-4 py-2 rounded-lg text-gray-900" name="" id="">
                        <option value="">All formats</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-gray-900 transition-transform ease-in duration-300 transform hover:shadow-lg hover:translate-y-2" onClick={searchImages}>Buscar</button>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-gray-900 transition-transform ease-in duration-300 transform hover:shadow-lg hover:translate-y-2">Nova imagem</button>
                </div>
            </section>

            <section className="grid grid-cols-3 gap-8">
                {renderImageCards()}
            </section>
        </Template>
    )
}