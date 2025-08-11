type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  picture: string;
};

const ProductCard = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // optional: prevents data caching in dev
  });
  const products: Product[] = await res.json();

  return (
    <div>
      {products.map((prod) => (
        <div key={prod._id}>
          <h2>{prod.name}</h2>
          <p>Price: ${prod.price}</p>
          <p>{prod.description}</p>
          <img src={prod.picture} alt={prod.picture} width="200" />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
