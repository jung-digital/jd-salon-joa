module.exports = {
  dist: {
    options: {
      style: 'expanded',
      includePaths: ['node_modules/font-awesome/scss']
    },
    files: {
      'public/styles/site.css': 'public/styles/site.scss',
      'public/styles/index.css': 'public/styles/index.scss'
    }
  }
};
