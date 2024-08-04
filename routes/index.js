import routes from '../services/routes.js'
const initRoute = (app) => {
    app.use('/api', routes);
  };
  export default initRoute;