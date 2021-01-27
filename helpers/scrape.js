import { add, format } from 'date-fns';
const rp = require('request-promise');
const cheerio = require('cheerio');
const dateFormat = 'dd-MM-yyyy';
const url = 'http://localhost:8000';

export default async function(selector) {
    const today = new Date();
    const tomorrow = add(today, {days: 1});
    const tomorrowString = format(tomorrow, dateFormat);

    return new Promise((resolve, reject) => {
        rp(url)
            .then(function(html){
                try {
                    const $ = cheerio.load(html, {
                        xml: {
                        normalizeWhitespace: true,
                        },
                    });
        
                    const $cells = $(selector);
        
                    const $found = $cells.filter((i, el) => {
                        return $(el).text().trim() === tomorrowString;
                    });
        
                    const bins = $($found[0]).next().text().trim().split(' ');

                    const filtered = bins.filter((value) => {
                        return value !== '';
                    });
                    
                    resolve(filtered);
                    
                } catch (error) {
                    reject(error);
                }
            })
            .catch(function(err) {
                reject(err);
            });
    });
}