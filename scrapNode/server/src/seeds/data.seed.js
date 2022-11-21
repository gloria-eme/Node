const moongose = require("mongoose")

const Author = require("../models/events.model")

const eventsList = [
  {
    title: "La Hora y Media de El Club de la Comedia Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "22€",
    place: "Teatro Príncipe Gran Vía",
    date: " 02 dic al 29 ene",
    promed: "8.7"
  },
  {
    title: "Primera cita",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "7,25€",
    discount: "50%",
    place: "Teatro Muñoz Seca",
    date: " 17 nov al 08 ene",
    promed: "8.6"
  },
  {
    title: "Ponte en mi lugar - 5ª temporada",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "10,15€",
    discount: "30%",
    place: "Teatro Muñoz Seca",
    date: " 18 nov al 07 ene",
    promed: "8.8"
  },
  {
    title: "En ocasiones veo a Umberto - 6ª temporada",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "9,75€",
    discount: "50%",
    place: "Teatro Muñoz Seca",
    date: " 19 nov al 08 ene",
    promed: "8.7"
  },
  {
    title: "Laponia",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "18€",
    discount: "25%",
    place: "Teatro Maravillas",
    date: " 18 nov al 11 dic",
    promed: "9.2"
  },
  {
    title: "Corta el Cable Rojo, en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Impro",
    price: "18€",
    place: "Pequeño Teatro Gran Vía de Madrid",
    date: " 17 nov al 04 ene",
    promed: "9.5"
  },
  {
    title: "Los impresentables - Concurso de monólogos, en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "10€",
    discount: "17%",
    place: "Cinesa Fuencarral",
    date: " 01 dic",
    promed: "9.4"
  },
  {
    title: "La madre que me parió",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "12€",
    place: "Teatro Lara",
    date: " 17 nov al 30 abr",
    promed: "8.8"
  },
  {
    title: "La función que sale mal",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "16,50€",
    discount: "25%",
    place: "Teatro Marquina",
    date: " 17 nov al 08 ene",
    promed: "8.5"
  },
  {
    title: "El método Grönholm",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "14,50€",
    place: "Teatro Alcázar",
    date: " 17 nov al 08 ene",
    promed: "8.9"
  },
  {
    title: "Tinder Sorpresa - Andreu Casanova, en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "17€",
    discount: "15%",
    place: "Teatro Capitol Gran Vía",
    date: " 19 nov al 17 dic",
    promed: "9.2"
  },
  {
    title: "Monólogos de humor - Chocita del Loro Gran vía",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "10€",
    place: "Teatro Chocita del Loro - Gran Vía",
    date: " 17 nov al 27 nov",
    promed: "8.8"
  },
  {
    title: "Los Monólogos de Clandestino Café-Teatro Gran vía",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "12€",
    discount: "33%",
    place: "Clandestino Café Teatro",
    date: " 24 nov al 30 nov"
  },
  {
    title: "No me toques el cuento, en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "14,90€",
    discount: "22%",
    place: "Teatros Luchana",
    date: " 18 nov al 08 ene",
    promed: "9.8"
  },
  {
    title: "Los Monólogos de El Golfo Comedy Club en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "5€",
    discount: "58%",
    place: "El Golfo Comedy Club",
    date: " 19 nov al 30 nov",
    promed: "8.9"
  },
  {
    title: "Luis Piedrahita - Es mi palabra contra la mía",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "15,20€",
    discount: "20%",
    place: "Teatro Reina Victoria",
    date: " 18 nov al 17 dic",
    promed: "9.4"
  },
  {
    title: "Los monólogos de la Vagina, en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "14,25€",
    discount: "25%",
    place: "Nuevo Teatro Alcalá - Sala 2",
    date: " 17 nov al 12 ene",
    promed: "8.8"
  },
  {
    title: "Karim - Muerto de risa",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "14,90€",
    discount: "26%",
    place: "Teatros Luchana",
    date: " 19 nov al 06 ene",
    promed: "9.6"
  },
  {
    title: "Los Locos de la Impro",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Impro",
    price: "16€",
    discount: "11%",
    place: "Cinesa Fuencarral",
    date: " 19 nov al 17 dic",
    promed: "9.3"
  },
  {
    title: "Miles Gloriosus",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Danza",
    price: "13,50€",
    discount: "25%",
    place: "Teatro Reina Victoria",
    date: " 17 nov al 27 nov",
    promed: "8.3"
  },
  {
    title: "Santi Rodríguez - Espíritu",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "16€",
    discount: "11%",
    place: "Cinesa Fuencarral",
    date: " 19 nov al 28 ene",
    promed: "9.1"
  },
  {
    title: "Cluedo 1910: Asesinato en la Mansión Northampton",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "15€",
    discount: "35%",
    place: "La Caja Lista",
    date: " 18 nov al 11 dic",
    promed: "9.5"
  },
  {
    title: "Yo sobreviví a la EGB",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "12€",
    discount: "20%",
    place: "Teatro Bellas Artes",
    date: " 18 nov al 28 ene",
    promed: "9.3"
  },
  {
    title: "Señora de rojo sobre fondo gris, en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "13€",
    place: "Teatro Bellas Artes",
    date: " 24 nov al 22 ene",
    promed: "8.9"
  },
  {
    title: "1,2,3... ¡Magia! – Javi Rufo",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Magia",
    price: "9€",
    discount: "25%",
    place: "Pequeño Teatro Gran Vía de Madrid",
    date: " 19 nov al 08 ene",
    promed: "9.5"
  },
  {
    title: "Cluedo 1920: Los cadáveres no hablan",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "16€",
    discount: "30%",
    place: "La Caja Lista",
    date: " 20 nov al 11 dic",
    promed: "9.8"
  },
  {
    title: "Jamming Sessions y Jamming Sessions Golfa, en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Impro",
    price: "14€",
    discount: "22%",
    place: "Teatro Maravillas",
    date: " 18 nov al 01 abr",
    promed: "8.8"
  },
  {
    title: "¿Quieres pecar conmigo?, en Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "11,20€",
    discount: "30%",
    place: "Teatro Marquina",
    date: " 18 nov al 11 feb",
    promed: "9.2"
  },
  {
    title: "Recién casados, una comedia para reír, reír y reír",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "14,90€",
    discount: "22%",
    place: "Teatros Luchana",
    date: " 19 nov al 08 ene",
    promed: "9.7"
  },
  {
    title: "Los Monólogos del Teatro de las Aguas",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "4€",
    discount: "71%",
    place: "Teatro de las Aguas",
    date: " 17 nov al 30 dic",
    promed: "9.4"
  },
  {
    title: "Jaque a lo imposible - MAGIA DE CERCA - (MAGIA y HUMOR)",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Magia",
    price: "10€",
    discount: "50%",
    place: "Sala Houdini",
    date: " 17 nov al 28 ene",
    promed: "9.5"
  },
  {
    title: "Etty Hillesum 500x600",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "15€",
    place: "Arapiles 16",
    date: " 18 nov al 26 nov",
    promed: "9.6"
  },
  {
    title: "Doble o nada",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "18€",
    discount: "18%",
    place: "Teatros Luchana",
    date: " 25 nov al 08 ene",
    promed: "9.3"
  },
  {
    title: "Gordas",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Comedia",
    price: "14,90€",
    discount: "22%",
    place: "Teatros Luchana",
    date: " 19 nov al 08 ene",
    promed: "9.1"
  },
  {
    title: "Nora y el dragón",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro para niños",
    price: "9,90€",
    discount: "38%",
    place: "Teatros Luchana",
    date: " 19 nov al 08 ene",
    promed: "9.5"
  },
  {
    title: "El Secreto",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "16€",
    place: "Teatro Fígaro",
    date: " 17 nov al 15 ene",
    promed: "8.7"
  },
  {
    title: "Monólogos de humor - Chocita del Loro Av. Brasil",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Monólogos",
    price: "13€",
    place: "Teatro Chocita del Loro - Avenida Brasil",
    date: " 17 nov al 27 nov",
    promed: "9.2"
  },
  {
    title: "Disney On Ice ¡Descubre la Magia! - Madrid",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro para niños",
    price: "16€",
    place: "WiZInk Center",
    date: " 09 feb al 12 feb",
    promed: "8.8"
  },
  {
    title: "La ternura",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Teatro",
    price: "15€",
    place: "Teatro Infanta Isabel",
    date: " 17 nov al 30 dic",
    promed: "9.0"
  },
  {
    title: "Puro Imposible (MAGIA y HUMOR)",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    type: "Magia",
    price: "10€",
    discount: "50%",
    place: "Sala Houdini",
    date: " 18 nov al 28 ene",
    promed: "9.8"
  }
]
