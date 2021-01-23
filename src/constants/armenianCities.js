import { upperFirst } from 'lodash/string';

const cities = [
  'All',
  'Yerevan',
  'Gyumri',
  'Vanadzor',
  'Vagharshapat',
  'Abovyan',
  'Kapan',
  'Hrazdan',
  'Armavir',
  'Artashat',
  'Ijevan',
  'Gavar',
  'Goris',
  'Charentsavan',
  'Ararat',
  'Masis',
  'Artik',
  'sevan',
  'Ashtarak',
  'dilijan',
  'sisian',
  'alaverdi',
  'stepanavan',
  'martuni',
  'spitak',
  'vardenis',
  'Yeghvard',
  'Byureghavan',
  'Berd',
  'Yeghegnadzor',
  'Tashir',
  'Kajaran',
  'Aparan',
  'Vayq',
  'Chambarak',
  'Maralik',
  'Noyemberyan',
  'Talin',
  'Jermuk',
  'Meghri',
  'Ayrum',
  'Akhtala',
  'Tumanyan',
  'Tsaghkadzor',
];

const CITIES = cities.map((el) => upperFirst(el));

export const CITIESWITHOUTALL = cities.filter((el) => el !== 'All');

export default CITIES;
