import dynamic from "next/dynamic";
import { memo, useState } from "react";
import { AddProductToWishlistProps } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWishlist").then(
      (mod) => mod.AddProductToWishlist
    );
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ResultItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ResultItemComponent({ product, onAddToWishList }: ResultItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return (
    <li>
      {product.title} - {product.priceFormatted}
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </li>
  );
}

export const ResultItem = memo(ResultItemComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
);
