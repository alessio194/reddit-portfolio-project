import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit } from "@fortawesome/free-brands-svg-icons";

export function Header(props) {
  return (
    <header className="bg-white drop-shadow-xl p-4 h-[90px] flex justify-center items-center">
      <div className="mr-2 text-3xl text-blue-600">
        <FontAwesomeIcon icon={faReddit} />
      </div>
      <p className="text-xl ">
        Reddit<span className="font-extrabold">Minimal</span>
      </p>
    </header>
  );
}
