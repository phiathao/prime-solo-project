import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

class ViewVehicle extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Paper className={classNames(classes.root, classes.viewInfoContainer, { [classes.paperIsActive]: this.props.reduxState.infoView === 2 })}>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant='h5' align='center'>Vehicle Information</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            disabled
                            label="Customer"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.dialogTextField}
                            value={this.props.reduxState.viewVehicle ? `${this.props.reduxState.viewVehicle[0].first_name} ${this.props.reduxState.viewVehicle[0].last_name}` : ''}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            disabled
                            label="Make"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.dialogTextField}
                            value={this.props.reduxState.viewVehicle ? this.props.reduxState.viewVehicle[0].make : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            disabled
                            label="Model"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.dialogTextField}
                            value={this.props.reduxState.viewVehicle ? this.props.reduxState.viewVehicle[0].model : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            disabled
                            label="Year"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.dialogTextField}
                            value={this.props.reduxState.viewVehicle ? this.props.reduxState.viewVehicle[0].year : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            disabled
                            label="Plate"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.dialogTextField}
                            value={this.props.reduxState.viewVehicle ? this.props.reduxState.viewVehicle[0].plate : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            disabled
                            label="Color"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.dialogTextField}
                            value={this.props.reduxState.viewVehicle ? this.props.reduxState.viewVehicle[0].color : ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            disabled
                            label="Other"
                            multiline
                            rows={3}
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.dialogTextField}
                            value={this.props.reduxState.viewVehicle ? this.props.reduxState.viewVehicle[0].other : ''}
                        />
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}
const styles = theme => ({
    root: {
        width: '100%',
    },
    viewInfoContainer: {
        minHeight: theme.spacing.unit * 30,
        padding: theme.spacing.unit * 2,
        position: 'relative',
    },
    dialogTextField: {
        marginTop: theme.spacing.unit - 3,
        marginBottom: theme.spacing.unit - 8,
    },
    paperIsActive: {
        marginBottom: theme.spacing.unit * 3,
    },
    infoFab: {
        position: 'absolute',
        top: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
})

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(ViewVehicle));