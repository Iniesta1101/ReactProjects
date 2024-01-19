
export default function Buscador(){
    
    return<>
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 justify-content-center d-flex mt-5">
                <form id="searchForm">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Encuentra tu pokémon" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-primary" type="submit" id="button-addon2"><img src="../src/assets/search.svg"/></button>
                    </div>
                </form>
            </div>
        </div>
    </>
    
    
}