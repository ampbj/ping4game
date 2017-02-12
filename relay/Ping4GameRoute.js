import Relay from 'react-relay';

export default class Ping4GameRoute extends Relay.Route {
  static routeName = 'Ping4GameRoute';
  static queries = {
    registration: (Component) => Relay.QL`
      query RegistrationQuery {
          registration { ${Component.getFragment('user')} },
      }
    `
  };
}