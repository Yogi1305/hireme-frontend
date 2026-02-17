import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
    }`

  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          HireMe
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          <li>
            <NavLink to="/" end className={navItemClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" className={navItemClass}>
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/employeer" className={navItemClass}>
              Employeer
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={navItemClass}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={navItemClass}>
              Login
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/register" className={navItemClass}>
              Register
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
