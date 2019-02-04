# Section Application

Vous trouverez dans ce dossier tous les fichiers liés à l'application ainsi que le détail des opérations réalisées sur ce **readme**. 

## Initialisation de l'application react.

Arpès avoir installer sur nos ordinateurs : 

* [Node.js](https://nodejs.org/en/) : télécharger et installer pour Windows et MAC
* [Node.js](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/#install-node-js-from-the-nodesource-repository) : Installation de Node.js et npm pour UBUNTU
* [Cmder](http://cmder.net/) : pas obligatoire mais préférable si vous êtes sur windows
* [Hyper](https://hyper.is/) : pas obligatoire mais préférable si vous êtes sur mac/linux
* [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) : permet d'avoir un affichage des erreurs en réact sur google chrome "débug"
* [VS Code](https://code.visualstudio.com/) : vous connaissez, pourquoi vscode me direz-vous? car il y a des plugins intéressants pour react
* [Standard.js](https://standardjs.com/) : code standardisé en js (plug-in VScode)

Importation des fichiers de bases nécessaire pour faire tourner une application react, via le terminal: 
(à ne réaliser qu'à la création d'un site en react)

* `cd projet-foyer-accueil-VIC/Application` (se placer dans le repo au bon endroit)
* `npx create-react-app vic` (importe les fichiers nécessaire à une app react)

Lancer l'application sur un serveur local, dans le terminal : 

* `cd projet-foyer-accueil-VIC/Application/vic` (se placer dans le repo au bon endroit)
* `npm start` (lance l'application sur un serveur local)

**Si vous avez cloné ce repo en local ou l'avez fork, il vous faut:**

* vous rendre dans le fichier vic sur votre machine
* `npm install` (installe localement les dépendances pour faire tourner react)
* `npm start` (lance l'application sur un serveur local)

## Installation de bootstrap.

Dans le terminal : `npm install bootstrap`

Dans le fichier `vic/src/index.js`: écrire `import 'bootstrap/dist/css/bootstrap.min.css';`

## Installation de SASS/SCSS

Dans le terminal : `npm install node-sass`

A partir de la react va compiler lui même vos Scss ou Sass.

## Utiliser les icones Font-Awesome avec React

**Installer la librairie Font-Awesome**

```
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-fontawesome
```

**Importer les icones que on veut utiliser dans nos components**

```JS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
```

**Placer l'icone dans le Jsx**

```JS
<FontAwesomeIcon icon={faCoffee} />
```

pour plus d'info lire la [doc](https://www.npmjs.com/package/@fortawesome/react-fontawesome)

