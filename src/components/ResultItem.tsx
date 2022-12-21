interface ResultItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export default function ResultItem({ product }: ResultItemProps) {
  return (
    <li>
      {product.title} - {product.price}
    </li>
  );
}
