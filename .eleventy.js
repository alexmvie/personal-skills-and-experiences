module.exports = function (eleventyConfig) {
   // Copy static assets
   eleventyConfig.addPassthroughCopy('styles.css');
   eleventyConfig.addPassthroughCopy('socialmedia-update-post.txt');
   return {
      dir: {
         input: 'src',
         output: '_site',
      },
   };
};
