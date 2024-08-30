import styles from './(loader)/loader.module.css'

export default function loading() {
  return (
		<div className='h-screen w-screen fixed top-0 left-0 z-[100000] bg-[#161616]'>
			<div className='w-full h-full flex items-center justify-center'>
				<div className={styles.loader}></div>
			</div>
		</div>
	)
}