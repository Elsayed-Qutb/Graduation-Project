import phone from './assets/Container.svg'
import logo from './assets/logo.svg'

export default function Mainheader() {
  return (
    <div >
     <header className="w-full bg-[#FEFFFF]  flex justify-center ">
      <div className="container flex justify-between items-center p-2 border-b border-black/15">
        <img className='w-22' src={logo}></img>
        <nav className="w-104.5 text-[#627384] flex items-center justify-center gap-5 ">
          <a className='text-[10px]'>Find Doctors</a>
          <a className='text-[10px]'>Services</a>
          <a className='text-[10px]'>Consult Online</a>
          <a className='text-[10px]'>About</a>
          <a className='text-[10px]'>Contact</a>
        </nav>
        <button className="bg-[#0da2e7] text-white px-4 py-1.5 text-[9px] rounded-2xl ">Book Appointment</button>
        <img className='w-22.5' src={phone}></img>
      </div>
     </header>
    </div>
  )
}
