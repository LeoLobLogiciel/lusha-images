import Alert from '@mui/material/Alert'

const ErrorMessage = ({textError}) => {
  return (
    <Alert severity='error'>{textError}</Alert>
  )
}


export default ErrorMessage