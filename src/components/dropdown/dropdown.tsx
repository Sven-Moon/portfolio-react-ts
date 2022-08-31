import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { map } from 'rxjs'
import capitalize from '../../helpers/capitalize'

type Props = {
  buttonText: string,
  id: string,
  items: Array<DropdownItem>,
  animation: DropdownAnimation
}
type DropdownItem = string
type DropdownAnimation = (id: string) => void

const Dropdown = (props: Props) => {
  const { buttonText, id, items, animation } = props

  useEffect(() => {
      animation(id)
  }, [])
  

  return (
    <div id={id} className="dropdown">
      {buttonText}
      <div className="dropdown__menu">
        {items.map((item, i) => <a href={item} key={i} data-index={i}>{capitalize(item)}</a>) }
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  buttonText: '',
  id: '',
  items: [],
  animation: (id: string) => {
    const trigger = document.querySelector(`#${id}`)
    const menu = document.querySelector(`#${id} .dropdown__menu`)


    trigger?.addEventListener("mouseenter", showMenu)
    trigger?.addEventListener("mouseleave", hideMenu)
    // dropdownTrigger?.addEventListener("mouseleave", hideMenu)

    function showMenu() {
      menu?.classList.add("show")
    }

    function hideMenu() {
      menu?.classList.remove("show")
    }
  }
}

export default Dropdown