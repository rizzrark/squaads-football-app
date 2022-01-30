import Link from 'next/link'
import { IoIosFootball, IoMdPerson } from 'react-icons/io'
import { BsFillPeopleFill } from 'react-icons/bs'

type EmptyString = ''
interface NavigationProps {
  navHomeIconSize: number
  navIconSize: number
  navColor: string | EmptyString
}

const Navigation: React.FC<NavigationProps> = ({
  navHomeIconSize,
  navIconSize,
  navColor,
}: NavigationProps) => (
  <nav
    className={`fixed bottom-0 flex w-full h-16 m-0 shadow-lg sm:top-0 ${navColor} `}
  >
    <ul className="flex items-center w-full justify-evenly">
      <li>
        <Link href="/teams">
          <a>
            <BsFillPeopleFill size={navIconSize} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <IoIosFootball size={navHomeIconSize} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>
            <IoMdPerson size={navIconSize} />
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)
export default Navigation
