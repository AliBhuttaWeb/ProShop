import { Form } from "react-bootstrap"

export const QuantitySelector = ({ count_in_stock, selected_qty, handleChange }) => {    
    return <>
            <Form.Select onChange= { handleChange } defaultValue={selected_qty}>
                {
                    [...Array(count_in_stock).keys()].map(num => (
                        <option value={ num + 1 } key={ num + 1 } > {num + 1} </option>
                    ))
                }
            </Form.Select>
    </>
}