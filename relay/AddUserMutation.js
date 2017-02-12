import Relay from 'react-relay';

export default class AddUserMutation extends Relay.Mutation {
    static fragments = {
        user: () => Relay.QL`
            fragment on user {
             }`
    }
    getMutation() {
        return Relay.QL `mutation{addUser}`;
    }
    getVariables() {
        return {
            name: this.props.name, 
            email: this.props.email, 
            location: this.props.location
        };
    }
    getFatQuery() {
        return Relay.QL `
        fragment on addUserPayload {
            user {
            }
        }`;
    }
    getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        name: this.props.name,
        email: this.props.email,
        location: this.props.location
      }
    }];
  }
}