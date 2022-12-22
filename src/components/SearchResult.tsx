import { useMemo } from "react";
import { ResultItem } from "./ResultItem";

interface SearchResultProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export default function SearchResult({ results }: SearchResultProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => (total += product.price), 0);
  }, [results]);
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return <ResultItem key={product.id} product={product} />;
      })}
    </div>
  );
}
