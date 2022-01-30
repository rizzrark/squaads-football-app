import Link from 'next/link'
import { useRouter } from 'next/router'
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
}: NavigationProps) => {
  const router = useRouter()
  const active = 'bg-white'

  return (
    <nav
      className={`fixed bottom-0 flex w-full h-16 m-0 shadow-lg sm:top-0 ${navColor}`}
    >
      <ul className="flex items-center w-full justify-evenly">
        <li className={router.pathname === '/teams' ? active : ''}>
          <Link href="/teams">
            <a>
              <BsFillPeopleFill size={navIconSize} />
            </a>
          </Link>
        </li>
        <li className={router.pathname === '/' ? active : ''}>
          <Link href="/">
            <a>
              <IoIosFootball size={navHomeIconSize} />
            </a>
          </Link>
        </li>
        <li className={router.pathname === '/players' ? active : ''}>
          <Link href="/players">
            <a>
              <IoMdPerson size={navIconSize} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
