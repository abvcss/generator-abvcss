const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('abvcss:app', () => {

  it('generate a common files', () => {
    
    return helpers.run(path.join(__dirname, '../generators/common'))
      .withOptions({ title: 'Test' })      
      .then(() => {
        assert.file(['.gitignore', 'index.html', 'LICENSE', 'README.md']);
      });

  });

  it('generate a sass default project', () => {
    
    return helpers.run(path.join(__dirname, '../generators/sass'))
      .withOptions({
        rucksack: true,
        normalize: true,
        cssLibrary: 'none'
      })
      .then(() => {
        assert.file(['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js',
          'abvcss/_placeholder-classes.sass', 'abvcss/_settings.sass', 'abvcss/style.sass',
          'abvcss/1-base/_base.sass', 'abvcss/1-base/_normalize.sass', 'abvcss/2-layout/_content.sass', 'abvcss/2-layout/_footer.sass', 'abvcss/2-layout/_grid-layout.sass',
          'abvcss/2-layout/_header.sass', 'abvcss/2-layout/_menu.sass', 'abvcss/2-layout/_sidebar.sass',
          'abvcss/3-blocks/_header.sass', 'abvcss/3-blocks/_main-text.sass', 'abvcss/4-skins/_skins.sass']);
      });

  });

  it('generate a less default project', () => {
    
    return helpers.run(path.join(__dirname, '../generators/less'))
      .withOptions({
        rucksack: true,
        normalize: true,
        cssLibrary: 'none'
      })
      .then(() => {
        assert.file(['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js',
          'abvcss/placeholder-classes.less', 'abvcss/settings.less', 'abvcss/style.less',
          'abvcss/1-base/base.less', 'abvcss/1-base/normalize.less', 'abvcss/2-layout/content.less', 'abvcss/2-layout/footer.less', 'abvcss/2-layout/grid-layout.less',
          'abvcss/2-layout/header.less', 'abvcss/2-layout/menu.less', 'abvcss/2-layout/sidebar.less',
          'abvcss/3-blocks/header.less', 'abvcss/3-blocks/main-text.less', 'abvcss/4-skins/skins.less']);
      });

  });

  it('generate a css default project', () => {
    
    return helpers.run(path.join(__dirname, '../generators/css'))
      .withOptions({
        rucksack: true,
        normalize: true,
        cssLibrary: 'none'
      })
      .then(() => {
        assert.file(['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js',
          'abvcss/settings.css', 'abvcss/style.css',
          'abvcss/1-base/base.css', 'abvcss/2-layout/content.css', 'abvcss/2-layout/footer.css', 'abvcss/2-layout/grid-layout.css',
          'abvcss/2-layout/header.css', 'abvcss/2-layout/menu.css', 'abvcss/2-layout/sidebar.css',
          'abvcss/3-blocks/header.css', 'abvcss/3-blocks/main-text.css', 'abvcss/4-skins/skins.css']);
      });

  });

  it('generate a sass project without normalize.css', () => {
    
    return helpers.run(path.join(__dirname, '../generators/sass'))
      .withOptions({
        rucksack: true,
        normalize: false,
        cssLibrary: 'none'
      })
      .then(() => {
        assert.file(['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js',
          'abvcss/_placeholder-classes.sass', 'abvcss/_settings.sass', 'abvcss/style.sass',
          'abvcss/1-base/_base.sass', 'abvcss/2-layout/_content.sass', 'abvcss/2-layout/_footer.sass', 'abvcss/2-layout/_grid-layout.sass',
          'abvcss/2-layout/_header.sass', 'abvcss/2-layout/_menu.sass', 'abvcss/2-layout/_sidebar.sass',
          'abvcss/3-blocks/_header.sass', 'abvcss/3-blocks/_main-text.sass', 'abvcss/4-skins/_skins.sass']);

        assert.noFile('abvcss/1-base/_normalize.sass');
          
      });

  });

  it('generate a less project without normalize.css', () => {
    
    return helpers.run(path.join(__dirname, '../generators/less'))
      .withOptions({
        rucksack: true,
        normalize: false,
        cssLibrary: 'none'
      })
      .then(() => {
        assert.file(['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js',
          'abvcss/placeholder-classes.less', 'abvcss/settings.less', 'abvcss/style.less',
          'abvcss/1-base/base.less', 'abvcss/2-layout/content.less', 'abvcss/2-layout/footer.less', 'abvcss/2-layout/grid-layout.less',
          'abvcss/2-layout/header.less', 'abvcss/2-layout/menu.less', 'abvcss/2-layout/sidebar.less',
          'abvcss/3-blocks/header.less', 'abvcss/3-blocks/main-text.less', 'abvcss/4-skins/skins.less']);

        assert.noFile('abvcss/1-base/normalize.less');
          
      });

  });

  it('generate an app project with less', () => {
    
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'Test 1',
        stylesheetlanguage: 'Less',
        normalize: 'Y',
        cssLibrary: 'none',
        rucksack: 'Y'
      })
      .then(() => {
        assert.file(['package.json', 'abvcss/style.less']);
      });

  });

  it('generate an app project with sass', () => {
    
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'Test 2',
        stylesheetlanguage: 'Sass',
        normalize: 'Y',
        cssLibrary: 'none',
        rucksack: 'Y'
      })
      .then(() => {
        assert.file(['package.json', 'abvcss/style.sass']);
      });

  });

  it('generate an app project with css', () => {
    
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'Test 3',
        stylesheetlanguage: 'CSS',
        normalize: 'Y',
        cssLibrary: 'none',
        rucksack: 'Y'
      })
      .then(() => {
        assert.file(['package.json', 'abvcss/style.css']);
      });

  });

});
