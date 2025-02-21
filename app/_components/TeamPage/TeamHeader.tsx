import team_Thumbnail from '@images/thumbnail_team.png';
import gear from '@icons/gear.svg';
import Image from 'next/image';
import Dropdown from '../common/Dropdown';
import { useRouter } from 'next/navigation';

interface TeamHeaderProps {
  teamName: string;
  teamId: string;
  isAdmin: boolean;
}

export default function TeamHeader({
  teamName,
  teamId,
  isAdmin,
}: TeamHeaderProps) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/team/${teamId}/edit`);
  };

  return (
    <div className="relative flex h-[6.4rem] w-full items-center justify-between rounded-[1.2rem] border-[0.1rem] border-border-primary/10 bg-background-secondary px-[2.4rem] py-[2rem]">
      <div className="z-10 text-[2rem] font-bold text-text-inverse">
        {teamName}
      </div>
      <div className="absolute right-[2.4rem] flex items-center gap-[1.6rem]">
        <Image src={team_Thumbnail} alt="팀 썸네일" width={181} height={64} />
        {isAdmin ? (
          <Dropdown>
            {({ isOpen, toggleDropdown }) => (
              <>
                <div className="cursor-pointer" onClick={toggleDropdown}>
                  <Image src={gear} width={20} height={20} alt="설정 아이콘" />
                </div>
                <Dropdown.Menu
                  isOpen={isOpen}
                  boxClass="w-[10rem] top-[2rem] right-0 shadow-2xl border-[0.1rem] border-border-primary/10"
                >
                  <Dropdown.Item
                    toggleDropdown={toggleDropdown}
                    onClick={handleEdit}
                    className="justify-center"
                  >
                    수정하기
                  </Dropdown.Item>
                </Dropdown.Menu>
              </>
            )}
          </Dropdown>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
