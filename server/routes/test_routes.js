const express     = require('express');
const router      = express.Router();

console.log('# test_routes loaded');

var posts = [
  {
    "title" : "Hoe kun je een team nog meer motiveren op de training",
    "subtitle" : "Begin bij jezelf",
    "url" : "",
    "image" : "http://www.hockeytips.eu/images/HockeyTips/motivatie.png",
    "body" : "body tekst"
  },
  {
    "title" : "Waarom het ontwikkelen van je talent belangrijker is, dan het ontwikkelen van je zwakke kanten",
    "subtitle" : "Artikel van evelien hennevelt op linkin",
    "url" : "",
    "image" : "https://media.licdn.com/mpr/mpr/jc/AAEAAQAAAAAAAAT2AAAAJGM2N2Y2NmU1LTdhODgtNGViNy1iZTQ3LTQzYmFlMTFhMGQzZQ.jpg",
    "body" : "body tekst"
  }, 
  
];

var popular_posts = [
  {
    "title" : "Waarom het ontwikkelen van je talent belangrijker is, dan het ontwikkelen van je zwakke kanten",
    "subtitle" : "Artikel van evelien hennevelt op linkin",
    "url" : "",
    "image" : "https://media.licdn.com/mpr/mpr/jc/AAEAAQAAAAAAAAT2AAAAJGM2N2Y2NmU1LTdhODgtNGViNy1iZTQ3LTQzYmFlMTFhMGQzZQ.jpg",
    "body" : "body tekst"
  }, 
  {
    "title" : "Hoe kun je een team nog meer motiveren op de training",
    "subtitle" : "Begin bij jezelf",
    "url" : "",
    "image" : "http://www.hockeytips.eu/images/HockeyTips/motivatie.png",
    "body" : "body tekst"
  },
  {
    "title" : "Waarom het ontwikkelen van je talent belangrijker is, dan het ontwikkelen van je zwakke kanten",
    "subtitle" : "Artikel van evelien hennevelt op linkin",
    "url" : "",
    "image" : "https://media.licdn.com/mpr/mpr/jc/AAEAAQAAAAAAAAT2AAAAJGM2N2Y2NmU1LTdhODgtNGViNy1iZTQ3LTQzYmFlMTFhMGQzZQ.jpg",
    "body" : "body tekst"
  },
];

var exercises = [
  {
    "title" : "Een mooie oefening",
    "subtitle" : "subtitle",
    "url" : "",
    "image" : "http://www.sportsessionplanner.com/uploads/images/session_transitions/79483.jpg",
  },
    {
    "title" : "Een mooie oefening",
    "subtitle" : "subtitle",
    "url" : "",
    "image" : "http://www.hockeycoach.nl/resources/1/tekening1.jpg",
  },
    {
    "title" : "Een mooie oefening",
    "subtitle" : "subtitle",
    "url" : "",
    "image" : "http://ww.w.hockey-academy.nl/content/previews/838.gif",
  },
    {
    "title" : "Een mooie oefening",
    "subtitle" : "subtitle",
    "url" : "",
    "image" : "http://www.hcuden.nl/files/nieuws/oefening.jpg",
  },
  
];



router.get('/',function(req,res){
  res.redirect('/home');
});

router.get('/home', function(req,res){
  res.render('test/index',{
    title: "home",
    description: "",
    author: "",
    keywords: "",
    breadcrumb: ["home"],
    posts: posts,
    popular_posts: popular_posts,
    exercises: exercises
  });
});

module.exports = router;