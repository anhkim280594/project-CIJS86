import React, { ReactElement } from 'react'
import styles from './styles.module.scss'

interface Props {
  text?: any;
  id?: string;
  btnClass?: string;
  className?: string;
  onClick: any,
  isSubmit: boolean,
  icon?: string;
  form?: string;
  disabled: boolean
}

function Button({
  text,
  id,
  className,
  onClick,
  isSubmit,
  icon,
  form,
  disabled
}: Props): ReactElement {
  if (isSubmit) {
    return (
      <input
        form={form}
        type='submit'
        value={text || undefined}
        className={`${styles.buttonNoColor} ${className} pointer`}
        id={id}
        onClick={onClick}
        disabled={disabled}
      />
    )
  }
  return (
    <button
      className={`${styles.buttonNoColor} ${className} pointer`}
      type={'button'}
      onClick={onClick}
      id={id}
      disabled={disabled}
    >
      {icon && (
        <picture>
          <source srcSet={icon} type='image/webp' />
          <img data-src={icon} alt={text} />
        </picture>
      )}
      {text}
    </button>
  )
}

export default Button
