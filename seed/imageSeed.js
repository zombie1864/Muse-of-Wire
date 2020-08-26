const Image = require('../models/Image');
const mongoose = require('mongoose');
const db = require("../config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const images = [
  new Image({
    title: 'Art',
    description: 'Neon sign modern art installment',
    imageUrl: 'https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    mature: false
  }),
  new Image({
    title: 'The Red Car Parked On The Street',
    description: 'Picture of small car in front of building with tree',
    imageUrl: 'https://mixkit.imgix.net/art/preview/mixkit-small-car-parked-in-front-of-a-building-with-a-364-desktop-wallpaper-medium.png?w=390&h=219&q=80&auto=format%2Ccompress&q=50&dpr=2',
    mature: false
  }),
  new Image({
    title: 'Cat Using Chopsticks to Eat a Bowl of Ramen',
    description: 'A cat uses chopsticks to eat a bowl of ramen noodles with an egg. Also, there are dumplings, miso sauce and a spoon.',
    imageUrl: 'https://mixkit.imgix.net/art/preview/mixkit-cat-using-chopsticks-to-eat-a-bowl-of-ramen-240-desktop-wallpaper-medium.png?w=390&h=219&q=80&auto=format%2Ccompress&q=50&dpr=2',
    mature: false
  }),
  new Image({
    title: 'Venice Canal with Tourist Gondola',
    description: 'People in rowboats in middle of Venice street canal during day with white clouds in the sky.. Buildings and a bridge over the water in the background. ',
    imageUrl: 'https://image.freepik.com/free-photo/venice-canal-with-tourist-gondola_49537-57.jpg',
    mature: false
  }),
  new Image({
    title: 'Parental Advisory Explicit Content',
    description: 'A woman with brown hair and blue eyes wears a sticker over her mouth',
    imageUrl: 'https://i.pinimg.com/originals/e8/66/c6/e866c6b5db3cd3bc9ac19532e8ad58f0.jpg',
    mature: true
  }),
  new Image({
    title: 'Abstract Eyes Stare',
    description: 'A woman with green eyes and blue purple hair stares ahead. Her face is painted yellow, blue and purple',
    imageUrl: 'https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80',
    mature: true
  }),
  new Image({
    title: 'Colorful Bear Fire Alarm',
    description: 'A bear sticking its tongue out of its mouth painted on a wall over a fire alarm. Colors include dark and light versions of blue, green, yellow, purple, orange, pink, red abd tan',
    imageUrl: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    mature: true
  }),
  new Image({
    title: 'Modern Electricity Ball',
    description: 'A futuristic sphere with white and silver electric shockwaves extending from the nucleus to pink spots on the orb.',
    imageUrl: 'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    mature: true
  }),
  new Image({
    title: 'Peaceful River Sunny Day Mountains',
    description: 'Japanese painting of people in rowboats near a statue.',
    imageUrl: 'https://freeclassicimages.com/images/asian-art-japanese-art-0525.jpg',
    mature: false
  }),
  new Image({
    title: 'Zodiac Tarot Card',
    description: 'A painting or print with zodiac signs and a woman with blonde hair in the middle, bordered with green leaves and blue and red decorations',
    imageUrl: 'https://freeclassicimages.com/images/alphonse_mucha_shop_greeting_card_zodiac_big.jpg',
    mature: false
  }),
  new Image({
    title: 'Colonial Snowy Night',
    description: 'A painting of colonial era city people traveling by horse and carriage, leaving footprints in the snow. A full moon is visible as a party and lights beam from a house',
    imageUrl: 'https://images.unsplash.com/photo-1576570591799-5fcbe0352ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1840&q=80',
    mature: true
  }),
  new Image({
    title: 'Blue Essence Tree Orange Moon',
    description: 'A contemporary modern art original abstract landscape painting.',
    imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/contemporary-modern-art-original-abstract-landscape-painting-blue-essence-by-megan-duncanson-megan-duncanson.jpg',
    mature: false
  }),
  new Image({
    title: 'Machine Gun Man',
    description: 'A photograph man waring a button down shirt and tie with a machine gun over his right shoulder with neon white body paint and a paintbrush stands in the middle of a street with a sign that says palace behind him',
    imageUrl: 'https://images.unsplash.com/photo-1533972751724-9135a8410a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
    mature: true
  }),
  new Image({
    title: 'No Face Woman',
    description: 'An abstract painting of a headless woman whose head is swirls of paint',
    imageUrl: 'https://lh5.googleusercontent.com/proxy/r2eHJhxQcWD0HJ2kdrOCGKykKkd8PKlI5n6gbEfrYrbX2PRaLsb5rXrSCKEZ6-Qnuzk0hpe0_iOyHc1u0otBVA4IdzkwlvxgsJrO76T3s1zh-B0tP93acH_dOAliee_03xpoTey9iJaBx8hJh3gim4w',
    mature: true
  })
]

let stop = 0;
for (let i = 0; i < images.length; i++) {
  images[i].save((err, result) => {
    stop++;
    if (stop === images.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}