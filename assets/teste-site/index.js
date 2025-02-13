const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

scrape({
    // Forneça a URL do site que você quer copiar
    urls: ['https://zerobugs.com.br'],

    // Especifique a pasta onde os arquivos do site serão salvos em pasta-do-site
    directory: path.resolve(__dirname, 'C:\Users\luisa\Downloads\teste-site'),
    
    // carregue o plugin do Puppeteer
    plugins: [ 
        new PuppeteerPlugin({
            launchOptions: { 
                headless: true
            },
            scrollToBottom: {
                timeout: 10000, 
                viewportN: 10 
            }
        })
    ]
});