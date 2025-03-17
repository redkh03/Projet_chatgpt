import axios from "axios";

export const sendMessageToChatGPT = async (message: string) => {
  try {
    const response = await axios.post("http://localhost:5000/api/chat", {
      message,
    });
    return response.data.response;
  } catch (error) {
    console.error("Erreur API", error);
    return "Erreur lors de la communication avec l'IA.";
  }
};
