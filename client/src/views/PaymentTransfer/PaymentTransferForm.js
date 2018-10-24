import React, {Component} from 'react';
import {Formik, Form} from "formik";

class PaymentTransferForm extends Component {
    render() {
        return (
            <Formik render={({
                                 values,
                                 errors,
                                 touched,
                                 handleBlur,
                                 handleChange,
                                 handleSubmit,
                                 isSubmitting,
                             }) => (
                <form onSubmit={handleSubmit}>

                </form>
            )}/>
        );
    }
}

export default PaymentTransferForm;