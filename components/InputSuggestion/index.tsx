import React, { ReactElement, useState } from 'react'
import ArrowExpand from '../../icons/ArrowExpand'
import styles from './styles.module.scss'

interface Props {
  type?: string,
  placeholder?: string,
  className?: string,
  onChange?: any,
  name?: string,
  value?: any,
  // required?: boolean,
  onBlur?: any,
  disabled?: boolean,
  id?: any,
  listId?: string,
  data?: any
}

function InputSuggestion({
  type,
  placeholder,
  className,
  onChange,
  name,
  value,
  // required,
  onBlur,
  disabled,
  id,
  listId,
  data
}: Props): ReactElement {
  const [currentValue, setCurrentValue] = useState()
  const [suggestions, setSuggestions] = useState([])

  const  onChangeInputValue = (value) => {
    handleFilterSuggestion(value)
    setCurrentValue(value)
    onChange(value)
  }

  const handleFilterSuggestion = (string) => {
    let matches = []
    if (string) {
      const regex = new RegExp(string, "gi")
      matches = data.filter(item => item.value.match(regex))
    }
    setSuggestions(matches)
  }

  const  handleFocus = () => {
    if (currentValue) {
      handleFilterSuggestion(currentValue)
    } else {
      setSuggestions(data)
    }
  }

  const  handleBlur = () => {
    if (onBlur) {
      onBlur()
    }
    setTimeout(() => {
      setSuggestions([])
    }, 150)
  }

  const onClickItem = (itemValue) => {
    onChange(itemValue)
    handleBlur()
  }

  const handleShowAllSuggestion = () => {
    if (suggestions?.length === data?.length) {
      setSuggestions([])
    }
    else {
      setSuggestions(data)
    }
  }

  return (
    <div className={`${styles.inputSuggestionWrapper} ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value || undefined}
        className={styles.input}
        onChange={e => onChangeInputValue(e?.target?.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete='off'
        id={id}
        list={listId}
        disabled={disabled}
      />
      <span
        className={`${styles.iconWrapper} ${suggestions.length && styles.rotate}`}
        onClick={handleShowAllSuggestion}
      >
        <ArrowExpand color='#ccc'/>
      </span>
      <ul className={styles.datalist}>
        {suggestions?.map(item => (
          <li
            key={item.id}
            className={styles.item}
            onClick={() => onClickItem(item.value)}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InputSuggestion
