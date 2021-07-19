---
Title:    PHP symfony  
layout: post 
Author:   Fletcher T. Penney  
Date:     February 9, 2011  
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/standard.css
slug : '/symfony/'
---

# utilisation de symfony
# creer un projet de base symfony : 
`symfony new demo --full` ou sans la CLI : 
` composer create-project symfony/website-skeleton  demo`

-installer la CLI symfony prealablement

-installer une librairie : 
`composer require server --dev`

-activer/desactiver tls dans composer : 
`composer config -g -- disable-tls true`
`composer config -g -- disable-tls false`


## creation d'un projet sous symfony: 
 `composer create-project symfony/website-skeleton demo`  

 - Controller ( metier),twig (template affichage) doctrine (BDD)
## Principe du controlleur
- Navigateur appel une route -> le serveur recoit l a requete -> serveur renvoie la reponse -> navigateur utilise la reponse
- creation d'un controller : `symfony  
  
## Construction des controleur symfony
`php bin/console make:controller`

- lancer server symfony :
`symfony server:start`

lancer chrome et son serveur:
`symfony open:local`
 si conflit ajouter au fichier composer.json cela :
 `"config": {
    "platform-check": false
  }`
`  composer update`

## lister les version php installer :
`symfony local:php:list`

`echo 7.3.13 > .php-version`



# utilsiation de twig
- langage de rendu
moteur de template pour le rendu dans l'html
- simplicité , pas de php, integration avec front ux ui
- utilisable sur d'autre langage
  affichage d'une variable: `{{mavariable}}`
  condition : `{% if %} {% endif%} `
  block : `{% block monbloc %}{% endblock %} `

- fichier base.html.twig est le modele que sera utiliser sur toute les pages 

## etendre un template et surcharge de bloc body: 
```TWIG
{% extends "base.html.twig" %}
{% block body %}
<p> lire un article</p>
{% endblock %}
```

## utiliser webpack dans projet symfony:
`composer require symfony/webpack-encore-bundle`

et pour installer dependance javacscipt :
`npm install  ou yarn install `

# Theme boottrap :( bootswatch)

- bootstrap en Scss permet de personaliser les couleurs  plutot que du'iltiser bootswatch

outils de compilation sass SassLoader :
`npm install sass-loader@^9.0.1 node-sass --save-dev` 
dans webpack decommenter la ligne .enableSaasLoader()
dans twig importer les fichier de feuille de style saas en faisant :
` {#{{ encore_entry_link_tags('app') }}#}`
`npm run build`  
`yarn add postcss-loader autoprefixer --dev`


# ORM Doctrine de symfony
## Classes php divisé en 3 fonctionnalitées 
(et qui permet de faire des requete SQL mais de maniere transparente : c'est l'abstraction)
 1- entity : represente les tables
 2- Manager: permet de manipuler une ligne / CRUD
 3- repository: permet de faire des selections

## migrations 
les fichiers sont le reflet / l'expression de la BDD et sont partageables sur un repo entre developpeur 
Exemple: 
- migration1 : créée 2 table  
- migration 2 : suppression d'un champs d'une table, creer une autre table , je supprule une autre
- migration 3 : suppression d'une table , relation entre 2 tables

## LEs fixtures :
script qui va creer un jeu de  fausse deonnées 

avec migration et fixture plus deboins de script sql suel les fichiers suffisent a avoir un etat d'une base identique entre dev
4
-installation : 
`composer require orm-fixtures --dev` 
-creation d'une fixture:
`php bin/console make:fixtures`
-chargement d'une fixture et flush
`php bin/console doctrine:fixtures:load`

## fichier de conf url des BDD pour symfony
Dans fichier .env:
 `  DATABASE_URL="mysql:/root@127.0.0.1:3306/demo2?serverVersion=5.7"`

 ## commande doctrine
 - creer une BDD demo dans doctrine : `php /bin/console doctrine:database:create `
 - creer une entity:
 ` php bin/console make:entity`
 -creer une table refletant les fichier entity.php (creation d'un fichier migration pour le script sql):
 `php bin/console make:migration`
-lancer la migration
`php bin/console doctrine:migrations:migrate`

