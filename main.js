function addToCart() {
  const size = document.getElementById("size").value;
  const color = document.querySelector('input[name="color"]:checked').value;

  const product = {
    name: "LOSTZ Boxy Basic",
    price: 499,
    size: size,
    color: color,
    image: "https://instagram.fcai20-3.fna.fbcdn.net/v/t1.15752-9/517181081_723573420541976_7961800302015947642_n.jpg"
  };

  let cart = JSON.parse(localStorage.getItem("lostz_cart")) || [];
  cart.push(product);
  localStorage.setItem("lostz_cart", JSON.stringify(cart));

  document.getElementById("message").textContent = "✅ Added to cart!";
}
<script src="main.js"></script>
