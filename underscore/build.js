({
  baseUrl: ".",
  name: "bootstrap",
  optimize: "none",
  out: "bootstrap.min.js",
  excludeShallow: ["text"],
  paths: {
    jquery: "jquery-1.7.1.min",
    underscore: "underscore-min"
  }
})
