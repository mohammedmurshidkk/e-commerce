const API_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  const response = await fetch(`${API_URL}/products`)
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
  return response;
}

export async function fetchProductDetail(id) {
  const response = await fetch(`${API_URL}/products/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
  return response;
}

export async function fetchProductCategories() {
  const response = await fetch(`${API_URL}/products/categories/`)
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
  return response;
}

export async function fetchProductByCategory(cat) {
  const response = await fetch(`${API_URL}/products/category/${cat}`)
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
  return response;
}
