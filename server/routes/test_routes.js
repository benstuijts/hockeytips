const express     = require('express');
const router      = express.Router();

console.log('# test_routes loaded');

router.get('/',function(req,res){
  res.redirect('test/home');
});

router.get('/home', function(req,res){
  res.render('test/index',{
    title: "All routes",
    description: "",
    author: "",
    keywords: "",
    breadcrumb: ["home"]
  });
});

module.exports = router;