module.exports = function(eleventyConfig) {
    // Add collections for posts in each language
    eleventyConfig.addCollection("en", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/posts/en/*.njk");
    });
  
    eleventyConfig.addCollection("fr", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/posts/fr/*.njk");
    });
  
    // Set global data for languages
    eleventyConfig.addGlobalData("languages", require("./src/_data/languages.json"));

    eleventyConfig.addGlobalData("site", {
      date: new Date()
    });

    // Passthrough assets like images or CSS files
    eleventyConfig.addPassthroughCopy("src/assets");
  
    // Set input/output directories
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  
