import type { ReactElement } from "react";

function Button({icon} : { icon : ReactElement }) {
  return (
     <button className="button">Submit {icon}</button>
  )
}

export default Button