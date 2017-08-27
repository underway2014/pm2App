

//pm2 deploy ecosystem.config.js production

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API:4000',
      script    : 'app.js',
      port: 4000,
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
    {
      name      : 'API:5000',
      script    : 'app.js',
      port: 5000,
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * test test
   * install:
   * pm2 deploy ecosystem.config.json production setup
   * deploy:
   * pm2 deploy ecosystem.config.json production
   * 
   */
  deploy : {
    production : {
      user : 'ubinli',
      host : '192.168.118.133',
      ref  : 'origin/master',
      repo : 'git@github.com:underway2014/pm2App.git',
      path : '/var/www/testPro1',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
