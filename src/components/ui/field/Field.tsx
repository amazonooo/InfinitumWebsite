import { TypeInputProps } from '@/types/field.types'
import { forwardRef } from 'react'
import styles from './Field.module.scss'
import { cn } from '@/utils/cn'

const Field = forwardRef<HTMLInputElement, TypeInputProps> (
  ({ error, style, Icon, className, ...rest }, ref) => {

    return (
			<label className={cn(styles.field, className)} style={style}>
				{Icon && (
					<div className={styles.icon}>
						<Icon />
					</div>
				)}
				<input ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		)
  }
)

Field.displayName = 'Field'

export default Field