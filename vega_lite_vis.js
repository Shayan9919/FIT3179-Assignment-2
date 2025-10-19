//Map
vegaEmbed("#map", "visualisation_map.vg.json", { actions: true })
  .then(() => console.log("Map loaded"))
  .catch(console.error);

//Ranked bar
vegaEmbed("#ranked-bar", "visualisation_bar.vg.json", { actions: true })
  .then(() => console.log("Bar chart loaded"))
  .catch(console.error);

  //dumble chart
vegaEmbed("#dumbbell", "visualisation_dumbbell.vg.json", { actions: true })
.then(() => console.log("dumbbell chart loaded"))
.catch(console.error);

//Heatmap
vegaEmbed("#heatmap", "visualisation_heatmap.vg.json", { actions: true })
  .then(() => console.log("Heatmap loaded"))
  .catch(console.error);

  //Scatter plot
vegaEmbed("#scatter", "visualisation_scatter_plot.vg.json", { actions: true })
  .then(() => console.log("Scatter plot loaded"))
  .catch(console.error);




