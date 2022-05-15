type ContainerPropsType = {
    children: any
}

export default function Container({ children }: ContainerPropsType) {
    return (
        <div>{children}</div>
    )
}
