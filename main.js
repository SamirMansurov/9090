import { header } from "./components/Hat";
import { reload } from "./lib/utils";
import { transaction } from "./components/Tranjactions";
import { card } from "./components/Card";


const data = [
    { id: 1 },
];


const body = document.body;
const cardPlace = document.querySelector('.my_cards');
const tbody = document.querySelector('.place');


reload(data, tbody, transaction); 
reload(data, body, header); // Передает body и функцию header
reload(data, cardPlace, card); // Передает cardPlace и функцию card