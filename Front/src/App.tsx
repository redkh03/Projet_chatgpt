import React, { useState } from "react";
import './App.css';

interface Conversation {
  id: number;
  messages: string[];
  responses: string[];
}

function App() {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    // Appel à l'API backend
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      setResponse("Erreur du serveur. Essayez plus tard.");
      return;
    }

    const data = await res.json();
    const generatedText = data.response && data.response.length > 0 ? data.response[0].generated_text : "Désolé, aucune réponse.";

    // Créer une nouvelle conversation ou ajouter un message à la conversation existante
    if (currentConversation) {
      setCurrentConversation({
        ...currentConversation,
        messages: [...currentConversation.messages, message],
        responses: [...currentConversation.responses, generatedText],
      });
    } else {
      const newConversation = {
        id: Date.now(),
        messages: [message],
        responses: [generatedText],
      };
      setConversations([...conversations, newConversation]);
      setCurrentConversation(newConversation);
    }

    // Afficher la réponse générée
    setResponse(generatedText);
    setMessage(""); // Réinitialiser le champ de saisie
  };

  const handleConversationChange = (conversationId: number) => {
    const conversation = conversations.find(c => c.id === conversationId);
    setCurrentConversation(conversation || null);
  };

  const handleNewConversation = () => {
    setCurrentConversation(null);
    setMessage("");
    setResponse("");
  };

  const handleDeleteConversation = (conversationId: number) => {
    const updatedConversations = conversations.filter(c => c.id !== conversationId);
    setConversations(updatedConversations);
    // Si la conversation supprimée est la conversation actuelle, réinitialise la conversation actuelle
    if (currentConversation?.id === conversationId) {
      setCurrentConversation(null);
      setMessage("");
      setResponse("");
    }
  };

  return (
    <div className="App">
      <h1>Mon ChatGPT</h1>

      {/* Liste des conversations passées */}
      <div className="conversations">
        <h2>Anciennes Conversations</h2>
        <button onClick={handleNewConversation}>Nouvelle Conversation</button>
        <ul>
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <button onClick={() => handleConversationChange(conversation.id)}>
                Conversation {conversation.id}
              </button>
              <button onClick={() => handleDeleteConversation(conversation.id)} style={{ color: 'red' }}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Formulaire de saisie */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écris ton message"
        />
        <button type="submit">Envoyer</button>
      </form>

      {/* Affichage des messages de la conversation actuelle */}
      {currentConversation && (
        <div className="conversation-history">
          <h2>Historique de la conversation</h2>
          {currentConversation.messages.map((msg, idx) => (
            <div key={idx} className="message">
              <p><strong>Utilisateur :</strong> {msg}</p>
              <p><strong>Bot :</strong> {currentConversation.responses[idx]}</p>
            </div>
          ))}
        </div>
      )}

      {/* Affichage de la réponse du bot */}
      {response && (
        <div className="response">
          <h2>Réponse :</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
