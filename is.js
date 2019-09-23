d3.json('is.json').then(data => {
  const svg = d3.selct('.is')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('viewbox', '0 0 100 100');
  const pack = d3.pack(d3.hierarchy(data));
  svg.selectAll('.node')
    .data(pack)
});
