module.exports = {
  title: 'Suchai.f - be a better version of yourself :)',
  description: 'ahhh just start this website guys, please be patient.',
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  }
}