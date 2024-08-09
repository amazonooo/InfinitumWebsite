import { Lock } from 'lucide-react'
import { FC } from 'react'

const Chat: FC = () => {
  return (
    <div className='p-3 rounded-lg border border-[#cbacf9]/70 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
      <h1 className='text-center text-lg md:text-xl'>
        Настройки игрового чата
      </h1>
      <div className='px-2 mt-7'>
        <div className='flex items-center justify-center'>
          <Lock size={75} className='text-[#cbacf9]' />
        </div>
        <p className='text-base md:text-lg text-center mt-5'>
          Чтобы получить возможность устанавливать и настраивать Ваш личный
          префикс или менять цвет никнейма, Вам необходима привилегия{' '}
          <span className='text-[#cbacf9]'>Ultra</span> или выше, или
          возможность изменение префикса
        </p>
      </div>
    </div>
	)
}

export default Chat