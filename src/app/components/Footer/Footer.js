import React from 'react'

function Footer() {
  return (
    <footer className=" text-white py-8 w-full mt-10">
    <div className="container mx-auto text-center">
      <p className='text-slate-950 dark:text-white'>
        &copy; {new Date().getFullYear()} Dejan Maric. All rights reserved.
      </p>
      <p className="mt-2 text-slate-950 dark:text-white ">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
      </p>
    </div>
  </footer>
  )
}

export default Footer