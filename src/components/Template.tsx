interface TemplateProps {
    children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <>
            <div className="container mx-auto mt-8 px-4">
                {props.children}
            </div>
        </>
    )
}

