<template>
  <div class="grille">
    <div v-for="i in 100" :key="i">
      <!-- Your Vue dynamic content here -->
      <span class="icon-emploi"></span>
    </div>

    <!-- Your JavaScript code here -->
    <div class="resultats-categories repartition">
      <div id="viz"></div>
    </div>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   var points = Array.from({ length: 50 }, (_, i) => ({ id: i }));
  //   var pointGrid = d3.layout.grid().rows(2).cols(25).size([400, 40]);
  //   var svg = d3
  //     .select("#viz")
  //     .append("svg")
  //     .attr("width", 500)
  //     .attr("height", 400);
  //   svg
  //     .append("defs")
  //     .append("g")
  //     .attr("id", "iconCustom")
  //     .append("path")
  //     .attr(
  //       "d",
  //       "M10.9873,8.0606 C10.8633,6.7076 9.6463,5.6456 8.1613,5.6456 L6.5003,5.6456 L6.5003,4.6116 C7.3343,4.2296 7.9173,3.3936 7.9173,2.4166 C7.9173,1.0816 6.8353,-0.0004 5.5003,-0.0004 C4.1653,-0.0004 3.0833,1.0816 3.0833,2.4166 C3.0833,3.3936 3.6663,4.2306 4.5003,4.6116 L4.5003,5.6456 L2.8383,5.6456 C1.3533,5.6456 0.1363,6.7076 0.0123,8.0606 L0.0003,14.7256 C0.0003,15.1786 0.3933,15.5446 0.8803,15.5446 L0.9653,15.5446 C1.4513,15.5446 1.8443,15.1786 1.8443,14.7256 L1.8443,8.2896 L2.4863,8.2896 L2.4863,15.4866 L2.5133,15.4866 L2.5133,23.7046 C2.5133,24.3166 3.0463,24.8126 3.7033,24.8126 C4.3603,24.8126 4.8933,24.3166 4.8933,23.7046 L4.8933,15.4866 L6.1333,15.4866 L6.1333,23.7046 C6.1333,24.3166 6.6673,24.8126 7.3233,24.8126 C7.9803,24.8126 8.5133,24.3166 8.5133,23.7046 L8.5133,15.4866 L8.5133,14.8936 L8.5133,8.2896 L9.1543,8.2896 L9.1543,14.7256 C9.1543,15.1786 9.5483,15.5456 10.0343,15.5456 L10.1203,15.5456 C10.6063,15.5456 11.0003,15.1786 11.0003,14.7256 L10.9873,8.0606 Z"
  //     )
  //     .attr("transform", "scale(1)");
  //   var icons = svg
  //     .append("g")
  //     .selectAll("use")
  //     .data(pointGrid(points))
  //     .enter()
  //     .append("use")
  //     .attr("transform", function (d) {
  //       return "translate(" + d.x + ", " + d.y + ")";
  //     })
  //     .attr("xlink:href", "#iconCustom");
  //   icons
  //     .attr("fill", function (d, i) {
  //       return i === 0 ? "green" : "blue";
  //     })
  //     .transition()
  //     .duration(750)
  //     .delay(function (d, i) {
  //       return (i / 5) * 750;
  //     })
  //     .attr("fill", function (d, i) {
  //       return i === 0 ? "green" : "blue";
  //     });
  //   icons.on("click", function (d, i) {
  //     console.log(d);
  //     console.log(i);
  //   });
  // },
};
</script>

<!-- Optionally, add a style block for any CSS styles -->
<style scoped>
.grille {
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
</style>
