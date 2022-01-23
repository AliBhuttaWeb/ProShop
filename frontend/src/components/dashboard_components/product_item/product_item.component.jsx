import { Image } from "react-bootstrap"

export const ProductItem = ({_id, name, image, brand, category, rating, price, count_in_stock}) => {
    return <>
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td><Image src={image} fluid style={{height: "40px"}} /></td>
            <td>{brand}</td>
            <td>{category}</td>
            <td>{rating}</td>
            <td>${price}</td>
            <td>{count_in_stock}</td>   
        </tr>
    </>
}