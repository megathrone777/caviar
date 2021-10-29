import React from "react";
import Link from "next/link";

import { TProduct } from "~/components";
import { useStore, removeFromCart } from "~/store";
import { StyledWrapper } from "./styled";

const Cart: React.FC = () => {
  const { state, dispatch } = useStore();
  const {
    cart: { products },
  } = state;

  return (
    <StyledWrapper>
      {products && !!products.length ? (
        <ul>
          {products.map(
            ({
              id,
              image,
              name,
              priceDefault,
              priceDiscounted,
              quantity,
            }: TProduct): React.ReactElement => (
              <li key={`${id}-${name}`}>
                <div>
                  <Link href="#" passHref>
                    <a>
                      <img alt={name} src={`/images/fd`} />
                    </a>
                  </Link>
                </div>

                <p>
                  <Link href="#" passHref>
                    <a>{name}</a>
                  </Link>
                </p>

                <div>
                  {priceDiscounted && <p>{priceDiscounted}</p>}
                  <p>{priceDefault}</p>
                  <br />
                  <span>{quantity}</span>
                </div>

                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  Remove from cart
                </button>
              </li>
            )
          )}
        </ul>
      ) : (
        <div>It is empty now</div>
      )}
    </StyledWrapper>
  );
};

export { Cart };
