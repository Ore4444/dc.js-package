Package.describe({
  summary: "A multi-dimensional charting library built to work natively with crossfilter and rendered using d3.js"
});

Package.on_use(function (api, where) {
  api.use('d3');

  api.add_files('dc.js/dc.js', 'client');
});