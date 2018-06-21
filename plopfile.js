const path = require('path');
module.exports = function (plop) {
  plop.addHelper('cwd', function () {
    return process.cwd();
  });

  plop.addHelper('root', function (to) {
    var relative = path.relative(process.cwd(), path.join(plop.getPlopfilePath(), to));
    return relative.replace(/\\/g, "/");
  });

  plop.setGenerator('component', {
    description: 'Create a React component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name?',
      validate: (value) => {
        if (value.length) return true;
        return 'Component name is required';
      },
    }],
    actions: [
      {
        type: 'add',
        path: '{{cwd}}/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: '.plop/component.hbs',
      },
      {
        type: 'add',
        path: '{{cwd}}/{{kebabCase name}}/{{kebabCase name}}.component.test.jsx',
        templateFile: '.plop/component.test.hbs',
      }
    ],
  });

  plop.setGenerator('component:stateful', {
    description: 'Create a stateful React component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name?',
      validate: (value) => {
        if (value.length) return true;
        return 'Component name is required';
      },
    }],
    actions: [
      {
        type: 'add',
        path: '{{cwd}}/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: '.plop/component-stateful.hbs',
      },
      {
        type: 'add',
        path: '{{cwd}}/{{kebabCase name}}/{{kebabCase name}}.component.test.jsx',
        templateFile: '.plop/component-stateful.test.hbs',
      }
    ],
  });

  plop.setGenerator('container', {
    description: 'Create a react container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Main component name?',
        validate: (value) => {
          if (value.length) return true;
          return 'Main component is required';
        }
      }],
    actions: [{
      type: 'add',
      path: '{{cwd}}/{{kebabCase name}}.container.ts',
      templateFile: '.plop/container.hbs',
    },
      {
        type: 'add',
        path: '{{cwd}}/{{kebabCase name}}.container.test.js',
        templateFile: '.plop/container.test.hbs',
      }]
  });

  plop.setGenerator('container:component', {
    description: 'Create a react container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Main component name?',
        validate: (value) => {
          if (value.length) return true;
          return 'Main component is required';
        }
      }],
    actions: [{
      type: 'add',
      path: '{{cwd}}/{{kebabCase name}}-container/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
      templateFile: '.plop/component.hbs',
    },
      {
        type: 'add',
        path: '{{cwd}}//{{kebabCase name}}-container/{{kebabCase name}}/{{kebabCase name}}.component.test.jsx',
        templateFile: '.plop/component.test.hbs',
      },
      {
        type: 'add',
        path: '{{cwd}}//{{kebabCase name}}-container/{{kebabCase name}}.container.ts',
        templateFile: '.plop/container.hbs',
      },
      {
        type: 'add',
        path: '{{cwd}}//{{kebabCase name}}-container/{{kebabCase name}}.container.test.js',
        templateFile: '.plop/container.test.hbs',
      }]
  });

  plop.setGenerator('action', {
    description: 'Create a redux action/reducer/logic set',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Action name?',
      validate: (value) => {
        if (value.length) return true;
        return 'Action name is required.';
      }
    }],
    actions: [{
      type: 'add',
      path: '{{cwd}}/{{kebabCase name}}.action.ts',
      templateFile: '.plop/action.hbs',
    },
      {
        type: 'add',
        path: '{{cwd}}/{{kebabCase name}}.action.test.js',
        templateFile: '.plop/action.test.hbs',
      }]
  });

  plop.setGenerator('action:network', {
    description: 'Create a redux action/reducer/logic set for networking',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Action name?',
      validate: (value) => {
        if (value.length) return true;
        return 'Action name is required.';
      }
    }],
    actions: [{
      type: 'add',
      path: '{{cwd}}/{{kebabCase name}}.action.ts',
      templateFile: '.plop/action-network.hbs',
    }, {
      type: 'add',
      path: '{{cwd}}/{{kebabCase name}}.action.test.js',
      templateFile: '.plop/action-network.test.hbs',
    }]
  });

  plop.setGenerator('selector', {
    description: 'Create a reselect selector',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name?',
      validate: (value) => {
        if (value.length) return true;
        return 'Selector name is required.';
      },
    }],
    actions: [{
      type: 'add',
      path: '{{cwd}}/{{kebabCase name}}.selectors.ts',
      templateFile: '.plop/selectors.hbs',
    },
      {
        type: 'add',
        path: '{{cwd}}/{{kebabCase name}}.selectors.test.js',
        templateFile: '.plop/selectors.test.hbs',
      }]
  });
};
