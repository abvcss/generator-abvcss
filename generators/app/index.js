const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  initializing() {
    
  }

  async prompting() {
    const answers = await this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname
    }, {
      type    : 'list',
      name    : 'stylesheetlanguage',
      message : 'What stylesheet language do you prefer?',
      choices: [
        {
            value: 'Sass',
            name: 'Sass'
        },
        {
            value: 'Less',
            name: 'Less'
        },
        {
            value: 'CSS',
            name: 'CSS'
        }
      ],
      default : 'Sass'
    }, {
      type    : 'confirm',
      name    : 'normalize',
      message : 'Would you like to add normalize.css library?'
    }, {
      type    : 'list',
      name    : 'cssLibrary',
      message : 'What CSS-library do you want to add?',
      choices: [
        {
            value: 'Bootstrap',
            name: 'Bootstrap'
        },
        {
            value: 'Foundation',
            name: 'Foundation'
        },
        {
            value: 'Bulma',
            name: 'Bulma'
        },
        {
            value: 'none',
            name: 'none'
        }
      ],
      default : 'none'
    }, {
      type    : 'confirm',
      name    : 'rucksack',
      message : 'Would you like to enable rucksack-css plugin for PostCSS?'
    }]);

    answers.name = answers.name || 'Untitled';

    this.props = { ...answers };

  }

  default() {

    if (this.props.stylesheetlanguage === 'Sass') {

      this.composeWith(require.resolve('../sass'), {
        rucksack: this.props.rucksack,
        normalize: this.props.normalize,
        cssLibrary: this.props.cssLibrary
      });
      
    } else if (this.props.stylesheetlanguage === 'Less') {

      this.composeWith(require.resolve('../less'), {
        rucksack: this.props.rucksack,
        normalize: this.props.normalize,
        cssLibrary: this.props.cssLibrary
      });
      
    } else if (this.props.stylesheetlanguage === 'CSS') {

      this.composeWith(require.resolve('../css'), {
        rucksack: this.props.rucksack,
        normalize: this.props.normalize,
        cssLibrary: this.props.cssLibrary
      });
      
    }

    this.composeWith(require.resolve('../common'), {
      title: this.props.name
    });

  }

  writing() {       
    const tmplt = require(this.templatePath('package.json'));

    tmplt.name = this.props.name;

    switch (this.props.stylesheetlanguage) {
      case 'Sass':
        tmplt.devDependencies['node-sass'] = '*';
        tmplt.devDependencies['sass-loader'] = '*';
        break;

      case 'Less':
        tmplt.devDependencies['less'] = '*';
        tmplt.devDependencies['less-loader'] = '*';
        break;

      case 'CSS':
        tmplt.devDependencies['postcss-import'] = '^12.0.1';        
        break;
    }

    if (this.props.normalize) {
      tmplt.dependencies['normalize.css'] = '*';      
    }

    if (this.props.cssLibrary === 'Bootstrap') {
      tmplt.dependencies['bootstrap'] = '*';      
    } else if (this.props.cssLibrary === 'Foundation') {
      tmplt.dependencies['foundation-sites'] = '*'; 
    } else if (this.props.cssLibrary === 'Bulma') {
      tmplt.dependencies['bulma'] = '*'; 
    }

    if (this.props.rucksack) {
      tmplt.devDependencies['rucksack-css'] = '*';      
    }

    this.fs.writeJSON(this.destinationPath('package.json'), tmplt);    
  }

  install() {
    this.installDependencies({
      yarn: true,
      npm: true,
      bower: false      
    });
  }
};
