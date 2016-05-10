E.run=function () {
	var code = $('#editBox').val();
	G.newGraph(chartbox);
	eval(code);
}

var EloadFile = E.loadFile;
E.loadFile=function(path) {
	EloadFile(path, function() {
		if (path.endsWith(".js")) {
			E.switchPanel("panelEdit");
			E.run();
		} else {
			E.switchPanel("panelShow");
		}
	});
}

/*
var Ehash=E.onhashchange;

E.onhashchange = window.onhashchange = function() {
	Ehash();
	E.switchPanel("panelEdit");
//	E.run();
}
*/