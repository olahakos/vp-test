import {parseString} from 'xml2js';

// var myHeaders = new Headers();
// myHeaders.append('Access-Control-Allow-Origin', '*');
// myHeaders.append('Content-Type', 'application/xml');
//
// const init = {
//   method: 'GET',
//   headers: myHeaders,
//   mode: 'cors',
//   cache: 'default'
// };
export function getTrailerEmbed(baseUrl, apiKey, imdb) {
  // const url = `${baseUrl}/?imdb=${imdb}&width=000&k=${apiKey}`;
  // return fetch(url, init)
  //     .then(data => {
  //       return data;
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  return new Promise((resolve, reject) => {
    const data = moch();
    parseString(data, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

function moch() {
  return '<?xml version="1.0" encoding="utf-8"?><trailers><trailer><title>Titanic: Belfast Museum - Newswrap</title><link>http://www.traileraddict.com/titanic/belfast-museum-newswrap</link><pubDate>Sun, 23 Sep 2012 07:04:25 -0700</pubDate><trailer_id>62863</trailer_id><imdb>0120338</imdb><embed><![CDATA[<link rel="stylesheet" type="text/css" href="//cdn.traileraddict.com/css/rembed.css"><div class="outer-embed-ta"><iframe width="100%" src="//v.traileraddict.com/62863" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" frameborder="0" class="embed-ta"></iframe></div><p><a href="http://www.traileraddict.com/titanic/belfast-museum-newswrap">Belfast Museum - Newswrap</a> for <a href="http://www.traileraddict.com/titanic">Titanic</a> on <a href="http://www.traileraddict.com">TrailerAddict</a>.</p>]]> </embed><cached>no</cached></trailer></trailers>';
}
