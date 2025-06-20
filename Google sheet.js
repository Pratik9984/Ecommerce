<script>
  async function submitCustomerInfo(e) {
    e.preventDefault();

    const customer = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      address: document.getElementById("address").value.trim()
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbxZSJkUk1Z49wDeMGf3b_7zpPcSk638_20CDCoJXh12nIIm7W3FuRGJYohV2kOn_zhH/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        alert("Order submitted successfully!");
        window.location.href = "thankyou.html";
      } else {
        alert("Failed to submit order.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  }
</script>
