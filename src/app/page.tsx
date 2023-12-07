
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from "@/components/ui/button";
import Link from 'next/link';


export default function Home() {
  return (
    <>

      <MaxWidthWrapper className='bg-[#463D72] content'>
        <div className="pb-10 mx-auto text-center flex flex-col items-center max-w-3xl ">

          <p className=" mt-5 p-0 -mb-[0.4rem] text-xl font-semibold max-w-prose text-muted-foreground text-gray-900"> 2023</p>
          <h1 className="text-4xl font-bold tracking-wide text-gray-700 sm:text-8xl uppercase pointer-events-none"> Javascriptmas
          </h1>

        </div>
      </MaxWidthWrapper>
    </>
  );
}
