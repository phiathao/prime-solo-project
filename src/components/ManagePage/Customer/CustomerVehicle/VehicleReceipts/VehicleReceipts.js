import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class VehicleReceipts extends React.Component {
    handleEdit = () => {
        this.props.dispatch({
            type: 'FETCH_DATA_VEHICLE',
            payload: this.props.vehicle.id
        });
        this.setState({
            edit: true
        });
    }
    handleCancel = () => {
        this.props.dispatch({
            type: 'FETCH_DATA_VEHICLE',
            payload: this.props.vehicle.id
        });
        this.setState({
            edit: false
        });
    }
    handleChange = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'EDIT_VEHICLE',
            payload: { ...this.props.reduxState.viewVehicle, [propertyName]: event.target.value }
        });
    }
    handleSubmit = () => {
        this.props.dispatch({
            type: 'UPDATE_VEHICLE',
            payload: this.props.reduxState.viewVehicle
        });
        this.setState({
            edit: false
        });
    }
    handleDelete = (vehicleId) => {
        if (window.confirm('Delete Vehicle?')) {
            this.props.dispatch({
                type: 'DELETE_VEHICLE',
                payload: vehicleId
            });
            this.props.dispatch({
                type: 'FETCH_DATA_CUSTOMER',
                payload: this.props.reduxState.viewCustomer.id
            });
        }
    }
    handleView = () => {
        this.props.dispatch({
            type: 'FETCH_DATA_VEHICLE',
            payload: this.props.vehicle.id
        });
        this.props.history.push('/manage/vehicle');
    }
    render() {
        return (
            this.props.reduxState.viewVehicle.id ?
                <>
                <div className="component-header">
                    <Button variant="contained" color="secondary" className="button-return-left" component={Link} to="/manage/customer">Back to Customer</Button>
                    <h3>View Vehicle Receipts</h3>
                </div>
                <Button variant="contained" color="secondary" onClick={() => this.handleAddVehicle(this.props.reduxState.viewCustomer.id)}>Add Receipts</Button>
                <div className="stick-left">
                    <div className="two-box">
                        <h4>Vehicle: {this.props.reduxState.viewVehicle.make} {this.props.reduxState.viewVehicle.model}</h4>
                    </div>
                    <h4>Year: {this.props.reduxState.viewVehicle.year}</h4>
                    <h4>Plate: {this.props.reduxState.viewVehicle.plate} Color: {this.props.reduxState.viewVehicle.color} Other: {this.props.reduxState.viewVehicle.other}</h4>
                </div>
                </>
                    :
                <div className="component-header">
                    <Button variant="contained" color="secondary" className="button-return-left" component={Link} to="/manage">Back to Manage</Button>
                    <h3>No Vehicle Selected</h3>
                </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(VehicleReceipts);
