

export default {
// template has both modular values (not used) and hard coded data
    template:
        `
                <div class="matching-recipes">
                    <details class="recipe">
                        <summary class="recipe-summary">
                            <div class="section-title">
                                Maträtt 1
                            </div>
                            <div id="summary-grid">
                                <div>
                                    <img src="assets/klocka.svg" alt="klocka">
                                    Under 30 min
                                    {{ time }}
                                </div>
                                <div>
                                    <img src="assets/level.svg" alt="komplexitet 2">
                                </div>
                                <div>
                                    {{ price }}
                                    140
                                    kr/p
                                </div>
                                <div>
                                    {{ margin }}
                                    30
                                    % VM
                                </div>
                            </div>
                            <div class="recipe-vector">
                                <img src="assets/Vector-7.svg" alt="Pil ikon" class="arrow">
                            </div>
                        </summary>
                        <div class="recipe-details">
                            <div id="recipe-image">
                                <img src="assets/unsplash_awj7sRviVXo.png" alt="">
                            </div>
                            <div class="column-groups">
                                <div class="recipe-details-col">
                                    <div>
                                        <h5>Måltidstyp</h5>
                                        <p>Huvudrätt</p>
                                    </div>
                                    <div>
                                        <h5>Allergier</h5>
                                        <p>Skaldjur</p>
                                    </div>
                                </div>
                                <div class="recipe-details-col">
                                    <div>
                                        <h5>Tema</h5>
                                        <p>Havet</p>
                                    </div>
                                    <div>
                                        <h5>Kost</h5>
                                        <p>Pesceterian</p>
                                    </div>
                                </div>
                                <div class="recipe-details-col">
                                    <div>
                                        <h5>Kan frysas</h5>
                                        <p>Ja</p>
                                    </div>
                                    <div>
                                        <h5>Kan förlagas</h5>
                                        <p>Ja</p>
                                    </div>
                                </div>

                            </div>

                            <input class="view-recipe" type="image" src="assets/pil-nästa.svg" alt="remove">


                        </div>
                    </details>

                </div>

`
}