In order to be able to run all the components used in the js/html/css
in this repository, please follow the instructions below in the 
location of this repository on your local device:

1. Download Node.js software from https://nodejs.org/en/
   To ensure healthy installment run the following commands separately:

node -v
npm -v

2. npm install
3. npm install lite-server --save-dev
4. npm install bootstrap@4.0.0 --save
5. npm install jquery@3.3.1 popper.js@1.12.9 --save
6. npm install font-awesome@4.7.0 --save // textual icons
7. npm install bootstrap-social@5.1.1 // icons
8. npm install --save-dev node-sass // css preprocessor
9. npm install --save-dev onchange // to watch changes on a document and act as requested
10. npm install --save-dev parallelshell // for parallel scripts and autokill
11. npm install --save-dev rimraf  // for clean up
12. npm -g install copyfiles // copy-move files
13. npm -g install imagemin-cli --unsafe-perm=true --allow-root // image optimization
14. npm install --save-dev usemin-cli cssmin uglifyjs htmlmin //transformation of js/html/css files (dependencies exist so do all must be installed)
15.