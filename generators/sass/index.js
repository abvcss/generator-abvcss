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
      this.templatePath('abvcss/1-base/_base.sass'),
      this.destinationPath('abvcss/1-base/_base.sass')
    );

    if (this.options['normalize']) {
      this.fs.copy(
        this.templatePath('abvcss/1-base/_normalize.sass'),
        this.destinationPath('abvcss/1-base/_normalize.sass')
      );
    }

    this.fs.copy(
      this.templatePath('abvcss/2-layout/_grid-layout.sass'),
      this.destinationPath('abvcss/2-layout/_grid-layout.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/_header.sass'),
      this.destinationPath('abvcss/2-layout/_header.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/_menu.sass'),
      this.destinationPath('abvcss/2-layout/_menu.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/_content.sass'),
      this.destinationPath('abvcss/2-layout/_content.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/_sidebar.sass'),
      this.destinationPath('abvcss/2-layout/_sidebar.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/2-layout/_footer.sass'),
      this.destinationPath('abvcss/2-layout/_footer.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/3-blocks/_header.sass'),
      this.destinationPath('abvcss/3-blocks/_header.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/3-blocks/_main-text.sass'),
      this.destinationPath('abvcss/3-blocks/_main-text.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/4-skins/_skins.sass'),
      this.destinationPath('abvcss/4-skins/_skins.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/_placeholder-classes.sass'),
      this.destinationPath('abvcss/_placeholder-classes.sass')
    );

    this.fs.copy(
      this.templatePath('abvcss/_settings.sass'),
      this.destinationPath('abvcss/_settings.sass')
    );

    this.fs.copyTpl(
      this.templatePath('abvcss/style.sass.ejs'),
      this.destinationPath('abvcss/style.sass'),
      { normalize: this.options['normalize'], cssLibrary: this.options['cssLibrary'] }
    );

  }
};
