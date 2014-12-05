// JavaScript Document
//OOP nav

var UlitmatePage;

(function($){  

UlitmatePage = Class.extend({

  init:function() {
    
    this.page_ranges = {
      '1024x768': [ 800, 1600, 3000 ],
      '940x640': [ 800, 1600, 3000 ],
	  '640x940' : [ 800, 1600, 3000 ],
	  '470x320' : [ 800, 1600, 3000 ],
	  '320x470' : [ 800, 1600, 3000 ]
	  
    };

    this.media_types = {
      '1024x768': 1024,
	  '940x640': 940,
      '640x940': 640,
      '470x320': 470,
      '320x470': 320,
    }

    this.current_media_type = '1024x768';

    this.bindEvents();
  },


  bindEvents: function() {
    
    //listen for  scroll changes
      // in the handler
	  yLocation = window.screenY;
	  
      // this.find_page( y )
      // this.update_menu()


    // listen for resizes
      // in the handler
      // if width < this.current_width()
          // this.current_media_type = '320x470';
      
  },

  find_page: function( y ) {
    
    var heights = this.get_page_heights();

    for( var i=0; i<heights.length; i++ )
      if( heights[i] > y )
      {
        this.current_page = i - 1;
        break;
      }
  },

  update_menu: function() {
    
    // use this.current_page

  },

  current_width: function() {
    return this.media_types[this.current_media_type];
  },

  get_page_heights: function() {
    return this.page_ranges[ this.media_type ]
  }


})

})(jQuery);

