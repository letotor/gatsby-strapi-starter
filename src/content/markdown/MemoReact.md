---
Title:    React  
layout: post 
Author:   Fletcher T. Penney  
Date:     February 9, 2011  
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/standard.css
slug : '/react/test'
---


* C'est quoi React :  
C'est une librairie JS et non un framework.
- creation d'interface web monopage

## 15 - Affichage des images dans React
---
* import standard avec balise <img> :  
  ```JS
  import car from'../static/media/car.png'  
  ...
  <img src="{car}" alt="mon Vehicule"/>
  ```

* import direct d'un svg dans le render :
  ```JS
  const CarimageSVG = () => {
      return (
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
            <g fill="#61DAFB">
                
                <circle cx="420.9" cy="296.5" r="45.7" />
                <path d="M520.5 78.1z" />
            </g>
        </svg>
      )
    }
  ```  

  Modification d'un svg attribut fill dans path, etc:  
  ```JS
  <svg className="carBorder" enableBackground="new 0 0 512 512" height={props.height} width={props.width} id="Layer_1" version="1.1" viewBox="0 0 64 64"  >
    <title>montitre</title>
    <path fill={props.color} fillRule="none" d="data ici...." />
</svg>    
``` 
 
**regles JS** :pas de tiret dans els attribut en JS . Il faut remplacer par la majuscule du mot suivant

Cycle de vie :
[cycled e vie d'un composant](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/, 'wojtekmaj')


1- Route et browserRouteur :  
Gestion des path dans les url
```JS
import {BrowserRouter,Route}from'react-router-dom';
...
 <BrowserRouter basename="/">
            
                <Menu/>

                <Route exact path="/" component={Docs}/> 
                <Route   path="/Community" component={Community}/> 
                <Route path="/Tutorial" component={Tutorial}/> 
               
                
           </BrowserRouter>
``` 
2- Link
Le composant link replace la balise a par defaut qui evite un rechargement d ela page vers la Href  
```JS
<Link className="nav-link" to="/Tutorial">Tutorial</Link>
```  
Balise navlink permet de mettre une classactive

