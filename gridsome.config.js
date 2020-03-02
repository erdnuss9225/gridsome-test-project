// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Breaking News of the Day",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'article/**/*.md',
        typeName: 'Article',
        remark: {
          // remark options
        }
      }
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'old/*.md',
        typeName: 'singleData',
        remark: {
          // remark options
        }
      }
    }

  ],
}