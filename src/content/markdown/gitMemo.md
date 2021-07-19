---
Title:    Memo Git  
layout: post 
Author:   Fletcher T. Penney  
Date:     February 9, 2011  
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/standard.css
slug: '/git/'
---
# Gestion de git 

[tuto web](https://petrus-v.gitbooks.io/git-workshop/content/fr/020_practice/clean.html perus-v)
## les espace de sauvegarde distant 
* Github
* Gitlab
* Bitbucket  
  [comparaison](https://about.gitlab.com/images/blogimages/gitlab-terminology.png "click here")  
  

## Gestion des remotes
- initilisation d'un dossier git remote  sans version de travail : 
```CSS
git init --bare
``` 

- liste des differents remote 
```CSS
git remote -v 
```

- ajouter une branche distante : 
```CSS
git remote -add origin/[mondossier]
```
- untrack ficher :
  The easiest way to unstage files on Git is to use the “git reset” command and specify the file you want to unstage.
```CSS
git reset <commit> -- <path>
git reset monfichier ou mondossier
```

- git ignore
  permet de ne pas s'occuper d'un fichier afin de ne pas le voir dans les fichier non tracker lors d'un git status . Ainsi un git add nous empechera de voir le fichier qui n'est pas a l'etat untrack

- lister les branche distante
  ``git remote -v``
  
- initialition branche distante 
  1-creer le repo sur github
  2-ajouter la branch distante dans le worspace  ( ici le nom de la branche remote s'appel origin on peu modifier)
  ``git remote add origin https://github.com/letotor/cardui-graphikart``  
  3-on doit lier les branches local et distante ensemble
  ``git branch --set-upstream ma_branche_locale repository/branche_distante``

# Creation et mise a jour de la branche distante
* To push the current branch and set the remote as upstream, use

    ``git push --set-upstream origin master``


* to push to the upstream branch
on the remote, use  

    ``git push origin HEAD:master``  

* To push to the branch of the same name on the remote, use  

    ``git push origin HEAD``

* To push to the upstream branch
on the remote, use  

   `` git push origin HEAD:master``

* To push to the branch of the same name on the remote, use   

    ``git push origin HEAD``


* ajout d'une branche distantegit s
    ``git push --set-upstream origin production``


# Supprimer une branche locale avec Git
```css
$ git branch -d [nom-de-ma-branche]
$ git branch -D [nom-de-ma-branche]
```  
* -d est l'abbréviation de --delete qui indique de supprimer la branche  
* -D est l'abbréviation de --delete --force qui permet la suppression peut importe si elle a été mergé ou pas  


# renommer une branche locale
* se portionner sur la branche locale : `git checkout maBranche` (old branch name optionnel si deja positionner sur la branche a renommer)
```CSS
git branch -M <old-branch-name> <new-branch-name>
```
# Inspection des repo distant et leur mapping local
`git remote show origin`  


# Branche detaché du  HEAD
creation nd'une branche temporaire temp
`git checkout -b temp`  
on se position sur la branch temp
`git branch -f dev temp`  
`git checkout dev`  
Apres validation reste à supprimer la branche temporaire  
`git branch -D temp`

# Merge de branch`
 - se position sur la branch  (ici master)  qui doit recevoir le merge  de la branche en avance (ici younup) qui contient les nouvelles fonctionnalité  
`git checkout master`  
- puis faire le merge de la branche avancé avec nouvelle fonction ici l'exemple de la branche  younup a mergé sur le master  
`git merge younup`  

# Ne plus suivre branche distante et supprimeer le tracking
`git remote rm origin`  