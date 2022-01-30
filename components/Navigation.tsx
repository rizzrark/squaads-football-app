import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsFillPeopleFill, BsClipboardData } from 'react-icons/bs'
import { GiSoccerBall } from 'react-icons/gi'

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
  const active = 'text-slate-50 scale-125 '
  const inactive = 'text-stone-400  '

  return (
    <nav
      className={`fixed bottom-0 flex w-full  h-16  shadow-lg sm:top-0 rounded-t-2xl z-50 ${navColor}`}
    >
      <ul className="flex items-center w-full justify-evenly">
        <li
          className={`transition ease-in-out duration-300 ${
            router.pathname === '/teams' ? active : inactive
          }`}
        >
          <Link href="/teams">
            <a>
              <BsClipboardData size={navIconSize} />
            </a>
          </Link>
        </li>
        <li
          className={`transition ease-in-out duration-300 ${
            router.pathname === '/' ? active : inactive
          }`}
        >
          <Link href="/">
            <a>
              <GiSoccerBall size={navHomeIconSize} />
            </a>
          </Link>
        </li>
        <li
          className={`transition ease-in-out duration-300 ${
            router.pathname === '/players' ? active : inactive
          }`}
        >
          <Link href="/players">
            <a>
              <BsFillPeopleFill size={navIconSize} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
