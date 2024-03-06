function ErrorMessage({
  as: ComponentName = 'span',
  message,
  className,
  ...props
}) {
  return (
    <ComponentName
      className={`h-5 text-sm text-semantic-error ${className}`}
      {...props}
    >
      {message}
    </ComponentName>
  );
}

export default ErrorMessage;
