import { FieldInputProps, FormikState } from 'formik';
import { Input } from './styles';

interface FormFieldProps {
  field: FieldInputProps<any>;
  form: FormikState<any>;
}
export const FormField = ({ field, form, ...props }: FormFieldProps) => (
  <Input {...field} {...props} />
);
