import { FormEvent, useCallback, useState } from "react";
import SearchResult from "../components/SearchResult";

interface ProductResponse {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
}
interface Results {
  totalPrice: number;
  data: any[];
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    console.log(data);

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product: any) => {
      return {
        ...product,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce(
      (total: number, product: ProductResponse) => (total += product.price),
      0
    );

    setResult({ totalPrice, data: products });
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Pesquisar</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {result.data.length <= 0 ? (
        <span>Não foi encontrado nenhum resultado</span>
      ) : (
        <SearchResult
          totalPrice={result.totalPrice}
          results={result.data}
          onAddToWishList={addToWishList}
        />
      )}
    </div>
  );
}
