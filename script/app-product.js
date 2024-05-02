const setProduct = (product) => {
  const id = document.getElementById("products-id");
  const name = document.getElementById("products-name");
  const brand = document.getElementById("products-brand");
  const img = document.getElementById("products-img");
  const des = document.getElementById("products-description");

  id.innerHTML = product.id;
  name.innerHTML = product.title;
  brand.innerHTML = product.brand;
  img.src = `${product.thumbnail}`;
  des.innerHTML = product.description;
};

const fetchProduct = async (number) => {
  const res = await fetch(`https://dummyjson.com/products/${number}`);

  // console.log(await res.json())

  return await res.json();
};

// fetchProduct(10)
const generatePD = async () => {
  const random = Math.floor(Math.random() * 10) + 1;
  const product = await fetchProduct(random);
  setProduct(product);
};
