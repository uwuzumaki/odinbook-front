import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex h-screen w-full flex-1 flex-col items-center justify-center md:flex-row">
        <div className="hidden flex-1 items-end md:flex md:flex-col md:justify-center">
          <div className="pb-4 text-right text-4xl font-semibold text-blue-600">
            Sign In
          </div>
          <div className="text-right text-xs lg:text-sm xl:text-base">
            Enter your username and password
          </div>
          <div className="text-right text-xs lg:text-sm xl:text-base">
            Or use one of the other available options.
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center p-6 md:flex-2">
          <div className="flex w-full flex-2 flex-col items-center justify-center p-6 lg:max-w-2xl">
            <div className="mb-4 w-full text-left text-2xl font-bold md:hidden">
              Sign In
            </div>
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
                className="mt-2 rounded-xl bg-blue-600 py-1 text-white hover:cursor-pointer hover:bg-blue-800"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="my-2">or</div>
            <div className="w-full rounded-xl bg-slate-950 py-1 text-white hover:cursor-pointer hover:bg-slate-700">
              Continue with Github
            </div>
          </div>
          <div className="flex w-full p-6 lg:max-w-2xl">
            <Link
              to="/register"
              className="w-full rounded-xl border p-1 hover:bg-gray-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
