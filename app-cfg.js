module.exports = {

        registers: [{
            shop: 'Submarino',
            title: 'cadeira',
            image: 'http://isuba1-a.akamaihd.net/produtos/01/00/item/111804/6/111804634G1.jpg',
            link: 'http://www.submarino.com.br',
            value: 'R$ 1000,00',
            value_off: 'R$ 900,00',
            value_parcel: '12 x R$99,99'
        }, {
            shop: 'Kabum',
            title: 'cadeira',
            image: 'http://static4.kabum.com.br/produtos/fotos/72534/72534_index_p.jpg',
            link: 'http://www.kabum.com.br',
            value: 'R$ 1000,00',
            value_off: 'R$ 900,00',
            value_parcel: '12 x R$99,99'
        }, {
            shop: 'Pichau',
            title: 'cadeira',
            image: 'http://images.pichau.com.br/media/catalog/product/cache/1/small_image/215x162/9df78eab33525d08d6e5fb8d27136e95/2/o/2o.jpg',
            link: 'http://www.pichau.com.br',
            value: 'R$ 1000,00',
            value_off: 'R$ 900,00',
            value_parcel: '12 x R$99,99'
        }, {
            shop: 'e-Cadeiras',
            title: 'cadeira',
            image: 'http://design.jet.com.br/ecadeiras/Produto/30862015191544.jpg',
            link: 'http://www.ecadeira.com.br',
            value: 'R$ 1000,00',
            value_off: 'R$ 900,00',
            value_parcel: '12 x R$99,99'
        }, {
            shop: 'Pontofrio',
            title: 'cadeira',
            image: 'http://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=306461807',
            link: 'http://www.pontofrio.com.br',
            value: 'R$ 1000,00',
            value_off: 'R$ 900,00',
            value_parcel: '12 x R$99,99'
        }],

        //===========================================================
        shop: [{
            tag: ['geral'],
            name: 'Submarino',
            url: 'http://busca.submarino.com.br/busca.php?q=${query}',
            color: '#00adef',
            ico: 'http://isuba.s8.com.br/favicon.png',
            struct: {
                cssReturn: 'section.products-area article',
                cssLink: '.productImg a@href',
                cssTitle: '.productInfo a',
                cssImage: 'img.photo@data-xml',
                cssPrice: '.price-area .regular del',
                cssOff: '.price-area .sale strong',
                cssParcel: '.condition',
                cssParcelTimes: 'span.parcel'
            }
        }, {
            tag: ['ferramentas', 'teste'],
            name: 'Jnakao',
            url: 'http://www.jnakao.com.br/resultadopesquisa?pag=1&departamento=&buscarpor=${query}',
            color: '#faa636',
            ico: 'http://www.jnakao.com.br/assets/templates/1/imagens/favicon.ico',
            struct: {
                cssReturn: 'div .produto',
                cssLink: '.titulo a@href',
                cssTitle: '.titulo a',
                cssImage: '.foto a img@src',
                cssPrice: '.preco_preco',
                cssOff: '.preco_vista',
                cssParcel: '.preco_parcelado_vezes',
                cssParcelTimes: '.preco_parcelado_preco',
            }
        }, {
            tag: ['informática'],
            name: 'Terabyte shop',
            url: 'http://www.terabyteshop.com.br/busca?str=${query}',
            color: '#991f1f',
            ico: 'http://www.terabyteshop.com.br/img/favicon.png',
            struct: {
                cssReturn: 'div.row.produtos-home.col-xs-12.col-md-12.mg0 > div.col-xs-12.col-sm-9.col-md-10 > div.col-xs-12.col-sm-6.col-md-3',
                cssLink: 'div > figure > a@href',
                cssTitle: 'a@title',
                cssImage: 'div > figure > a img@src',
                cssPrice: 'div.prod-old-price span',
                cssOff: 'div.prod-new-price span',
                cssParcel: 'div.prod-juros',
                cssParcelTimes: 'span.parcel'
            }
        }, {
            tag: ['ud', 'moveis'],
            name: 'Mobly',
            url: 'http://busca.mobly.com.br/busca.php?q=${query}',
            color: '#eb4134',
            ico: 'http://st1.staticmobly.com.br/images/mobly/favicon.ico',
            struct: {
                cssReturn: '#neemuProducts li',
                cssLink: 'a@href',
                cssTitle: 'span.itm-title',
                cssImage: 'span.itm-imageWrapper@id',
                cssPrice: 'span.itm-price-old',
                cssOff: 'span.itm-price-current',
                cssParcel: 'span.itm-installments-value',
                cssParcelTimes: 'span.itm-installments-count',
            }
        }, {
            tag: ['eletrônicos'],
            name: 'Fast Shop',
            url: 'http://www.fastshop.com.br/webapp/wcs/stores/servlet/SearchDisplay?searchTerm=${query}&categoryId=&storeId=10151&catalogId=11052&langId=-6&pageSize=24&beginIndex=0&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&hotsite=fastshop',
            color: '#cc1f1f',
            ico: 'http://www.fastshop.com.br/wcsstore/FastShopSAS/images/favicon.ico',
            struct: {
                cssReturn: 'div.product',
                cssLink: 'div.product_name a@href',
                cssTitle: 'div.product_name a',
                cssImage: 'span.image-area img@src',
                cssPrice: 'span.old_price',
                cssOff: 'span.price',
                cssParcel: 'span.instalment_price',
                cssParcelTimes: 'span.total_prices',
            }
        }, {
            tag: ['geral'],
            name: 'Extra',
            url: 'http://buscando.extra.com.br/search?w=${query}',
            color: '#a61722',
            ico: 'http://www.extra-imagens.com.br/App_Themes/Extra/favicon.ico',
            struct: {
                cssReturn: 'div.hproduct',
                cssLink: 'a@href',
                cssTitle: 'h2.name',
                cssImage: 'img@src',
                cssPrice: 'span.from',
                cssOff: 'span.for',
                cssParcel: 'span.parcel',
                cssParcelTimes: 'span.condition',
            }
        }, {
            tag: ['ferramentas','teste'],
            name: 'Ferramentas Gerais',
            url: 'http://www.fg.com.br/browse?Dy=1&Nty=1&Ntt=${query}',
            color: '#00542b',
            ico: 'http://static.fg.com.br/b2c/assets/images/icones/favicon.png',
            struct: {
                cssReturn: '.box_produto',
                cssLink: 'a@href',
                cssTitle: '.titulo',
                cssImage: 'a.foto img@src',
                cssPrice: '.preco_de',
                cssOff: 'h3',
                cssParcel: 'span.parcel',
                cssParcelTimes: 'span.condition',
            }
        }, {

            tag: ['geral'],
            name: 'Magazine Luiza',
            url: 'http://www.magazineluiza.com.br/busca/${query}',
            color: '#0083ca',
            ico: 'http://d25zlb44gqlazw.cloudfront.net/static/img/default/favicon-10c1eb8e.png',
            struct: {
                cssReturn: 'li.product',
                cssLink: 'a@href',
                cssTitle: 'a@title',
                cssImage: 'a.product-li > img@data-original',
                cssPrice: 'span.originalPrice',
                cssOff: 'span.cashPrice',
                cssParcel: 'span.installmentPrice',
                cssParcelTimes: 'span.price'
            }
        }, {

            tag: ['geral'],
            name: 'Ponto Frio',
            url: 'http://search.pontofrio.com.br/search?w=${query}',
            color: '#b60f13',
            ico: 'http://www.pontofrio.com.br/favicon.ico',
            struct: {
                cssReturn: 'div.hproduct',
                cssLink: 'a@href',
                cssTitle: 'h2.name',
                cssImage: 'img@src',
                cssPrice: 'span.from',
                cssOff: 'span.for@data-live-price-attribute',
                cssParcel: 'span.parcel',
                cssParcelTimes: 'span.condition'
            }
        }, {
            tag: ['ferramentas', 'teste'],
            name: 'Loja do Mecanico',
            url: 'http://busca.lojadomecanico.com.br/?q=${query}',
            color: '#ff5226',
            ico: 'http://www.lojadomecanico.com.br/gurgel.ico',
            struct: {
                cssReturn: '.cs-product-container',
                cssLink: 'a@href',
                cssTitle: '.cs-product-details-container h2',
                cssImage: 'a span img@src',
                cssPrice: '.cs-price-value',
                cssOff: '.cs-price-value',
                cssParcel: '.chaordic-installment-count',
                cssParcelTimes: '.chaordic-installment-price'
            }
        }, {
          tag: ['informática'],
          name: 'Pichau',
          url: 'http://www.pichau.com.br/catalogsearch/result/index/?q=${query}',
          color: '#E90313',
          ico: 'http://www.pichau.com.br/skin/frontend/pichau/default/favicon.ico',
          struct: {
                cssReturn: '.item',
                cssLink: '.amlabel-div a@href',
                cssTitle: '.title a',
                cssImage: '.amlabel-div img@src',
                cssPrice: 'li.boleto span.valor',
                cssOff: 'li.boleto span.valor',
                cssParcel: 'li.other span.valor',
                cssParcelTimes: 'li.other span.adicional'
            }
        }, {
          tag: ['informática'],
          name: 'Kabum',
          url: 'http://www.kabum.com.br/cgi-local/site/listagem/listagem.cgi?string=${query}&btnG=',
          color: '#2c6eb4',
          ico: '',
          struct: {
                cssReturn: '.listagem-box',
                cssLink: '.listagem-img a@href',
                cssTitle: '.H-titulo a',
                cssImage: '.listagem-img a img@src',
                cssPrice: '.listagem-precoavista',
                cssOff: '.listagem-preco',
                cssParcel: '.listagem-preco12x',
                cssParcelTimes: '.H-15desc'
            }
        }/**/ ]
    } //end exports