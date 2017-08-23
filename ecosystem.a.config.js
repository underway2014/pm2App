

//pm2 deploy ecosystem.config.js production

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API:8000',
      script    : 'app.a.js',
      port: 8000,
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
    {
      name      : 'API:9000',
      script    : 'app.a.js',
      port: 9000,
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
   * pm2 deploy ecosystem.config.js production setup
   * deploy:
   * pm2 deploy ecosystem.a.config.js production
   * 
   */
  deploy : {
    production : {
      user : 'deploy',
      host : '60.205.181.69',
      ref  : 'origin/master',
      repo : 'git@github.com:underway2014/pm2App.git',
      path : '/home/deploy/testPro1',
      'post-deploy' : 'npm install && pm2 reload ecosystem.a.config.js --env production'
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
