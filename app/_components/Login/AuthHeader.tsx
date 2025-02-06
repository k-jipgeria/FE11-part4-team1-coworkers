// components/AuthHeader.tsx
import Link from 'next/link';
import Image from 'next/image';

const AuthHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 w-full h-[6rem] bg-background-secondary flex items-center justify-start px-[1.6rem] tablet:px-[3.2rem] pc:px-[16vw]">
      <Link href="/" aria-label="홈으로 이동">
        <Image
          src="/icons/logo.svg"
          alt="Coworkers 로고"
          width={158}
          height={32}
          sizes="15.8rem"
          priority
          className="cursor-pointer"
        />
      </Link>
    </header>
  );
};

export default AuthHeader;
