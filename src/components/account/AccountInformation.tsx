'use client';

import Link from 'next/link';

export default function AccountInformation() {
  return (
    <>
      <div>
        <div className="">
          <main>
            <h1 className="sr-only">Account Settings</h1>

            {/* Navigation Bar */}
            <header className="border-b border-white/5">
              <nav className="flex overflow-x-auto py-4">
                <ul
                  role="list"
                  className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
                >
                  <li>
                    <Link href="/account/settings" className="text-indigo-400">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/orders">Orders</Link>
                  </li>
                  <li>
                    <Link href="/account/integrations">Integrations</Link>
                  </li>
                </ul>
              </nav>
            </header>

            {/* Settings forms */}
            <div className="divide-y divide-white/5">
              {/* Personal Information */}
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-white">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>

                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                          id="full-name"
                          name="full-name"
                          type="text"
                          autoComplete="name"
                          placeholder="Austin Cavanagh"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="austin.cavanagh.cs@gmail.com"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>

              {/* Change Password */}
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-white">
                    Change password
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Update your password associated with your account.
                  </p>
                </div>

                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="current-password"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Current password
                      </label>
                      <div className="mt-2">
                        <input
                          id="current-password"
                          name="current_password"
                          type="password"
                          autoComplete="current-password"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="new-password"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        New password
                      </label>
                      <div className="mt-2">
                        <input
                          id="new-password"
                          name="new_password"
                          type="password"
                          autoComplete="new-password"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="confirm-password"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Confirm password
                      </label>
                      <div className="mt-2">
                        <input
                          id="confirm-password"
                          name="confirm_password"
                          type="password"
                          autoComplete="new-password"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>

              {/* Placeholder for ability to log out of sessions */}

              {/* Delete Account */}
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-white">
                    Delete account
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    No longer want to use our service? You can delete your
                    account here. This action is not reversible. All information
                    related to this account will be deleted permanently.
                  </p>
                </div>

                <form className="flex items-start md:col-span-2">
                  <button
                    type="submit"
                    className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
                  >
                    Yes, delete my account
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
