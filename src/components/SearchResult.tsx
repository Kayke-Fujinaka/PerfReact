import { ResultItem } from "./ResultItem";

interface SearchResultProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export default function SearchResult({
  results,
  totalPrice,
  onAddToWishList,
}: SearchResultProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return (
          <ResultItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })}
    </div>
  );
}
