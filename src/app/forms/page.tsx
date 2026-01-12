"use client"
import { InputText, Template, Button, RenderIf, useNotification, FieldError } from "@/components"
import { useImageService } from "@/resources/image/image.service"
import { useFormik } from "formik"
import { useState } from "react"
import { formScheme, FormsProps, formValidation } from "./formeScheme"
import Link from "next/link"

export default function FormsPage() {

    const [loading, setLoading] = useState<boolean>(false)
    const [imagePreview, setImagePreview] = useState<string>()

    const service = useImageService()
    const notification = useNotification()

    const formik = useFormik<FormsProps>({
        initialValues: formScheme,
        onSubmit: handleSubmit,
        validationSchema: formValidation,
    })

    async function handleSubmit(data: FormsProps) {
        setLoading(true)
        
        try {
            const formData = new FormData()
            formData.append("name", data.name)
            formData.append("tags", data.tags)
            formData.append("file", data.file)

            await service.saveImage(formData)
            notification.notify("Imagem salva com sucesso", "success")
        } catch (error) {
            console.error(error)
            notification.notify("Erro ao salvar imagem", "error")
        } finally {
            formik.resetForm()
            setImagePreview('')
            setLoading(false)
        }
    }

    function onFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const file = event.target.files[0]
            const imageUrl = URL.createObjectURL(file)

            formik.setFieldValue('file', file)
            setImagePreview(imageUrl)
        }
    }


    return (
        <Template loading={loading}>
            <section className="flex flex-col items-center justify-center my-5">
                <h5 className="mt-3 mb-10 text-3xl font-extrabold tracking-tight text-slate-900">Nova Imagem</h5>
                <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1">
                        <label className="block text-sm font-medium leading-6 text-gray-600">Nome: *</label>
                        <InputText id="name"
                                   value={formik.values.name}
                                   onChange={formik.handleChange}
                                   placeholder="digite o nome da imagem" />
                        <FieldError error={formik.errors.name}/>
                    </div>

                    <div className="mt-5 grid grid-cols-1">
                        <label className="block text-sm font-medium leading-6 text-gray-600">Tags: *</label>
                        <InputText id="tags"
                                   value={formik.values.tags}
                                   onChange={formik.handleChange}
                                   placeholder="digite o nome das tags separados por virgula" />
                        <FieldError error={formik.errors.tags}/>
                    </div>

                    <div className="mt-5 grid grid-cols-1">
                        <label className="block text-sm font-medium leading-6 text-gray-600">Imagem: *</label>
                        <FieldError error={formik.errors.file}/>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-blue-900/25 px-6 py-10">
                            <div className="text-center">
                                <RenderIf condition={!imagePreview}>
                                    <svg className="mx-auto h-12 w-12 text-gray-300"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </RenderIf>

                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label className="realtive cursor-pointer rounded-md bg-white font-semibold text-gray-700">
                                        <RenderIf condition={!imagePreview}>
                                            <span>Clique para selecionar uma imagem</span>
                                        </RenderIf>

                                        <RenderIf condition={!!imagePreview}>
                                            <img src={imagePreview} width={250} className="rounded-md" />
                                        </RenderIf>

                                        <input onChange={onFileUpload} type="file" className="sr-only" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button color="blue" label="Salvar" type="submit" />
                        <Link href="/galery">
                            <Button color="red" label="Cancelar" type="button" />
                        </Link>
                    </div>
                </form>
            </section>
        </Template>
    )
}