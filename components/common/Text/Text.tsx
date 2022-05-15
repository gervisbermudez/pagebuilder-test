type TextPropsType = {
    text: string,
    fontSize: string | number
}

export const Text = ({ text, fontSize } : TextPropsType) => {
    return (
        <div>
            <p style={{ fontSize }}>{text}</p>
        </div>
    )
}