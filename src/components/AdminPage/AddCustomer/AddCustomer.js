import React from 'react';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddCustomer extends React.Component {
  handleSubmit = () => {
    if (this.props.reduxState.newCustomer.first_name !== '') {
      this.props.dispatch({
        type: 'ADD_CUSTOMER',
        payload: this.props.reduxState.newCustomer
      }); // add some type of confirmation or notification that customer is added
      alert(this.props.reduxState.newCustomer.first_name + ' added');
      this.props.history.push('/manage');
    } else {
      alert('not a valid customer');
    }
  }
  handleChange = (propertyName) => (event) => {
    if (propertyName === 'state') {
      this.props.dispatch({
        type: 'SET_NEW_CUSTOMER',
        payload: { ...this.props.reduxState.newCustomer, [propertyName]: event.target.value.toUpperCase() }
      })
    } else {
      this.props.dispatch({
        type: 'SET_NEW_CUSTOMER',
        payload: { ...this.props.reduxState.newCustomer, [propertyName]: event.target.value }
      })
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        maxWidth='lg'
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle align="center">New Customer
        </DialogTitle>
        <DialogContent
          className={classes.dialogComponent}
        >
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                type="search"
                margin="normal"
                variant="outlined"
                className={classes.dialogTextField}
                value={this.props.reduxState.newCustomer.first_name}
                onChange={this.handleChange('first_name')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                type="search"
                margin="normal"
                variant="outlined"
                className={classes.dialogTextField}
                value={this.props.reduxState.newCustomer.last_name}
                onChange={this.handleChange('last_name')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Phone Number"
                type="search"
                margin="normal"
                variant="outlined"
                className={classes.dialogTextField}
                value={this.props.reduxState.newCustomer.phone}
                onChange={this.handleChange('phone')}
                inputProps={{
                  maxLength: 10,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Street Address"
                type="search"
                margin="normal"
                variant="outlined"
                className={classes.dialogTextField}
                value={this.props.reduxState.newCustomer.street}
                onChange={this.handleChange('street')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                type="search"
                margin="normal"
                variant="outlined"
                className={classes.dialogTextField}
                value={this.props.reduxState.newCustomer.city}
                onChange={this.handleChange('city')}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Zip Code"
                type="text"
                margin="normal"
                variant="outlined"
                className={classes.dialogTextField}
                value={this.props.reduxState.newCustomer.zip}
                onChange={this.handleChange('zip')}
                inputProps={{
                  maxLength: 5,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="State"
                type="text"
                margin="normal"
                variant="outlined"
                className={classes.dialogTextField}
                value={this.props.reduxState.newCustomer.state}
                onChange={this.handleChange('state')}
                inputProps={{
                  maxLength: 2,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} style={{ direction: 'rtl', }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleSubmit}
              >Submit</Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.handleClose}
                className={classes.cancelMargin}
              >Cancel</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

const styles = theme => ({
  cancelMargin:{
    marginRight: theme.spacing.unit,
  },
  dialogTextField: {
    marginTop: theme.spacing.unit - 3,
    marginBottom: theme.spacing.unit - 8,
  },
  dialogComponent: {
    flexGrow: 1,
    maxWidth: 700,
  },
});

export default connect(mapStateToProps)(withStyles(styles)(AddCustomer));
