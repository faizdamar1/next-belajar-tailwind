import React from "react";

export default function CardComponent() {
  return (
    <div className="max-w-xl">
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <header className="border-b px-4 py-2.5 bg-gray-50/50 flex justify-between items-center">
          <div>
            <h1 className="font-medium">Card Title</h1>
            <span className="text-gray-500">
              The standard Lorem Ipsum passage
            </span>
          </div>
          <a
            href=""
            className="bg-pink-500 hover:bg-pink-700 transition duration-500 ring-2 hover:ring-4 ring-pink-200 px-5 py-2.5 text-white rounded-xl font-semibold text-sm"
          >
            New Task
          </a>
        </header>
        <section className="px-4 py-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </section>
        <footer className="border-t px-4 py-2.5 text-gray-500 bg-gray-50/50">
          Donec vestibulum velit eros, a ultrices sapien porttitor a
        </footer>
      </div>
    </div>
  );
}
