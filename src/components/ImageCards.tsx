import { useState } from "react"

interface ImageCardsProps {
    name?: string,
    tamanho?: string,
    dataUpload?: string,
    src?: string
}

export const ImageCards: React.FC<ImageCardsProps> = ({
    name, dataUpload, tamanho, src
}: ImageCardsProps) => {
    const [isOpen, setIsOpen] = useState(false)

    function download() {
        window.open(src, '_blank')
    }

    return (
        <>
            <div className="card relative bg-white rounded-md shadow-md transition-transform ease-in duration-300 transform hover:shadow-lg hover:translate-y-2">
                <img onClick={() => setIsOpen(true)} src={src} className="h-56 w-full object-cover rounded-t-md " alt="" />
                <div className="card-body p-4">
                    <h5 className="text-xl font-semibold mb-2 text-gray-600">{name}</h5>
                    <p className="text-gray-600">{tamanho}</p>
                    <p className="text-gray-600">{dataUpload}</p>
                    <button onClick={download} className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors duration-300">Download</button>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 "
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={src}
                        alt={name}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg "
                        onClick={(e) => e.stopPropagation}
                    />

                </div>
            )

            }
        </>
    )
}