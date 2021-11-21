#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie de sécurité des fichiers relatifs à l'application angular12e04"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

source=/var/www/html/angular-e06
destination=/home/Exercices/angular-e06/related_files/publication
rm $destination/*.tar.gz
tar -czvf $destination/pub_angular-e06_`(date +%Y%m%d-%H%M)`.tar.gz $source/

source=/var/www/html/angular-e06t01/
destination=/home/Exercices/angular-e06/related_files/publication/pub_angular-e06t01_`(date +%Y%m%d-%H%M)`.tar.gz
tar -czvf $destination $source

source=/var/www/html/angular-e06t03/
destination=/home/Exercices/angular-e06/related_files/publication/pub_angular-e06t03_`(date +%Y%m%d-%H%M)`.tar.gz
tar -czvf $destination $source

source=/home/Exercices/angular-e06/
destination=/home/CopiesSecurite/angular-e06_`(date +%Y%m%d-%H%M)`.tar.gz
tar --exclude=".angular" --exclude=".angular" --exclude=".git" --exclude="node_modules" -czvf $destination $source
