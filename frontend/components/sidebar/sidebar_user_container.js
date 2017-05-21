import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SidebarUser from './sidebar_user';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarUser));
