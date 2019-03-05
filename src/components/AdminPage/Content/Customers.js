import React from 'react';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

import ViewVehicleInfo from '../ViewVehicle/ViewVehicle';
import ViewCustomerInfo from '../ViewCustomer/ViewCustomer';
import CustomerTable from '../CustomerTable/CustomerTable';
import SpeedDial from '../SpeedDial/SpeedDial';


class ManageContent extends React.Component {

    render() {
        const { classes } = this.props

        return (
            <Paper className={classes.rootPadding}>

                <Collapse
                    in={this.props.reduxState.infoView === 2}
                    timeout={750}
                >
                    <ViewVehicleInfo />
                </Collapse>

                <Collapse
                    in={this.props.reduxState.infoView === 1}
                    timeout={750}
                >
                    <ViewCustomerInfo />
                </Collapse>

                <CustomerTable />

                <SpeedDial />
            </Paper>
        )
    }
}

const styles = theme => ({
    rootPadding: {
        padding: theme.spacing.unit * 3,
        height: '100%',
        backgroundColor: '#eee',
    },
});

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(ManageContent));