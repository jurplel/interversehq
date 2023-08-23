const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy assets
  eleventyConfig.addPassthroughCopy("bowad/assets/img/**/*")
  eleventyConfig.addPassthroughCopy("assets/img/**/*")
  eleventyConfig.addPassthroughCopy("bowad/assets/js/**/*")
  eleventyConfig.addPassthroughCopy("assets/js/**/*")
  eleventyConfig.addPassthroughCopy("welcomething/assets/js/**/*")
  
  // Copy favicon stuff
  eleventyConfig.addPassthroughCopy("*.png")
  eleventyConfig.addPassthroughCopy("*.svg")
  eleventyConfig.addPassthroughCopy("*.ico")
  eleventyConfig.addPassthroughCopy("site.webmanifest")
  eleventyConfig.addPassthroughCopy("browserconfig.xml")

  // Copy over entire qview website, self-contained
  eleventyConfig.addPassthroughCopy("qview/")
};
