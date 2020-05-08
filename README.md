# Servidor Web HTTP con EXPRESS

Esta es una aplicación web con las siguientes rutas de servicio:

* /
    + Ruta de inicio, página principal de la aplicación, compuesta por:
        - El nombre es dinámico en el código.
        - El nombre es capitalizado en el código.
* /about
    + Información de usuario, la página contiene una descripción e imagen, compuesta por:
    
### En ambos casos se utilizo hbs para renderizar la vista por medio de la ruta, también se utilizaron partials para head, navbar y footer, por último se configurarón helpers para el año y la capitalización del texto.