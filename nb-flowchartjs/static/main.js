/* -*- coding: utf-8 -*-
* ----------------------------------------------------------------------------
* Distributed under the terms of the MIT License.
*
* A Jupyter notebook extension to support flowchart.js - based graphs
* -----------------------------------------------------------------------------
*/

define([
        'require',
        'jquery',
	      'base/js/events'
], function(require, $, events) {

/* Render any flowchart contained in the cell */
var render_cell = function(cell) {
	$(".flowchart").flowChart();
}

function setup() {
	requirejs.config({
		paths: {
			Raphael: require.toUrl('./raphael/raphael.min.js')
		}
	});

	require([require.toUrl('./flowchart.js/flowchart.min.js')], function() {
		events.on("rendered.MarkdownCell", function(event, data) {
			render_cell(data.cell)
	  });
	});
}

setup.load_ipython_extension = setup;

return setup;
});

