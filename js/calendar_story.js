var calendar_story = {

	log: function(text) {
		// dump("-------------->" + text + "\n");
	},

	initialize: function() {
		// We loop through buttons and activate/deactivate as needed
		

		// $("#storydate").show();

	},
	
	activate_episodes: function() {
		$('div').each(function() {
		    // 'this' is a DOM element
		    alert(this.tagName.toLowerCase() == 'div');
			var $this = $(this); // turn it into a jQuery object
		});	
	},
	
	//  make all links with the 'rel' attribute open overlays 
	enable_overlays: function() {
		$("a[rel]").overlay({
			mask: 'darkgreen',
			effect: 'apple',
			onBeforeLoad: function() {
				// grab wrapper element inside content
				var wrap = this.getOverlay().find(".contentWrap");
				// load the page specified in the trigger
				wrap.load(this.getTrigger().attr("href"));
			}
		});
	},

};

$(document).ready(function() {

	calendar_story.initialize();
	calendar_story.enable_overlays()

});
