import Link from 'next/link'

const Navigation: React.FC = () => (
  <nav className="fixed bottom-0 flex w-full h-16 m-0 shadow-lg sm:top-0 bg-slate-200">
    <ul className="flex items-center w-full justify-evenly">
      <li>
        <Link href="/">
          <a>
            <i>c</i>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <i>c</i>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <i>c</i>
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)
export default Navigation
