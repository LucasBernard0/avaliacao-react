import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary">
      <div className="container">
        <div className="row py-5">
          <div className="col-md">
            <h4>Lucas Bernardo Velloso</h4>
            <p>2023 - Todos os direitos reservados</p>
          </div>
          <div className="col-md">
            <h4>Sobre o projeto</h4>
            <a href="">
              <li className="nav-link"> Meu Github</li>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
