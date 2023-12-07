import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="bg-[#F3F3F6] sticky z-50 top-0 inset-x-0 h-16">
      <div className="bg-[#F3F3F6] relative">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 justify-between items-center">
              {/* Mobile Nav */}

              <div className="flex ml-4 lg:ml-4 items-center text-xl">
                <Link href="#" >
                  <Image src="/scrimba.svg" width={20} height={20} alt="scrimba logo" />
                </Link>
                <div className="ml-2 font-bold">sqroot <span className="font-normal mx-1">/</span><span className="text-sm font-normal">JavaScriptmas</span></div>
              </div>
              <div className="ml-auto flex ">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 text-md">
                  Gaurav Rana

                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

      </div>

    </div>
  );
}

export default Navbar;