import React, { ReactElement } from 'react'
import styles from './styles.module.scss'

interface Props {
  type?: string,
  placeholder?: string,
  className?: string,
  onChange?: any,
  name?: string,
  value?: any,
  required?: boolean,
  onBlur?: any,
  disabled?: boolean,
  id?: any,
  list?: string,
  autoFocus?: boolean
}

function Input({
  type,
  placeholder,
  className,
  onChange,
  name,
  value,
  required,
  onBlur,
  disabled,
  id,
  list,
  autoFocus = false
}: Props): ReactElement {
  const onInput = (e:any) => {
    e.preventDefault()
    if (onChange && typeof onChange === 'function') {
      onChange(e?.target?.value)
    }
  }

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value || undefined}
        className={styles.input}
        onChange={e => onInput(e)}
        onBlur={onBlur}
        autoComplete='off'
        id={id}
        list={list}
        autoFocus={autoFocus}
        required={required}
        disabled={disabled}
      />
    </div>
  )
}

export default Input
