import { ImageCards, Template } from "@/components"

export default function GaleryPage() {
    return (
        <Template>
            <section className="grid grid-cols-3 gap-8">
                <ImageCards name="Naruto Uzumaki Fases" src="https://upload.wikimedia.org/wikipedia/pt/e/e3/NarutoUzumakiTresFases.png" dataUpload="04/01/2024"/>
                <ImageCards />
                <ImageCards />
            </section>
        </Template>
    )
}