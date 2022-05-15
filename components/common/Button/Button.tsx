import { Button as RB_Button } from 'react-bootstrap';

type RB_ButtonPropsType = {
    childre :any,
    variant: string
}

export default function Button({ children, variant = "primary" }: any) {
    return (
        <RB_Button variant={variant}>{children}</RB_Button>
    )
}
