import Sidebar from './Sidebar'

const MobileMenu = () => {
  return (
    <div className='w-fit min-w-4/6 sm:min-w-2/5 absolute z-[999] bg-[#f6f7f9] h-screen shadow-lg'>
        <Sidebar />
    </div>
  )
}

export default MobileMenu