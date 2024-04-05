import Image from "next/image";
import { useRouter } from "next/navigation";

const BackLink = ({ classname } : { classname?: string }) => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={`flex items-center gap-2 ${classname}`}>
      <Image className="-scale-x-100" src='/icons/arrow-right.svg' alt="Back" width={24} height={20} />

      <p className='text-xl font-normal'>Back</p>
    </button>
  )
}

export default BackLink;