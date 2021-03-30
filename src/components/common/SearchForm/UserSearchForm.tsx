import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { FilterType } from '../../../redux/users-reducer';
  
type usersSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const searchValidate = (values: any) => {
    const errors = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    return errors;
}

export const UserSearchForm: React.FC<usersSearchFormPropsType> = (props) => {
  
    const formSubmitHandler = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChanged(values)
        setSubmitting(false)
    }
    return (
        <div>
        <Formik
            initialValues={{ term: '' }}
            validate={searchValidate}
            onSubmit={formSubmitHandler}
        >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="term" />
           <ErrorMessage name="term" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
        </div>
    )
}
