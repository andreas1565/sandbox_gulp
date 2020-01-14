# sandbox gulp

## projektberivelse
Grunden til at jeg laver denne sand box med gulp  Er at nemmere konfigurere Sass til CSS og når jeg style med for eksempel flex box og grid er det ikke alle browser der kan understøtte det og jeg ville gerne kunne bruge nogle af de nyeste javascript som browser ikke kan  understøtte og f.eks. hvis jeg får nogle billeder jeg skal have en mindre fin størrelse så de hurtigere kan vi downloadet i browseren kan gulp gør billederne mindre så jeg ikke behøver at åbne for eksempel photoshop og jeg vil gerne kunne komprimere min css og javascript

## list over npm pakker
* babel-core er API. For v5 er babel-pakken CLI og afhænger af babel-core. For v6 er babel-cli-pakken CLI (CLI-bin-kommandoen er dog stadig babel[npm docs](https://www.npmjs.com/package/babel-core)

* babel-plugin-transform-runtime jeg, at det kun er runtime (polyfill og helpers), der understøtter kode, der allerede er blevet transformeret.[npm docs](https://www.npmjs.com/package/babel-plugin-transform-runtime)

* Babel preset-env er en forudindstillet der komprimere ned til minimum ES5 (preset-es2015)[npm docs](https://www.npmjs.com/package/babel-preset-env)

* Babel er en gratis og open source JavaScript-transpiler, der hovedsageligt bruges til at konvertere ECMAScript 2015+ kode til en bagudkompatibel version af JavaScript, der kan køres af ældre JavaScript-motorer. [officeelle docs](https://babeljs.io/docs/en) 

* gulp er et værktøjssæt til at automatisere smertefulde eller tidskrævende opgaver i din udviklingsarbejdsgang, så du kan stoppe med at rod og bygge noget. [officeelle docs](https://gulpjs.com/docs/en/getting-started/quick-start) [npm docs](https://github.com/gulpjs/gulp/tree/master/docs)

* gulp-babel er en wrapper round om babel en wrapper er for at det virker godt med gulp [npm docs](https://www.npmjs.com/package/gulp-babel)

* gulp-concat Filer samles i den rækkefølge, de er specificeret i gulp.src-funktionen[npm docs](https://www.npmjs.com/package/gulp-concat)

* gulp-connect lokal http server med hot reloading [npm docs](https://www.npmjs.com/package/gulp-connect)

* gulp-ejs er så man kan bruge ejs template engine gør at man kan adskille htmlfiler og man kan skive javascript inde i html se docs for mere [npm docs](https://www.npmjs.com/package/gulp-ejs)

* gulp-imagemin  gøre Optimering af billeder med gulp men gulp-imagemin virker ikke helt man kan bruge et hjælpe bibliotek der header imagemin-jpeg-recompress [npm docs](https://www.npmjs.com/package/gulp-imagemin) 

* gulp-postcss PostCSS er en forbehandler, der bruger JS-plugins til at transformere CSS-stilarter. Disse plugins kan fylde din CSS, understøtte variabler og mixins, transportere fremtidig CSS-syntaks, inline-billeder og mere[npm docs](https://github.com/postcss/gulp-postcss)

* gulp-rename gøre at man kan gøre for example lave en text file til en MD file [npm docs](https://www.npmjs.com/package/gulp-rename)

* gulp-sass Sass er lige some css men med flere features [officeelle docs](https://sass-lang.com/documentation) [npm docs](https://www.npmjs.com/package/sass)

* gulp-sourcemaps er Et kildekort er en fil, der kortlægger fra den transformerede kilde til den originale kilde, der gør det muligt for browseren at rekonstruere den
originale kilde og præsentere den rekonstruerede original i debuggeren. For at aktivere debuggeren til at arbejde med et kildekort, skal du: generere kildekortet [npm docs](https://www.npmjs.com/package/gulp-sourcemaps)

* gulp-uglify kan komprimere javascript [npm docs](https://www.npmjs.com/package/gulp-uglify)

* cssnano kan komprimere css [npm docs](https://www.npmjs.com/package/gulp-cssnano)

* Autoprefixer. PostCSS-plugin til parse CSS og præfikser til CSS-regler ved hjælp af værdier og det er anbefalede af google og brugt i Twitter and Alibaba. [npm docs](https://www.npmjs.com/package/autoprefixer)

## kommandoer
  for at installer devDependencies fra package.json skriv `npm i` for at køre dette projekt `npm run dev` det vil starter en lokal http server med hot reloading  hvis du ville installer en nye pakke/moduler hvis pakken kun skal bruge på fro-end se kode-eksempler ellers skriv `npm i pakkenavn` hvis du vill fjern en pakke/moduler skriv `npm uninstall pakkenavn` for at opdatere alle pakke devDependencies skrive `npm update` denne komando bør skrives før `npm i` for produktion skrive `npm run build` og upload dist mappen til din http server

## kode-eksempler
```javascript
.task () - Opretter en opgave som nævnt ovenfor
.src () - identificerer hvilke filer, du vil samle til en bestemt opgave
.pipe () - tilføjer en funktion til den Node-strøm, som Gulp bruger; du kan rør flere funktioner i den samme opgave (læs en fremragende opskrivning om dette emne på florian.ec)
.dest () - skriver den resulterende fil til en bestemt placering
.watch () - identificerer filerne for at registrere eventuelle ændringer på
```