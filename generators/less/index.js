const Generator = require('yeoman-generator');


module.exports = class extends Generator {

  initializing() {
    
  }

  async prompting() {
    
  }

  default() {
    
  }

  writing() {  
    
    // add webpack configs

    this.fs.copy(
      this.templatePath('webpack.common.js'),
      this.destinationPath('webpack.common.js')
    );

    this.fs.copyTpl(
      this.templatePath('webpack.dev.js.ejs'),
      this.destinationPath('webpack.dev.js'),
      { rucksack: this.options['rucksack'] }
    );

    this.fs.copyTpl(
      this.templatePath('webpack.prod.js.ejs'),
      this.destinationPath('webpack.prod.js'),
      { rucksack: this.options['rucksack'] }
    );

    // add abvcss files

    this.fs.copy(
      this.templatePath('abvcss/1-base/base.less'),
      this.destinationPath('abvcss/1-base/base.less')
    );

    if (this.options['normalize']) {
      this.fs.copy(
        this.templatePath('abvcss/1-base/normalize.less'),
        this.destinationPath('abvcss/1-base/normalize.less')
      );
    }

    this.fs.copy(
      this.templatePath('abvcss/2-layout/grid-layout.less'),
      this.destinationPath('abvcss/2-layout/grid-layout.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/header.less'),
      this.destinationPath('abvcss/2-layout/header.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/menu.less'),
      this.destinationPath('abvcss/2-layout/menu.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/content.less'),
      this.destinationPath('abvcss/2-layout/content.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/sidebar.less'),
      this.destinationPath('abvcss/2-layout/sidebar.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/footer.less'),
      this.destinationPath('abvcss/2-layout/footer.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/3-blocks/header.less'),
      this.destinationPath('abvcss/3-blocks/header.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/3-blocks/main-text.less'),
      this.destinationPath('abvcss/3-blocks/main-text.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/4-skins/skins.less'),
      this.destinationPath('abvcss/4-skins/skins.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/placeholder-classes.less'),
      this.destinationPath('abvcss/placeholder-classes.less')
    );

    this.fs.copy(
      this.templatePath('abvcss/settings.less'),
      this.destinationPath('abvcss/settings.less')
    );

    this.fs.copyTpl(
      this.templatePath('abvcss/style.less.ejs'),
      this.destinationPath('abvcss/style.less'),
      { normalize: this.options['normalize'], cssLibrary: this.options['cssLibrary'] }
    );

  }
};
