import { Sequelize } from 'sequelize';

// Configuration de la base de données PostgreSQL
const sequelize = new Sequelize({
  host: 'localhost',
  username: 'postgres', 
  password: 'red25', 
  database: 'chatgpt', 
  logging: false,
});

// Vérification de la connexion
sequelize.authenticate()
  .then(() => {
    console.log('La connexion à la base de données a réussi !');
  })
  .catch((err) => {
    console.error('Impossible de se connecter à la base de données :', err);
  });

export default sequelize;
