require("dotenv").config();

const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { amount, email, name, phone } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid donation amount" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:3000/support?success=true",
      cancel_url: "http://localhost:3000/support?canceled=true",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation to ICDEI",
              description: `Thank you for your support, ${name}!`,
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        donor_name: name,
        donor_phone: phone || "Not provided",
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 4242;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
