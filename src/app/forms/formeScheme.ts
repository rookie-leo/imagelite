import * as Yup from 'yup'

export interface FormsProps {
    name: string,
    tags: string,
    file: string | Blob
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
            .required("O campo tags é obrigatório!"),
    file: Yup
            .mixed<Blob>()
            .required("É necessario realizar o uploado do arquivo antes de salvar!")
            .test('size', 'O arquivo não pode ser maior que 50 MB', (file) => {
                return file.size < 50000
            })
            .test('type', 'Formatos aceitos: JPEG, GIFF ou PNG', (file) => {
                return file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png'
            })
})