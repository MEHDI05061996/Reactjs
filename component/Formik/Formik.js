import React, { Component } from 'react';
import {Formik, Field ,ErrorMessage} from 'formik';
import * as Yup from "yup"

class Formik1 extends Component {
  onSubmit = (values) => {
    console.log(values);
  }

  form = (props) => {
    return <form onSubmit={props.handleSubmit}>
      <label>Name</label><br />
      <Field name="name" /><br />
      <ErrorMessage name="name" /><br />

      <label>Email</label><br />
      <Field name="email" type="email" /><br />
      <ErrorMessage name="email" /><br />

      <label>Type</label><br />
      <Field name="type" component="select">
        <option value="1">One</option>
        <option value="2">Two</option>
      </Field>
      <br />
      <ErrorMessage name="type" /><br />

      <label>Active</label><br />
      <Field name="active" type="checkbox" /><br />
      <br />

      <label>Category</label><br />
      <Field name="category" type="radio" value="1" /> 1<br />
      <Field name="category" type="radio" value="2" /> 2<br />
      <ErrorMessage name="category" /><br />

      <label>facebook</label><br />
      <Field name="social.facebook" /><br />
      <ErrorMessage name="social.facebook" /><br />

      <label>Twitter</label><br />
      <Field name="social.Twitter" /><br />
      <ErrorMessage name="social.Twitter" /><br />

      <button type="submit">Send</button>
    </form>
  }

  schema = ()=>{
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      type: Yup.string().required(),
      email: Yup.string().required(),
      category: Yup.string().required(),
      social: Yup.object().shape({
        facebook: Yup.string().required('facebook is a required field'),
        Twitter: Yup.string().required('twitter is a required field'),
      }),
    });

    return schema;
  }


  render() {
    return (
      <div>
        <Formik 
          initialValues={{name: "", 
          email: "", 
          type: "",
          active: false,
          category: "",
          social:{
            facebook:"",
            Twitter:"",
          }
        }}
          onSubmit={this.onSubmit}
          render={this.form}
          validationSchema={this.schema()}
          />
      </div>
    );
  }
}
export default Formik1;