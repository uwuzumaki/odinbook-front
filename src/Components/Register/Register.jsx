import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex h-screen w-full flex-1 flex-col items-center justify-center md:flex-row">
        <div className="hidden flex-1 items-end md:flex md:flex-col md:justify-center">
          <div className="pb-4 text-right text-4xl font-semibold text-blue-600">
            Create Account
          </div>
          <div className="text-right text-xs lg:text-sm xl:text-base">
            Welcome aboard matey!
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center p-6 md:flex-2">
          <div className="flex w-full flex-2 flex-col items-center justify-center p-6 lg:max-w-2xl">
            <div className="mb-4 w-full text-left text-2xl font-bold md:hidden">
              Create Account
            </div>
            <form className="flex w-full flex-col" onSubmit={handleSubmit}>
              <label className="mb-1 ml-2 text-left text-sm" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                className="mb-2 rounded-xl bg-gray-200 p-2 focus:bg-blue-200"
                placeholder="Enter a Username"
              />
              <label className="my-1 ml-2 text-left text-sm" htmlFor="password">
                Choose a Password
              </label>
              <input
                id="password"
                className="rounded-xl bg-gray-200 p-2 focus:bg-blue-200"
                placeholder="Password"
              />
              <button
                className="mt-4 rounded-xl bg-blue-600 py-1 text-white hover:cursor-pointer hover:bg-blue-800"
                type="submit"
              >
                Register!
              </button>
            </form>
          </div>
          <div className="flex w-full p-6 lg:max-w-2xl">
            <Link
              to="/login"
              className="w-full rounded-xl border p-1 hover:bg-gray-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
