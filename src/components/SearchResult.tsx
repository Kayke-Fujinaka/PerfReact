import ResultItem from "./ResultItem";

interface SearchResultProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export default function SearchResult({ results }: SearchResultProps) {
  return (
    <div>
      {results.map((product) => {
        return <ResultItem key={product.id} product={product} />;
      })}
    </div>
  );
}
