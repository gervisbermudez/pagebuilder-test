import React from 'react'
import { Form } from 'react-bootstrap'

type SwichPropsType = {
    label: string,
    id: string
}

export default function Switch({ label, id}: SwichPropsType) {
    return (
        <>
            <Form>
                <Form.Check
                    type="switch"
                    id={id}
                    label={label}
                />
            </Form>
        </>
    )
}
