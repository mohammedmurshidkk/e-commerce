const serverEndPoint = "https://fakestoreapi.com";

export async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
  return response;
}
