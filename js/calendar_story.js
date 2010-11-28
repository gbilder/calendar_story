// Geoffrey Bilder, 2010

var calendar_story = {

	story_server: "http://www.gbilder.com",
	base_path: "/calendar_story",
	
	// Control the presentaton of the overlay
	
	mask: 'darkred',
	effect: 'apple',
	
	log: function(text) {
		// dump("-------------->" + text + "\n");
	},
	
	// Iterate over all links of class "episode" and enable or disable overlays as appropriate
	activate_episodes: function() {
		var today = new Date();
		$('a.episode').each(function() {
			// 'this' is a DOM element, we need to turn it into a jQuery object
			var $this = $(this); 
			var episode_date = new Date($this.attr("date"));
			if (episode_date <= today) { 
				var language = calendar_story.selected_language();
				var href = calendar_story.story_server + calendar_story.base_path + "/episodes/" + language  + "/" + $this.attr("date") + ".html";
				$this.attr('href', href);
				calendar_story.enable_overlay($this);
				$this.fadeTo('slow', 1, function() {});
			} else {
				$this.attr('href', '#');	
			}	
		});	

	},

	selected_language: function(){
		// Eventually add language selection capabilities
		return "en";
	},

	//  make all current episodes open overlays
	enable_overlay: function(anchor){
		anchor.overlay({
			mask: calendar_story.mask,
			effect: calendar_story.effect,
			onBeforeLoad: function() {
				// grab wrapper element inside content
				var wrap = this.getOverlay().find(".contentWrap");
				// load the page specified in the trigger
				wrap.load(this.getTrigger().attr("href"));
			}
		});

	},

};

// Once the dom has loaded, start adding our own functions to the web page
$(document).ready(function() {
	calendar_story.activate_episodes();
	// Check every minute to see if we need to activate episodes
	setInterval(calendar_story.activate_episodes,60000); 
});
