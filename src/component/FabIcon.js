import React from 'react'
import { useState } from 'react';
import cn from "classnames";
import { MdAdd } from "react-icons/md";
import "../App.scss"

function FabIcon({actions}) {
    const [open, setOpen] = useState(false);
    const mouseEnter = () => setOpen(true);
    const mouseLeave = () => setOpen(false);
    return (
        <div>
            <ul
                className="fab-container"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >
                <li className="fab-button">
                    <MdAdd />
                </li>
                {actions.map((action, index) => (
                    <li
                        style={{ transitionDelay: `${index * 25}ms` }}
                        className={cn("fab-action", { open })}
                        key={action.label}
                        onClick={action.onClick}
                    >
                        {action.icon}
                        <span className="tooltip">{action.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FabIcon


