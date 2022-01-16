import { util } from '@rishabh/reusable-inventory';
import { Field, Form, Formik, FormikHelpers, FormikState } from 'formik';
import { ReactElement } from 'react';
import { FormField } from './form-field';

type FormValues = {
  projectName: string;
  dueDate: string;
};

const { formatDate } = util;

export const SimpleProjectForm = (): ReactElement => {
  const initialValues: FormValues = {
    projectName: '',
    dueDate: formatDate(new Date(), 'DD MMM YYYY'),
  };

  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    console.log({ values, helpers });
    setTimeout(() => helpers.setSubmitting(false), 200);
  };

  return (
    <div>
      <h2>Project Dashboard</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }: FormikState<FormValues>) => (
          <Form>
            {isSubmitting ? 'Status: Submitting' : 'Status: Editing'}
            <br />
            <Field
              id='projectName'
              name='projectName'
              placeholder='Project Name'
              component={FormField}
            />
            <br />
            <Field
              id='dueDate'
              name='dueDate'
              type='date'
              component={FormField}
            />
            <br />
            <button type='submit'>Submit Project</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
