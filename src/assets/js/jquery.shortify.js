/*
 * jQuery Shortify v0.1.2
 * 
 * Description: jQuery plugin to shorten long URL
 *
 * author  : Bayu Prayudha
 * twitter : @bprayudha
 *
 * https://github.com/bprayudha/jquery.shortify
 *
*/

(function($) {

  $.fn.shortify = function(options) {

    // default configuration
    var config = $.extend({},{
      service : 'googl',
      apikey : ''
    }, options);

    // check URL format
    var isUrl = function(url) {
      var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      return urlRegex.test(url);
    }

    // goo.gl API
    var googl = function(longUrl) {
      var dataObj = {};
      var shortUrl = dataObj['longUrl'] = longUrl;
      if(config.apikey !== '') {
        dataObj['key'] = config.apikey;
      }

      if(isUrl(longUrl)) {
        $.ajax({
          type: "POST",
          url:'https://www.googleapis.com/urlshortener/v1/url',
          data: JSON.stringify(dataObj),
          async:false,
          dataType:'json',
          contentType:"application/json; charset=utf-8",
          success: function(e) {shortUrl = e.id;}
        });
      }
      return shortUrl;
    }

    // bit.ly API
    var bitly = function(longUrl) {
      var dataObj = {};
      var shortUrl = dataObj['longUrl'] = longUrl;

      if(isUrl(longUrl)) {
        $.ajax({
          type: "GET",
          url:'https://api-ssl.bitly.com/v3/shorten',
          data: {
            'longUrl': longUrl,
            'access_token' : config.apikey
          },
          async:false,
          dataType:'json',
          success: function(e) {
            if(e.status_code !== 200) {
              console.error('Bitly Error ' + e.status_code + ' : ' + e.status_txt);
            }
            else {
              shortUrl = e.data.url;
            }
          }
        });
      }
      return shortUrl;
    }

    this.each(function() {
      if($(this).is('a')) {
        if(undefined == options) {
          options = config;
        }
        if(options.service == 'googl') {
          $(this).attr('href',function(){
            return googl($(this).attr('href'))
          })
        }
        else if(options.service == 'bitly') {
          $(this).attr('href',function(){
            return bitly($(this).attr('href'))
          })
        }
      }
    });

    return this;
    
  }
})(jQuery);
