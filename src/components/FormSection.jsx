import React from "react";
import "./custom.css";
import book from "./book.png";

function FormSection() {
  return (
    <div className="form-section">
      <div className="col1">
        <img src={book} className="book" alt="catalogue" />
        <h2>Veiliger wonen in uq eigen huis</h2>
        <p>
          Als u meer moeite hebt traplopen, kan een traplift een uitkomst zijn.
          U wordt veilig en comfortabel naar boven en beneden gebracht. In onze
          gratis traplift borchure kunt u op uq gemak alles lezen over
          trapliften. Met deze brochure krijgt u een beeld van de mogelijkheden
          en modellen, maar ook de aankoop en financiering.
        </p>
        <h3>Vraag onze brochjure aan en ontdek:</h3>
        <ol>
          <li>Tips en adviezen</li>
          <li>grootste assortiment in merken en modellen</li>
          <li>Trapliften in iedere prjisklasse</li>
          <li>
            Vul hiernaast uw gegevens in en ontvang de gratis traplift brochure
          </li>
        </ol>
      </div>

      <div className="col2">
        <h2>Vergelijk 17 trapliften van 6 fabrikanten</h2>
        <button type="submit" className="btn">
          Vraag de gratis en vrijblijvende brochure aan
        </button>
        <div className="form">
          <h3>JA, stuur meij de gratis traplift brochure</h3>
          <form id="form">
            <div className="form-control custom">
              <label for="role" id="label-role">
                Aanhef:
              </label>

              <select name="role" id="role">
                <option value="student">Aanhef</option>
                <option value="intern">Intern</option>
                <option value="professional">Professional</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-control">
              <label for="name" id="label-name">
                Voornaam:
              </label>

              <input type="text" id="name" placeholder="Bv. Lore" />
            </div>
            <div className="form-control">
              <label for="name" id="label-name">
                Achternaam:
              </label>

              <input type="text" id="name" placeholder="Bv. Peeters" />
            </div>
            <div className="form-control">
              <label for="name" id="label-name">
                Telefoonnummer
              </label>

              <input type="text" id="name" placeholder="Bv. 0471123456" />
            </div>
            <div className="form-control">
              <label for="name" id="label-name">
                E-mail
              </label>

              <input
                type="email"
                id="name"
                placeholder="Bv. lore.peeters@gmail.com"
              />
            </div>
            <div className="form-control">
              <input type="checkbox" name="inp" className="cst-check"></input>
              <label>
                Ja, ik wil graag deze informatie ontvangen en mobilae mag mih
                per email en/of telefoon conatcteren. ik ga akkoord met de voor
                waarden.
              </label>
            </div>
            <button type="submit" className="btn btn-submit">
              <span> BROCHURE AANVRAGEN ᐳᐳ </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
