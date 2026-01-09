'use client'
import { Button, ImageCards, Template, InputText } from "@/components"
import { Image } from "@/resources/image/image.resource"
import { useImageService } from "@/resources/image/image.service"
import { useState } from "react"
import Link from "next/link"

export default function GaleryPage() {
    const useService = useImageService()
    const [images, setImages] = useState<Image[]>([])
    const [query, setQuery] = useState<string>('')
    const [extension, setExtension] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    async function searchImages() {
        setLoading(true)
        const result = await useService.getImage(query, extension)
        setImages(result)
        setLoading(false)
    }

    function renderImageCard(image: Image) {
        return (
            <ImageCards
                key={image.imageUri}
                name={image.name}
                src={image.imageUri}
                tamanho={image.size}
                extension={image.extension}
                dataUpload={image.uploadDate}
            />
        )
    }

    function renderImageCards() {
        return images.map((image, index) => renderImageCard(image))
    }

    return (
        <Template loading={loading}>
            <section className="flex flex-col items-center justify-center my-5">
                <div className="flex space-x-4">
                    <InputText onChange={event => setQuery(event.target.value)} placeholder="nome ou tag da imagem" />
                    <select
                        onChange={event => setExtension(event.target.value)}
                        className="border px-4 py-2 rounded-lg text-gray-900">
                        <option value="">All formats</option>
                        <option value="JPEG">JPEG</option>
                        <option value="PNG">PNG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <Button color="blue" label="Buscar" onClick={searchImages}/>
                    <Link href="/forms">
                        <Button color="purple" label="Nova imagem"/>
                    </Link>
                </div>
            </section>

            <section className="grid grid-cols-3 gap-8">
                {renderImageCards()}
            </section>
        </Template>
    )
}