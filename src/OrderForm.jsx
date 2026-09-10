import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole"
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Order submitted successfully!");
  }

  const validPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Information</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="09xxxxxxxx"
      />

      <select
        name="area"
        value={form.area}
        onChange={handleChange}
      >
        <option value="Bole">Bole</option>
        <option value="Piassa">Piassa</option>
        <option value="Kazanchis">Kazanchis</option>
        <option value="CMC">CMC</option>
        <option value="Mexico">Mexico</option>
      </select>

      <button
        type="submit"
        disabled={!validPhone}
      >
        Pay with TeleBirr
      </button>
    </form>
  );
}

export default OrderForm;