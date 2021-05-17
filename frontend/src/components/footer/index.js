import "./styles.css";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="espaco" />
      <p className="github center">
        <AiFillGithub size={20} color="FFF" />
        <a href="https://github.com/LucaGuidoRegolini/Bluelab">
          LucaGuidoRegolini/Bluelab
        </a>
      </p>
    </footer>
  );
}
