
# Proyecto final módulo 2 - Hoshi-Store

Esta pagina fue realizada como proyecto final del módulo 2 CSS ;u; hice un proyecto de una tienda tipo de mercancía japonesa, como de manga, videojuegos, ropa y accesorios de animación japonesa.
El nombre de Hoshi-store viene de estrella y tienda, se me hizo un nombre bonito y como todos alguna vez queremos alcanzar una estrella, se me hizo chido ponerlo :D
En mi página se hizo uso de diferentes etiquetas de HTML que se vieron en el modulo anterior, se estilizó toda la página con CSS, mi principal paleta de colores fue en base a los colores como que representan a Japón, que son el rojo, blanco y negro, asi mismo, por lo mismo que es de mangas más que nada (cómics japoneses), traté de hacer la mayor parte cuadrada simulando como si fueran hojas y también se hizo uso de Git para el controlado y versionado del proyecto y Github Pages para el desplegado de la página a internet.

Aprendí DEMASIADAS cosas con este proyecto, y sé que será mucho texto, asi que lo voy a poner en la siguiente parte por si se la quieren saltar q-q

## Aprendizajes y mis reflexiones
Quise hacer esta página, pero dije "quiero hacerla de que, se me quede de portafolio en un futuro, la voy a tratar de hacer lo más bonita posible :D", les quiero compartir como que los puntos clave que tuve en el proyecto, (con clave me refiero a trabadotas que tuve y como pude mas o menillos arreglarlas JAJAJA) una de las cosas que siempre veía en páginas de e-commerce era como ponían un vídeo, con un fondo a veces grisaceo pero transparente y que se autoreproducía, se me hacía super bonito cuando lo veía y quise aprender a hacer eso y para ello, se usó la etiqueta de vídeo, que la encontré en el sitio de tabla periódica que nos enseñaron en clase:
https://lenguajehtml.com/html/multimedia/etiqueta-html-video/ en un inicio todo bien, pero uno de los problemas que tuve fue que no se autoreproducía, solo cuando guardaba en visual studio code, encontré en el foro de stackoverflow (este https://stackoverflow.com/questions/17994666/video-auto-play-is-not-working-in-safari-and-chrome-desktop-browser) que era porque se tenia que mutear primero y esa fue la solución :D, y luego para poner el fondo como que gris, lo que se hizo fue que agregué como que un div para ahí que ese div fuera solo un coloreado transparente, y ya en el CSS le coloqué el background transparente, pero lo que vi fue que aun con eso no se ponía este fondo grisaceo, entonces, lo que se hizo fue ponerle la superposición que habíamos visto en clase con z-index, poniendo el contenedor en relativo para poder poner el fondo grisaceo-transparente encima del vídeo, o sea, sé que suena mucho texto pero fue como que me hizo clic JAJAJA "si esto no funciona, entonces probaré esto que vimos a ver si en una de esas funciona"
Otra cosa que le quise poner, fue un texto que dijera "hoshi-store" o algo, para que no estuviera el fondo nada más de vídeo y le puse "somos hoshi-store" (que después fue complicado acomodar con los media queries), en todo caso, como quería el diseño que fuera asi todo como que cartoonizado tipo comic-manga-japones, le quise poner el fondo rojo (que ven a lo largo de la página, perdón si llego a molestar o saturar con esto), lo quise hacer en un inicio con una superposición por debajo de color rojo, pero al final se la puse mejor con box-shadow, se me complicó con z-index x-x el ultimo valor le puse 0px para que no estuviera difuminado y se viera con el efecto que quería

Por otro lado, espero no estarles revolviendo la cabeza q-q pero esto va un poquito atrás: en un momento llegué a tener una paleta de colores, que era morado y blanco, pero como luego puse el logo como estilo japones de color rojo (porque como se venden cosas de anime y manga, es más tipo estilo japón ;w;) siento que tuve que cambiar todos los colores para que combinaran con ese logo o idea por asi decirlo, entonces cambié la paleta a un color rojo + blanco + negro como les mencioné al inicio, empecé con el nav y de verdad me encantó el resultado ;w; ya de ahí empecé a jugar un poquito con los colores y traté de hacerlo un poco cartoonezco (aunque es de anime y manga) como se ve con el resto de la página.

Otra cosa que quise hacer es que los títulos de cada sección tuvieran hover, que se subrayaran con color rojo (tipo, para seguir con la paletita de colores y darle un añadido bonito jsjs), la cosa es que traté de hacerlo con la etiqueta de <u>, pero no me dejó, o sea, se ponía TODO, incluso el texto de color rojo, cuando yo quería que el texto fuera de un color y el subrayado de otro, entonces, encontré que el text-decoration funcionaba para esto, en un inicio no me dejó y chequé la documentación de mozilla y ahí agarré una línea de código de ejemplo y con eso jaló!
https://developer.mozilla.org/es/docs/Web/CSS/Reference/Properties/text-decoration

Y OTRA COSA QUE NO ME AGARRABA Y TAMBIEN TUVE QUE CHECAR EN LA DOCUMENTACIÓN DE MOZILLA ERA EL TRANSFORM, por alguna razón según yo solo me agarraba en una parte, pero luego supe que era que tenía que poner los valores en negativo, cuando los ponía en positivo simplemente nunca agarró (aún no sé porqué), con negativo en ambos valores de translation se pudo hacer un mini-tipo de animación hacia arriba cuando hacemos un hover qwq lo feo es que no me acordaba con cual se hacia, y en la documentación de que estaba revisando uno por uno con mi proyecto, de que el translate (que no me había agarrado al inicio), el scale, rotate, TODOS LOS HABÍA PROBADO y nunca había probado en ponerle ambos negativos, y ya con eso funcionó, tal vez igual y era porque lo estaba aplicando en un lugar donde no era (perdón también si abusé de esto q-q se me hacia bonito)
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform

Este proyecto también, bastantes cosas que tiene fue desarrollado a lo largo de las clases y tomé bsatantillas notas de clase en forma de los comentarios, espero no molestar con las notas que llegué a poner q-q
Por otro lado, en una de esas, el tipo de autocompletado del vscode me puso "border-bottom" y dije yo: "a ver, vamos a calarle", y me explotó la mente, es como si en Excel solo hiciéramos el borde pero abajo en el diseño literalmente y dije: lo voy a usar un poquillo más, pero creo que al final lo usé en algunas partecitas

Traté de ponerle efectos aunque sea con transform a todo, incluso a algunos titulos de texto, asi que les recomiendo poner el mouse encima de casi todo de la página :'D lo más seguro es que tenga un efecto!

Por otro lado, siento que una de las partes que se me hizo complicadas fue usar "flex", hasta tuve que buscar videos en YouTube porque no entendia el como usarlo bien en la práctica y este vídeo me apoyó bastante en ello: 
https://www.youtube.com/watch?v=ZOK-DU7vT0A

Quise de paso, estilizar el input de añadir un archivo en el formulario ya que en la página puse que una persona podría mandar sus fotos de productos por el formulario, entonces encontré esta pagina de stack overflow que hablaron de ello: https://stackoverflow.com/questions/572768/styling-an-input-type-file-button
basicamente, al input que sea tipo file, se oculta (porque seguiría apareciendo lo que normalmente aparece como "no hay archivo adjunto" y eso) y en su lugar, se hace como un estilo botón al label y sigue funcionando de igual forma!

Y otra de las cosas que se me hizo más complicado fue los mediaqueries, pero mediante la herramienta de desarrollador de chrome, me hizo bastante apoyo al momento de quererle adaptar algo

Y son todos los aprendizajes que tuve, aparte de lo que tuve en clase :'D pero les quería contar de mis hallazgos en lo que realizaba el proyecto JAJAJA, muchisimas gracias de todo corazón.


## Secciones

- Catalogo
- Proceso de compra
- Sobre nosotros 
- Fotos de la comunidad 
- Contacto
- Carrito de compras
- Botón de subir (subir tooodo hasta arriba)
- Botón de Whatsapp

## Tecnologías empleadas
Se utilizó
- HTML5 con estructura de todo el sitio
- CSS para darle a todo diseño
- Git para control de versiones 
- GitHub para guardar el código en internet y que otras personas puedan colaborar en él  
- GitHub Pages para publicar la página en internet

## Características

- Se usaron tooodas las etiquetas que se vieron en el módulo 1
- Se usó hovers para poner efecto cuando se ponga el mouse sobre algo
- Box-shadow para hacer que se ponga una sombra, en su mayoria se hizo que fuera plana la sombra, no difuminada, para darle efecto cartoon
- Se usaron imagenes locales y de internet
- Se usó borders, tanto para hacerlo igual con el efecto cartoon-comic como para hacerlo en un solo lado
- Video de fondo, con superposición de un fondo gris transparente con z-index, position absolute y relative
- Margins, paddings para espaciado
- Position relative y absolute para poner ciertos botones, como los laterales o el de "ofertONN"
- Transformation translate para mover hacia arriba algo junto con hover y scale para hacer grande de tamaño algo (lo usé en el botón de whatsapp)
- Transition para esto mismo de arriba, ponerle una duración
- Mediaqueries en TOOODO para hacerlo lo más responsivo posible 
- Grid en las fotos de la comunidad
- Formulario estilizado, con su input file estilizado
- Y mucho más ;w; fueron 86 commits + este en total!


## Despliegue
Se desplegó en Github Pages a partir de este repositorio, puedes ver la página a través del siguiente link:

https://mor4n.github.io/Proyecto-Final-modulo-2.github.io/

## Instalación

1. Clona este repositorio:

    ```

    git clone https://github.com/Mor4n/Proyecto-Final-modulo-2.github.io.git

    ```

2. Navega al directorio del proyecto:

    ```
    cd Proyecto-Final-modulo-2.github.io

    ```

3. Para ejecutar el proyecto puedes escribir en la terminal:
    ```
     index.html
    ```
    Con esto se abrirá en la página web en tu navegador predeterminado

    
    También, en el explorador de archivos, dentro de la carpeta Proyecto-Final-modulo-2.github.io

    ```
     Haz doble clic en el archivo index.html y se abrirá en tu navegador predeterminado
    ```
   
## Autor

Creado por [Brayan Morán](https://github.com/Mor4n) - ¡Si te gusta el proyecto, no dudes en contactarme!
## Agradecimientos


Quiero darle las gracias a la sensei Ana, DEV.F, Becalos y a Fundación Traxión por ayudarme en todo, desde aceptarme en esta convocatoria, resolver mis dudas, hasta literal, enseñarme absolutamente todo lo necesario para lograr este proyecto 💕

Estoy demasiado agradecido por las enseñanzas que me están dando y la oportunidad que me dieron, sin ustedes, este proyecto nunca hubiera salido, este proyecto se va a mi portafolio, estoy feliz, aunque ciertas cosas no hayan quedado completamente correctas (como que quise poner un carrusel pero no me salió), pero al final del día, estoy FELIZ con todas las letras, de haber sido parte aunque sea un momento de estar con ustedes, si puedo continuar en el proyecto, daré mi 10000% pero si no, aún así, estoy completamente agradecido y feliz con el resultado final, los amo de verdad, mil gracias por todo.
