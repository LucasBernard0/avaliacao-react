import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-subtle">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <h4>AUTOR</h4>
            <p>2023 - Lucas Bernardo Velloso</p>
          </div>
          <div className="col-md-3">Coluna 3</div>
          <div className="col-md-3">Coluna 4</div>
        </div>
      </div>
    </footer>
  );
}
