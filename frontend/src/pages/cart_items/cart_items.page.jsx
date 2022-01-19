import { ItemsList } from "../../components/cart/items_list/items_list.component"
import { BackButton } from '../../components/back_button/back_button.component';

export const CartItemsPage = () => {
    return <>
        <BackButton />
        <h2>Cart Items</h2>
        <ItemsList />
    </>
}