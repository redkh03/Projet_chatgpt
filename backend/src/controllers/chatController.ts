import axios from "axios";
import { Request, Response } from "express";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const userMessage = req.body.message;
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-Nemo-Instruct-2407",
      { inputs: userMessage },
      { headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` } }
    );

    res.json({ response: response.data });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'appel à l'API." });
  }
};
