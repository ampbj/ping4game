import Relay from 'react-relay';

export default class RegistrationRoute extends Relay.Route {
  static routeName = 'Registration';
  static queries = {
    registration: (Component) => Relay.QL`
      query RegistrationQuery {
          registration { ${Component.getFragment('user')} },
      }
    `
  };
}
