Charts = window.Charts || {};

Charts.makeWordcloud = function(id, width, height, allWords) {

  draw = function(words) {
    d3.select('#'+id).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(300, 200)')
      .selectAll('text')
      .data(words)
      .enter().append('text')
      .style('font-size', (d) => {
        fontSize(d.freq) + 'px'
      })
      .style('font-family', 'Impact')
      .style('fill', (d, i) => { CriteriaColor[d.criteria] || i})
      .attr('text-anchor', 'middle')
      .attr('transform', function(d) {
        return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')'
      })
      .text( function(d) {
        console.log(d);
        return d.term
      })
  };

  fill = d3.scale.category20()
  freqs = _.map(allWords, (w) => {w.freq});
  min = _.min(freqs);
  max = _.max(freqs);
  fontSize = d3.scale.log().domain([min, max]).range([10, 50]);
  d3.layout.cloud().size([width, height])
    .words(allWords)
    .padding(5)
    .rotate( function() { 
      return ~~(Math.random() * 2) * 45;
    })
    .font('Impact')
    .fontSize( (d) => { fontSize(d.freq) })
    //.fontSize(30)
    .on('end', draw)
    .start()

  /*
  let fill = d3.scale.category20();
  let layout = d3.layout.cloud()
      .size([800, 500])
      .words([
        {text: 'wew', size: 80},
        {text: 'wew2', size: 50},
        {text: 'wew3', size: 81},
        {text: 'wew4', size: 37},
        {text: 'wew5', size: 22}
      ])
      .padding(5)
      .rotate( () => { ~~(Math.random() * 2) * 90 } )
      .font('Impact')
      .fontSize( (word) => word.size )
      .on('end', draw);

  layout.start();

  function draw(words) {
    d3.select("#"+id).append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
      .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
      .data(words)
      .enter().append("text")
      .style("font-size", (word) => { word.size + "px" })
      .style("font-family", "Impact")
      .style("fill", (word, i) => { fill(i) })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
console.log(d);
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })  
      .text( word => word.text );
}
 
      

  */
};

