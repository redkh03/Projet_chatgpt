# Projet ChatGPT

Ce projet permet de créer une application de chatbot similaire à ChatGPT en utilisant une architecture backend avec Node.js (Express) et un frontend en React. Le backend communique avec un modèle de génération de texte pour répondre aux messages de l'utilisateur.
'utilisateur. Le frontend affiche la réponse sous forme de texte, avec la possibilité de gérer plusieurs conversations.

## Fonctionnalités

- Interface utilisateur pour envoyer des messages.
- Backend pour traiter les messages via une API et générer des réponses.
- Gestion des conversations avec la possibilité d'ajouter, de supprimer et de revenir sur des conversations précédentes.
- Style personnalisé pour l'interface de chat.
- Versionnement des changements via Git et GitHub.

## Technologies utilisées

- **Frontend** : React, TypeScript, CSS
- **Backend** : Node.js, Express, TypeScript
- **API de génération de texte** : Hugging Face, Mistral, ou modèle GPT
- **Base de données** : PostgreSQL (si implémentée dans une version future)
- **Versionning** : Git, GitHub

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les logiciels suivants :

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [npm](https://www.npmjs.com/) (gestionnaire de paquets Node.js)
- Un éditeur de texte comme [VS Code](https://code.visualstudio.com/)

## Installation

### Étape 1 : Cloner le dépôt

Clonez le projet en utilisant Git :

```bash
git clone https://github.com/redkh03/Projet_chatgpt.git

Étape 2 : Installer les dépendances


Backend :
cd backend
npm install
Frontend :
cd frontend
npm install

Étape 3 : Configurer l'API (si nécessaire)
Dans le fichier .env du backend, assurez-vous de configurer correctement votre clé API pour le modèle de génération de texte, par exemple :

env
API_KEY=your_api_key_here
Étape 4 : Lancer le serveur
Une fois les dépendances installées, on peut  démarrer le serveur.

Backend :
cd backend
npm run dev
Le serveur backend sera accessible sur http://localhost:5000.

Frontend :
cd frontend
npm start
Le frontend sera accessible sur http://localhost:3000.
