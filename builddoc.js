const fs = require('fs');
const path = require('path');
const marked = require('marked');
const highlight = require('highlight.js');
const fm = require('front-matter');
const glob = require('glob');
const template = require('art-template');
const ejs = require('ejs');

let docsPath = path.resolve(process.cwd(), 'docs');
let renderer = new marked.Renderer();


template.defaults.escape = false


// template.config('base', __dirname);
// template.config('escape', false);

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

renderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return `<h${level}>${text}</h${level}>\r\n`
}

renderer.code = function (code, lang) {
  var rHtml, rCode, language;
  // 包含 ~ 不生成HTML
  if (lang.includes('~')) {
    rHtml = '';
    lang = lang.replace('~', '')
  } else {
    rHtml = `<div class="docs-html">${code}</div>` + '\r\n';
  }
  language = lang && (' language-' + lang) || '';
  rCode = '<pre class="docs-code' + language + '">'
    + '<code>' + highlight.highlightAuto(code).value + '</code>'
    + '</pre>\r\n';



  return rHtml + rCode + '\r\n';
}

renderer.table = function (header, body) {
  return `<table class="docs-table">${header} ${body}</table>`;
}
let data = {
  nav: {
    base: ['index', 'icon', 'font', 'button'],
    layout: ['margin', 'padding', 'column', 'border'],
    form: ['radio', 'checkbox', 'input', 'textarea', 'select'],
    data: ['table', 'page'],
    notice: ['alert', 'confirm', 'message', 'dialog'],
    plugins: ['birthday', 'hyperapp']
  }
};

function build(name) {
  var i = 0;
  glob(name ? name : '*.md', { cwd: docsPath }, function (err, files) {
    files.forEach(function (filename) {
      fs.readFile(path.resolve(docsPath, filename), function (err, file) {
        let mdBody = fm(file.toString()).body;
        let html = marked(mdBody);
        let htmlFilename = path.parse(filename).name;
        data.main = html;
        data.now = htmlFilename;
        let fullHtml = template(__dirname + '/site/_layout/index', data);
        fs.writeFile(`./site/${htmlFilename}.html`, fullHtml, function () { });
      });
    })
  })
}

build()

fs.watch('./docs', (e, file) => {
  build(file)
  console.log('build:--- ' + file + ' ---ok')
})




