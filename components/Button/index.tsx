import React, { ReactElement } from 'react'
import SpinnerIcon from '../../icons/SpinnerIcon'
import styles from './styles.module.scss'

interface Props {
  text?: any;
  id?: string;
  btnClass?: string;
  className?: string;
  onClick: any,
  isSubmit?: boolean,
  icon?: string;
  form?: string;
  disabled: boolean;
  loading: boolean;
  isMainColor?: boolean;
}

function Button({
  text,
  id,
  className,
  onClick,
  isSubmit,
  icon,
  form,
  isMainColor,
  disabled,
  loading
}: Props): ReactElement {
  return (
    <button
      className={`${styles.button} ${className} ${isMainColor ? 'mainColor' : null} pointer`}
      onClick={onClick}
      type='submit'
      id={id}
      disabled={loading || disabled}
    >
      {icon && !loading && (
        <picture>
          <source srcSet={icon} type='image/webp' />
          <img data-src={icon} alt={text} />
        </picture>
      )}
      {text}
      {loading && (
        <span className={styles.btnIconWrapper}>
          <SpinnerIcon />
        </span>
      )}
    </button>
  )
}

export default Button
