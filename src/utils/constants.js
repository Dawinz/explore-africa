// API Configuration
export const API_BASE_URL = 'https://restcountries.com/v3.1';
export const API_FIELDS = 'name,capital,population,area,region,subregion,languages,currencies,flags,borders,timezones,latlng,cca2,cca3,independent,landlocked,maps';
export const UNSPLASH_BASE_URL = 'https://api.unsplash.com';

// App Configuration
export const APP_NAME = 'African Countries Explorer';
export const APP_DESCRIPTION = 'Explore all 54 African countries with detailed profiles';
export const HERITAGE_EXCHANGE_URL = 'https://theheritageexchange.com';

// Cache Configuration
export const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
export const COUNTRIES_STORAGE_KEY = 'african_countries_data';

// Regions
export const REGIONS = [
  'All',
  'North Africa',
  'West Africa',
  'East Africa',
  'Central Africa',
  'Southern Africa'
];

// Region mapping for API
export const REGION_MAPPING = {
  'North Africa': 'Northern Africa',
  'West Africa': 'Western Africa',
  'East Africa': 'Eastern Africa',
  'Central Africa': 'Middle Africa',
  'Southern Africa': 'Southern Africa'
};

// African country descriptions
export const COUNTRY_DESCRIPTIONS = {
  'Algeria': 'The largest country in Africa, known for its vast Sahara Desert and rich Berber culture.',
  'Angola': 'A country rich in natural resources, with diverse landscapes from coastal plains to highlands.',
  'Benin': 'The birthplace of Voodoo, with a rich cultural heritage and vibrant traditions.',
  'Botswana': 'Famous for its wildlife conservation and the Okavango Delta, one of Africa\'s natural wonders.',
  'Burkina Faso': 'Known as the "Land of Upright People" with a strong cultural identity.',
  'Burundi': 'A small but culturally rich country known as the "Heart of Africa".',
  'Cameroon': 'Often called "Africa in miniature" due to its diverse geography and cultures.',
  'Cape Verde': 'An island nation with a unique blend of African and Portuguese influences.',
  'Central African Republic': 'A landlocked country with rich biodiversity and mineral resources.',
  'Chad': 'A diverse country with over 200 ethnic groups and languages.',
  'Comoros': 'An island nation known as the "Perfume Islands" for its fragrant plants.',
  'Congo': 'Rich in natural resources and home to the second-largest rainforest in the world.',
  'Democratic Republic of the Congo': 'The second-largest country in Africa with incredible biodiversity.',
  'Djibouti': 'A strategic location connecting Africa and the Middle East.',
  'Egypt': 'The cradle of civilization with ancient pyramids and rich history.',
  'Equatorial Guinea': 'The only Spanish-speaking country in Africa.',
  'Eritrea': 'A country with a rich Red Sea coastline and diverse cultural heritage.',
  'Eswatini': 'One of the last absolute monarchies in the world.',
  'Ethiopia': 'The only African country never colonized, with ancient Christian traditions.',
  'Gabon': 'Known for its efforts in environmental conservation and biodiversity.',
  'Gambia': 'The smallest country on mainland Africa, known as the "Smiling Coast".',
  'Ghana': 'The first African country to gain independence from colonial rule.',
  'Guinea': 'Rich in mineral resources, particularly bauxite and gold.',
  'Guinea-Bissau': 'A small West African country with a rich cultural heritage.',
  'Ivory Coast': 'The world\'s largest producer of cocoa beans.',
  'Kenya': 'Famous for its wildlife safaris and the Great Rift Valley.',
  'Lesotho': 'A mountainous kingdom completely surrounded by South Africa.',
  'Liberia': 'Founded by freed American slaves, with a unique cultural blend.',
  'Libya': 'A North African country with ancient Roman ruins and vast oil reserves.',
  'Madagascar': 'An island nation with unique wildlife found nowhere else on Earth.',
  'Malawi': 'Known as the "Warm Heart of Africa" for its friendly people.',
  'Mali': 'Home to the ancient city of Timbuktu and rich musical traditions.',
  'Mauritania': 'A country where the Sahara meets the Atlantic Ocean.',
  'Mauritius': 'A tropical paradise known for its beaches and cultural diversity.',
  'Morocco': 'A country where Africa meets Europe, with rich Islamic architecture.',
  'Mozambique': 'A country with stunning coastline and rich Portuguese colonial heritage.',
  'Namibia': 'Known for its dramatic desert landscapes and wildlife conservation.',
  'Niger': 'A landlocked country with rich cultural traditions and uranium deposits.',
  'Nigeria': 'Africa\'s most populous country and largest economy.',
  'Rwanda': 'Known as the "Land of a Thousand Hills" and for its remarkable recovery.',
  'São Tomé and Príncipe': 'A small island nation known for its chocolate production.',
  'Senegal': 'A country with a rich musical tradition and vibrant culture.',
  'Seychelles': 'A tropical paradise with pristine beaches and unique wildlife.',
  'Sierra Leone': 'A country with beautiful beaches and rich diamond deposits.',
  'Somalia': 'A country with a long coastline and rich nomadic traditions.',
  'South Africa': 'The "Rainbow Nation" with incredible diversity and natural beauty.',
  'South Sudan': 'The world\'s newest country, rich in oil and cultural diversity.',
  'Sudan': 'A country with ancient Nubian pyramids and rich Islamic heritage.',
  'Tanzania': 'Home to Mount Kilimanjaro and the Serengeti National Park.',
  'Togo': 'A small West African country with a rich cultural heritage.',
  'Tunisia': 'A North African country with ancient Roman ruins and Mediterranean beaches.',
  'Uganda': 'Known as the "Pearl of Africa" for its natural beauty.',
  'Zambia': 'Home to the spectacular Victoria Falls.',
  'Zimbabwe': 'A country with ancient stone ruins and rich cultural heritage.'
};
