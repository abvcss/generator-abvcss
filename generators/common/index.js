const Generator = require('yeoman-generator');


module.exports = class extends Generator {

  initializing() {
    
  }

  async prompting() {
    
  }

  default() {
    
  }

  writing() {  
    
    // add common files

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('LICENSE.ejs'),
      this.destinationPath('LICENSE'),
      { year: new Date().getFullYear() }
    );

    this.fs.copyTpl(
      this.templatePath('README.md.ejs'),
      this.destinationPath('README.md'),
      { title: this.options['title'] }
    );

    this.fs.copyTpl(
      this.templatePath('index.html.ejs'),
      this.destinationPath('index.html'),
      { title: this.options['title'] }
    );

  }
};
