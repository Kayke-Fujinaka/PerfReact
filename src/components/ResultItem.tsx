import { memo } from "react";

interface ResultItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ResultItemComponent({ product }: ResultItemProps) {
  return (
    <li>
      {product.title} - {product.price}
    </li>
  );
}

export const ResultItem = memo(ResultItemComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
);
