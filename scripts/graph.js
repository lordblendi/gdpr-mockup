---
---

google.charts.load("current", {
  packages: ["sankey"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  let graphData = {{  site.data.graph | jsonify }};
  data.addRows(graphData['rows']);

  // making sure we can already calculate the correct width for the graph
  setTimeout(function () {
    let panels = $('.JS_panels');
    let panelWidth = Math.round(panels.width());
    console.log(panels, panelWidth);
    // Set chart options
    let options = {
      width: panelWidth,
      height: 800,
      sankey: {
        iterations: 0,
        node: {
          label: {
            fontName: 'Times-Roman',
            fontSize: 14,
            color: 'white',
            bold: true
          },
          interactivity: true,
        },
        link: {
          colorMode: 'target'
        }
      }
    };

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
  }, 250);
}
