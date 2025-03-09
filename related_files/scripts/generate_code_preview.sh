#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie du code HTML et TypeScript dans les fichiers code-preview"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

# Source (so)
so=/home/xd21/angular-e06/src/app
# Destination (de)
de=/home/xd21/angular-e06/src/assets/code-preview/

cp $so/module01.service.ts $de/module01/
mv $de/module01/module01.service.ts $de/module01/typescript.txt

cp $so/module02.service.ts $de/module02/
mv $de/module02/module02.service.ts $de/module02/typescript.txt

cp $so/module03.service.ts $de/module03/
mv $de/module03/module03.service.ts $de/module03/typescript.txt

cp $so/transform01.pipe.ts $de/transform01/
mv $de/transform01/transform01.pipe.ts $de/transform01/typescript.txt

cp $so/t01/t01.component.html $de/t01/
mv $de/t01/t01.component.html $de/t01/html.txt
cp $so/t01/t01.component.ts $de/t01/
mv $de/t01/t01.component.ts $de/t01/typescript.txt

cp $so/t02/t02.component.html $de/t02/
mv $de/t02/t02.component.html $de/t02/html.txt
cp $so/t02/t02.component.ts $de/t02/
mv $de/t02/t02.component.ts $de/t02/typescript.txt

cp $so/t03/t03.component.html $de/t03/
mv $de/t03/t03.component.html $de/t03/html.txt
cp $so/t03/t03.component.ts $de/t03/
mv $de/t03/t03.component.ts $de/t03/typescript.txt

cp $so/t04/t04.component.html $de/t04/
mv $de/t04/t04.component.html $de/t04/html.txt
cp $so/t04/t04.component.ts $de/t04/
mv $de/t04/t04.component.ts $de/t04/typescript.txt

cp $so/t05/t05.component.html $de/t05/
mv $de/t05/t05.component.html $de/t05/html.txt
cp $so/t05/t05.component.ts $de/t05/
mv $de/t05/t05.component.ts $de/t05/typescript.txt

cp $so/t06/t06.component.html $de/t06/
mv $de/t06/t06.component.html $de/t06/html.txt
cp $so/t06/t06.component.ts $de/t06/
mv $de/t06/t06.component.ts $de/t06/typescript.txt

cp $so/t07/t07.component.html $de/t07/
mv $de/t07/t07.component.html $de/t07/html.txt
cp $so/t07/t07.component.ts $de/t07/
mv $de/t07/t07.component.ts $de/t07/typescript.txt

cp $so/t08/t08.component.html $de/t08/
mv $de/t08/t08.component.html $de/t08/html.txt
cp $so/t08/t08.component.ts $de/t08/
mv $de/t08/t08.component.ts $de/t08/typescript.txt

cp $so/t09/t09.component.html $de/t09/
mv $de/t09/t09.component.html $de/t09/html.txt
cp $so/t09/t09.component.ts $de/t09/
mv $de/t09/t09.component.ts $de/t09/typescript.txt

cp $so/t10/t10.component.html $de/t10/
mv $de/t10/t10.component.html $de/t10/html.txt
cp $so/t10/t10.component.ts $de/t10/
mv $de/t10/t10.component.ts $de/t10/typescript.txt

cp $so/t11/t11.component.html $de/t11/
mv $de/t11/t11.component.html $de/t11/html.txt
cp $so/t11/t11.component.ts $de/t11/
mv $de/t11/t11.component.ts $de/t11/typescript.txt

cp $so/t12/t12.component.html $de/t12/
mv $de/t12/t12.component.html $de/t12/html.txt
cp $so/t12/t12.component.ts $de/t12/
mv $de/t12/t12.component.ts $de/t12/typescript.txt

cp $so/t13/t13.component.html $de/t13/
mv $de/t13/t13.component.html $de/t13/html.txt
cp $so/t13/t13.component.ts $de/t13/
mv $de/t13/t13.component.ts $de/t13/typescript.txt

cp $so/t14/t14.component.html $de/t14/
mv $de/t14/t14.component.html $de/t14/html.txt
cp $so/t14/t14.component.ts $de/t14/
mv $de/t14/t14.component.ts $de/t14/typescript.txt

cp $so/t15/t15.component.html $de/t15/
mv $de/t15/t15.component.html $de/t15/html.txt
cp $so/t15/t15.component.ts $de/t15/
mv $de/t15/t15.component.ts $de/t15/typescript.txt

cp $so/t16/t16.component.html $de/t16/
mv $de/t16/t16.component.html $de/t16/html.txt
cp $so/t16/t16.component.ts $de/t16/
mv $de/t16/t16.component.ts $de/t16/typescript.txt
