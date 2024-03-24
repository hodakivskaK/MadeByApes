import * as Yup from 'yup';

const validationSchema = Yup.object({
  discord: Yup.string()
    .matches(/^@/, {
      message: 'Wrong discord,must start with @',
      excludeEmptyString: true,
    })
    .test(
      'no-spaces',
      'Discord should not contain spaces',
      value => value === undefined || value.trim() === value
    )
    .required('Discord is required'),
  walletAddress: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Wrong address')
    .test(
      'no-spaces',
      'Wallet address should not contain spaces',
      value => value === undefined || value.trim() === value
    )
    .required('Wallet address is required'),
});

export default validationSchema;
