var feed = new Instafeed({
		get: 'user',
		userId: 6265799545,
		// clientId: 'b8f69e8085334c6791b69b1c4d2d8d10',
		accessToken: '6265799545.b8f69e8.d7dd3a607d3e4de9be14ca02b030051d',
		target: 'instagram',
		// sortBy: 'most-liked',
		limit: 4,
		resolution: 'standard_resolution',
		after: function() {
			var el = document.getElementById('instagram');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});

window.onload = function() {
	feed.run();

	var _gauges = _gauges || [];
	(function() {
		var t   = document.createElement('script');
		t.type  = 'text/javascript';
		t.async = true;
		t.id    = 'gauges-tracker';
		t.setAttribute('data-site-id', '4d5aa2a95ffe1f587b000001');
		t.src = '//secure.gaug.es/track.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(t, s);
	})();
};
