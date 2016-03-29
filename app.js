var express = require('express');
var http = require("http");
var cheerio = require('cheerio');
var eventsNode = require('events');
var cfg = require('./app-cfg');
var phantom = require('x-ray-phantom');
var xray = require('x-ray');
var _ = require('lodash');
var x = xray() /*.driver(phantom())*/;
var app = express();

/********
 * configuracao
 */
app.use(express.static('public'));

app.get('/busca/:sector/:query', function(req, res) {
  var events = new eventsNode.EventEmitter();
  var sector = req.params.sector;
  var query = req.params.query;
  var shops = _.filter(cfg.shop, {tag: [sector]});
  var resultSet = [];
  var crawlerOrder = [];
  var i = 0;
  
  shops = shops.concat( _.filter(cfg.shop, {tag: ['geral']}) );
  var sites = shops.length;
  
  var cbSite = function(err, ret){
    if(err != undefined){
      console.log('Erro: ', err);
    }
    
    for (var i = 0; i < ret.items.length; i++) {
      var r = {};
      r.cssTitle = ret.items[i].cssTitle;
      r.cssLink = ret.items[i].cssLink;
      r.cssImage = ret.items[i].cssImage;
      r.cssPrice = ret.items[i].cssPrice;
      r.cssOff = ret.items[i].cssOff;
      r.cssParcel = ret.items[i].cssParcel;
      r.cssParcelTimes = ret.items[i].cssParcelTimes;
      resultSet.push(r);
    }
    sites--;

    if(sites == 0){
      events.emit('finish');
    }
  }
  
  events.on('finish', function(){
    res.json(resultSet);
  });
 
  for(var i=0; i<shops.length; i++){
    resultSet = [];
    var shop = shops[i];
    var busca = _.template(shop.url);

    //replace all ocorrences of space by plus
    x( busca({'query': query}).replace(/ /g, '+'), {
        cssShop: 'title',
        items: x(shop.struct.cssReturn, [{
            cssTitle: shop.struct.cssTitle,
            cssLink: shop.struct.cssLink,
            cssImage: shop.struct.cssImage,
            cssPrice: shop.struct.cssPrice,
            cssOff: shop.struct.cssOff,
            cssParcel: shop.struct.cssParcel,
            cssParcelTimes: shop.struct.cssParcelTimes
        }])
    })(cbSite)
  }
  
});

app.get('/shops', function(req, res) {
  res.json(cfg.shop);
});

app.get('/teste', function(req, res) {
  var data = {};
  var sites = -1;
  var events = new eventsNode.EventEmitter();
  
  data.return = [];
  data.sites = ['http://www.brasil.gov.br', 'http://www.serpro.gov.br', 'http://www.servicos.gov.br', 'http://www.caimi.com.br']
  sites = data.sites.length
  
  var fn = function(err, ret){
    if(err != undefined){
      console.log(err);
    }
    data.return.push(ret);
    sites--;
    if(sites == 0){
      events.emit('finish');
    }
  }

  events.on('finish', function(){
    res.json(data.return);  
    //res.send(data.return);
  });
  
  for(var i=0; i<data.sites.length; i++){
    x(data.sites[i], 'title')(fn);
  }
});

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

// redirecionamento padrao caso o express não tenha uma rota definida 
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Pronto! Ouvindo em http://%s:%s', host, port);
});

module.exports = app;