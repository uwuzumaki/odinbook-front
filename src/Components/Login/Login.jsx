const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-2/3 flex-col items-center p-4">
          <div className="mb-4 text-2xl font-bold">Sign In</div>
          <form className="flex w-full flex-col" onSubmit={handleSubmit}>
            <input
              className="mb-2 rounded-xl bg-gray-200 p-2 focus:bg-blue-200"
              placeholder="Username"
            />
            <input
              className="rounded-xl bg-gray-200 p-2 focus:bg-blue-200"
              placeholder="Password"
            />
            <button
              className="mt-2 rounded-xl bg-blue-600 py-2 text-white hover:cursor-pointer hover:bg-blue-800"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div>or</div>
          <div>Continue with Github</div>
        </div>
      </div>
    </>
  );
};

export default Login;
