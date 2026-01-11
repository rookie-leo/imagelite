import * as Yup from 'yup'

export interface FormsProps {
    name: string,
    tags: string,
    file: any
}

export const formScheme: FormsProps = { name: '', tags: '', file: '' }

export const formValidation = Yup.object().shape({
    name: Yup
            .string()
            .trim()
            .required("O campo nome é obrigatório!")
            .max(100, "O tamanho limite do campo nome é de 100 caracteres!"),
    tags: Yup
            .string()
            .trim()
            .required("O campo tags é obrigatório!")
})