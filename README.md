# Linguo (Pruebas de Caja Negra)

![Linguo brm](http://abraham.brm.com.co/fabricaDeCajas/images/iconos/linguo.png "Linguo brm")

Esta herramienta escrita en Javascript, automatiza pruebas de validación de formularios. lo que hace es recorrer los formularios y hacer screenshots de la validación de cada campo.

##Pre requisitos

- [NodeJS](https://nodejs.org/) 0.10.*
- [GruntJS](https://nodejs.org/) 0.1.13
- [CasperJS](http://casperjs.org/) 1.1.0
- [PhantomJS](http://phantomjs.org/) 1.8.2
- [Python](https://www.python.org/) 2.6

##Instalación
Lo primero que debe hacer es clonar este repositorio en su equipo para poder realizar las pruebas localmente
```Javascript
npm install
```

##Configuración

1. En el archivo *params.json* dentro de la carpeta **casper** se deben colocar los valores name de cada input del formulario.
    - En el parametro **url** se debe colocar la url del formulario que se va a testear.
    - En los inputs de tipo select y option, se debe escribir el value que se va escoger.
    - En los input de tipo checkbox se debe escribir true o false.
2. en el formulario se deben agregar los atributos:
    - **data-validar="texto"**: Inputs que solo acepten entradas de texto.
    - **data-validar="numeros"**: Inputs que solo acepten entradas de número.
    - **data-validar="maxlength"**: Inputs que tengan un largo de texto determinado.
    - **data-validar="confirmar-password"**: Inputs que sean para validar un password.
    - **data-validar="fecha"**: Inputs que sean de tipo date
    - **data-validar="rango"**: Inputs que sean de tipo rango

3. Los mensajes de error se pueden cambiar dentro del archivo **validarForm.js**, para la validación se usa el plugin [jQuery Validate](http://jqueryvalidation.org/) se deben agregar estos 2 scripts al formulario que se está validando.

##Configuración-Jquery-validate

1. Para validar el formulario se usa el plug-in jquery-validate.js.
2. Para implementar este plugin se creo el archivo **validarForm.js** dentro del directorio js que se encuentra dentro del directorio publicacion.
    - En el archivo **validarForm.js** se configura el parametro **rules** en el cual se ponen los nombres (atributo **name**) de los campos del formulario que son requeridos.
    - Luego se configura el parametro **messages** para elegir los mesajes que salen en cada campo requerido.
    - En el parametro **errorPlacement** se puede configurar la ubicacion del mensaje de error.
    - Los parmetros **errorElement** y **errorClass** son para asignar el elemento donde se va a mostrar el mensaje de error y la clase de ese elemento.

##Uso
1. Se enciende el servidor
    ```Javascript
    grunt
    ```
    
2. Se corre el script de CasperJS con gruntJS:
    ```Javascript
    grunt casper
    ```


## Copyright & License

Copyright (C) 2015 - Released under the MIT License.
