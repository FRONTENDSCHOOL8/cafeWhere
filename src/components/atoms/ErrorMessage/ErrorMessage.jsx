function ErrorMessage(props) {
  return (
    <>
      <span className="h-5 text-sm text-semantic-error">{props.message}</span>
    </>
  );
}

export default ErrorMessage;
