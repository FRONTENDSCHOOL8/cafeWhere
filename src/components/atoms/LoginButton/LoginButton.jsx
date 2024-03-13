function LoginButton(props) {
  return (
    <div className="flex items-center justify-center px-5">
      <button
        type="submit"
        className="text-4 h-12 w-full rounded-xl bg-primary-colors px-4 py-3 text-center text-white"
      >
        {props.children}
      </button>
    </div>
  );
}

export default LoginButton;
