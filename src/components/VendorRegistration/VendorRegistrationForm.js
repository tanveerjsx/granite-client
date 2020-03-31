import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/authActions';
import * as Constants from '../../constants';

class VendorRegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vendor: {
                firstName: '',
                lastName: '',
                email: '',
                storeName: '',
                password: '',
                role: 'vendor',
                storeAddress: '',
                confirmPassword: '',
            }
        }
    }
    handleInputChange = ({ currentTarget: input }) => {
        let vendor = { ...this.state.vendor };
        vendor[input.name] = input.value;
        this.setState({ vendor });
    }
    addVendor = () => {
        const { firstName, lastName, email, storeName, password, storeAddress, confirmPassword } = this.state.vendor;
        if (firstName.length == 0) {
            alert("First Name Field is Empty");
        }
        else if (lastName.length == 0) {
            alert("Last Name Field is Empty");
        }
        else if (storeName.length == 0) {
            alert("Store Name Field is Empty");
        }
        else if (storeAddress.length == 0) {
            alert("Store Address Field is Empty");
        }
        else if (email.length == 0) {
            alert("Email Field is Empty");
        }
        else if (password.length == 0) {
            alert("Password Field is Empty");
        }
        else if (confirmPassword.length == 0) {
            alert("Confirm Password Field is Empty");
        }
        else if (password !== confirmPassword) {
            alert("Password Not Matched");
        }
        else {
            let vendor = this.state.vendor;
            delete vendor.confirmPassword;
            this.props.vendorRegistration(vendor);
        }
    }

    render() {
        console.log("The first Name is:", this.state.vendor)
        return (
            <Form className="fromContainerWrapper">
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="FirstName">{Constants.FIRST_NAME}</Label>
                            <Input type="name" name="firstName" id="FirstName" placeholder="First Name"
                                value={this.state.vendor.firstName} onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="LastName">{Constants.LAST_NAME}</Label>
                            <Input type="name" name="lastName" id="LastName" placeholder="Last Name"
                                value={this.state.vendor.lastName} onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="StoreName">{Constants.STORE_NAME}</Label>
                    <Input type="StoreName" name="storeName" id="StoreName" placeholder="Store Name"
                        value={this.state.vendor.storeName} onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="StoreAddress">{Constants.STORE_ADDRESS}</Label>
                    <Input type="text" name="storeAddress" id="StoreAddress" placeholder="Store Address"
                        value={this.state.vendor.storeAddress} onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">{Constants.EMAIL}</Label>
                    <Input type="email" name="email" id="Email" placeholder="Email"
                        value={this.state.vendor.email} onChange={this.handleInputChange}
                    />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Password">{Constants.PASSWORD}</Label>
                            <Input type="password" name="password" id="Password" placeholder="Password"
                                value={this.state.vendor.password} onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="ConfirmPassword">{Constants.CONFIRM_PASSWORD}</Label>
                            <Input type="password" name="confirmPassword" id="ConfirmPassword" placeholder="Confirm Password"
                                value={this.state.vendor.confirmPassword} onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Button style={{ color: 'white', backgroundColor: '#a22a2a', borderColor: '#a22a2a' }}
                    onClick={this.addVendor}
                >{Constants.SUBMIT}</Button>
            </Form>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        vendorRegistration: (vendor) => dispatch(authActions.vendorRegistration(vendor)),
    };
};
export default connect(null, mapDispatchToProps)(VendorRegistrationForm);