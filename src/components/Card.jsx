import { Link } from "@phosphor-icons/react/dist/ssr";

function Card({ classText, Icon, title, href, linkText }) {
  return(
    <li className="card-item">
      <div className={"card-icon " + classText}>
        <Icon weight="fill" />
      </div>
      <h2 className="card-title">{title}</h2>
      <a className="card-link" href={href} target="_blank">
        <Link />
        {linkText}
        </a>
    </li>
  )
}

export default Card;