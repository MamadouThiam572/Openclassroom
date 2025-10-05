# Projet Full-Stack : API pour site e-commerce

Ce projet a été réalisé dans le cadre de la formation "Développeur Web Full-Stack" d'OpenClassrooms. Il consiste en la création d'une API RESTful pour un site e-commerce fictif, ainsi qu'une interface frontend pour interagir avec cette API.

## Contexte

L'objectif de ce travail pratique était de mettre en application les compétences acquises en développement backend, notamment avec Node.js, Express et MongoDB, pour construire une API robuste et fonctionnelle.

## Structure du projet

- `/backend` : Contient le serveur Node.js et l'API RESTful.
- `/frontend` : Contient une application web cliente simple pour afficher les produits.

## Guide d'installation et de démarrage

### Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- npm (généralement inclus avec Node.js)
- Une base de données MongoDB (locale ou via un service comme MongoDB Atlas)

### 1. Backend

Le backend est responsable de la logique métier et de la communication avec la base de données.

```bash
# 1. Accédez au dossier du backend
cd backend

# 2. Installez les dépendances
npm install

# 3. Lancez le serveur
# (Assurez-vous que votre chaîne de connexion MongoDB est configurée)
npm run server
```
Le serveur démarrera généralement sur `http://localhost:3000`.

### 2. Frontend

Le frontend est une application simple pour visualiser les données de l'API.

```bash
# 1. Accédez au dossier du frontend
cd frontend

# 2. Installez les dépendances
npm install

# 3. Lancez le client web
npm start
```
L'application s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:8082`.