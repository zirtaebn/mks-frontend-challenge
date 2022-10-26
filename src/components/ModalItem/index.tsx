// styles
import { 
    ModalItemContainer,
    RemoveItemButton,
    ItemImage,
    ItemTitle,
    ItemQuantityContainer,
    ItemQuantity,
    QuantityButton,
    Quantity,
    ItemPrice
} from './styles'

// utilities
import { decreaseQuantity, increaseQuantity, removeProduct } from '../../store/slices/modalSlice'
import IModalItem from '../../types/IModalItem'
import { useAppDispatch } from '../../hooks/reduxHooks'
import formatPrice from '../../helpers/formatPrice'

type ModalItemProps = {

    product: IModalItem
}

export default ({product}:ModalItemProps) => {
    
    const dispatch = useAppDispatch()
    const price = formatPrice(product.price)

    return (

        <ModalItemContainer>
            <RemoveItemButton
                onClick={() => dispatch(removeProduct(product.id))}
                aria-label={`Remove ${product.name}`}
            >
                x
            </RemoveItemButton>

            <ItemImage url={product.photo} />
            
            <ItemTitle>
                {product.name}
            </ItemTitle>

           <div style={{display:'flex', alignItems:'center', padding:'0 10px'}}>
                <ItemQuantityContainer>
                    <p>Qtd:</p>

                    <ItemQuantity>
                        <QuantityButton
                            onClick={() => dispatch(decreaseQuantity(product.id))}
                            aria-label={`Decrease quantity of ${product.name}`}
                        >
                            -
                        </QuantityButton>
                        <Quantity
                        >
                            {product.quantity}
                        </Quantity>
                        <QuantityButton
                            onClick={() => dispatch(increaseQuantity(product.id))}
                            aria-label={`Increase quantity of ${product.name}`}
                        >
                            +
                        </QuantityButton>
                    </ItemQuantity>
                </ItemQuantityContainer>

                <ItemPrice>
                    R${price}
                </ItemPrice>
           </div>

        </ModalItemContainer>
    )
}