import { connect } from 'react-redux';
import { dialogsActions } from '../../redux/dialogs-reducer'
import { Dialogs } from "./Dialogs";
import { StateType } from '../../redux/redux-store';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state: StateType) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
  }
}


export default compose<React.ComponentType>(
  connect(mapStateToProps, {...dialogsActions}),
 withAuthRedirect)
 (Dialogs)