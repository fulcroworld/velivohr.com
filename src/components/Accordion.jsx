import { useState, useRef, useEffect } from 'react'

function AccordionItem({ title, children, isOpen, onToggle }) {
  const bodyRef = useRef(null)

  useEffect(() => {
    if (!bodyRef.current) return
    bodyRef.current.style.maxHeight = isOpen ? bodyRef.current.scrollHeight + 'px' : '0'
  }, [isOpen])

  return (
    <div className={`acc-item${isOpen ? ' open' : ''}`}>
      <button className="acc-head" onClick={onToggle}>
        <h4>{title}</h4>
        <span className="plus"></span>
      </button>
      <div className="acc-body" ref={bodyRef}>
        <div className="acc-body-inner">{children}</div>
      </div>
    </div>
  )
}

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="accordion reveal">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
