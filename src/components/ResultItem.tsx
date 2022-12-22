import { memo } from "react";

interface ResultItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ResultItemComponent({ product, onAddToWishList }: ResultItemProps) {
  return (
    <li>
      {product.title} - {product.price}
      <button onClick={() => onAddToWishList}>Add to wishList</button>
    </li>
  );
}

export const ResultItem = memo(ResultItemComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
);
