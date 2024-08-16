export function Scrollbar() {
  return (
    <div className='absolute right-0 top-0 w-[11px] h-full origin-top-right opacity-0 transition-all duration-300'>
      <div className='absolute top-0 right-0 bg-[#cbacf9] opacity-50 w-[7px] rounded-[10px] m-[2px]'></div>
    </div>
  )
}