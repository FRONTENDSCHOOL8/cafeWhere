function ErrorMessage({
  as: ComponentName = 'span',
  message,
  className,
  ...props
}) {
  return (
    <ComponentName
      className={`h-5 text-12pxr text-semantic-error ${className}`}
      {...props}
    >
      {message}
    </ComponentName>
  );
}

export default ErrorMessage;
