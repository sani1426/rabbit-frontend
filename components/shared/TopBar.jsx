import Image from "next/image"
import Link from "next/link"


const TopBar = () => {
  return (
    <div className="bg-[#fd802e] text-white">
        <div className="container mx-auto">
                <div>
                        <Link className="hover:text-gray-300" href="/">
                                <Image src="@/public/icons/facebook.svg" alt="facebook-icon" className="w-5 h-5" />
                        </Link>
                        <Link className="hover:text-gray-300" href="/">
                                <Image src="@/public/icons/instagram.svg" alt="facebook-icon" className="w-5 h-5" />
                        </Link>
                        <Link className="hover:text-gray-300" href="/">
                                <Image src="@/public/icons/twitter.svg" alt="facebook-icon" className="w-5 h-5" />
                        </Link>
                </div>
        </div>
    </div>
  )
}

export default TopBar
