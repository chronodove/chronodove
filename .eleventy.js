const fs = require("fs");
const markdownIt = require("markdown-it")();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/writings");
  eleventyConfig.addPassthroughCopy("./src/shrines");
  eleventyConfig.addShortcode("latestDiaryEntry", function() {
    try {
      const content = fs.readFileSync("./src/diary.md", "utf8");
      const entries = content.split(/\n## /); 
      
      if (entries.length < 1) return "no entries found";

      // get the latest entry block
      const latestRaw = "## " + entries[1]; 
      
      // render it to HTML
      const fullHtml = markdownIt.render(latestRaw);

      // extract just the date, time, and first paragraph
      // we look for the first closing </p> tag and cut everything after it
      const endOfFirstPara = fullHtml.indexOf("</p>");
      if (endOfFirstPara !== -1) {
          return fullHtml.substring(0, endOfFirstPara + 4);
      }

      return fullHtml; // fallback if no paragraph found
    } catch (e) {
      console.error("shortcode error:", e);
      return "could not load entry";
    }
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};