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
      this.templatePath('abvcss/1-base/base.css'),
      this.destinationPath('abvcss/1-base/base.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/grid-layout.css'),
      this.destinationPath('abvcss/2-layout/grid-layout.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/header.css'),
      this.destinationPath('abvcss/2-layout/header.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/menu.css'),
      this.destinationPath('abvcss/2-layout/menu.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/content.css'),
      this.destinationPath('abvcss/2-layout/content.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/sidebar.css'),
      this.destinationPath('abvcss/2-layout/sidebar.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/footer.css'),
      this.destinationPath('abvcss/2-layout/footer.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/3-blocks/header.css'),
      this.destinationPath('abvcss/3-blocks/header.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/3-blocks/main-text.css'),
      this.destinationPath('abvcss/3-blocks/main-text.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/4-skins/skins.css'),
      this.destinationPath('abvcss/4-skins/skins.css')
    );

    this.fs.copy(
      this.templatePath('abvcss/settings.css'),
      this.destinationPath('abvcss/settings.css')
    );

    this.fs.copyTpl(
      this.templatePath('abvcss/style.css.ejs'),
      this.destinationPath('abvcss/style.css'),
      { normalize: this.options['normalize'], cssLibrary: this.options['cssLibrary'] }
    );

  }
};
