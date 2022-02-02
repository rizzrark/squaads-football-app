import Image from 'next/image'

interface LogoProps {
  logoWidth: number
  logoHeight: number
  logoSrc: string
  logoAlt: string
  logoLayout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined
}

const Logo: React.FC<LogoProps> = ({
  logoWidth,
  logoHeight,
  logoSrc,
  logoAlt,
  logoLayout,
}: LogoProps) => (
  <div>
    <Image
      src={logoSrc}
      width={logoWidth}
      height={logoHeight}
      alt={logoAlt}
      layout={logoLayout}
    />
  </div>
)

export default Logo
