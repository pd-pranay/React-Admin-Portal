import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeAlert } from '../../actions/AlertActions';
function Alert({ alert: { msg, open }, removeAlert }) {

    console.log("alert msg", msg, open)
    return alert ? (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={removeAlert}
                message={msg}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={removeAlert}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    ) : (console.log("no alert"));
}

Alert.propTypes = {
    alert: PropTypes.object.isRequired,
    removeAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    alert: state.alert
});

export default connect(mapStateToProps, { removeAlert })(Alert);