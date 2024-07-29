'use client'
import Image from 'next/image'
import Link from 'next/link'

const CustomDropdown = () => {
  const handleLogout = () => {}
  return (
    <section className="absolute top-2 right-2 bg-white p-2 w-full max-w-[256px] h-full max-h-[216px] z-20">
      <h2 className="text-[#E9E9E9] p-[10px]">My Account</h2>
      <hr />
      <article className="font-[500] text-[14px] leading-5 text-[#4D4E51]">
        <Link
          href="/settings"
          className="flex items-center gap-2 p-[10px]  mt-1"
        >
          <Image src="/settings.svg" width={20} height={20} alt="settings" />
          <p>Settings</p>
        </Link>
        <Link href="/help" className="flex items-center gap-2 p-[10px] mt-1">
          <Image src="/help_support.svg" width={20} height={20} alt="help" />

          <p>Help & Support</p>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full bg-[#DA6411] flex items-center gap-2 p-[10px] text-[14px] leading-5 mt-1 rounded-sm text-white "
        >
          <Image src="/logout.svg" width={20} height={20} alt="logout" />
          <p>Log out</p>
        </button>
      </article>
    </section>
  )
}

export default CustomDropdown
