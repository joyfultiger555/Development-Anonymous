import "../App.css"

function CheckBox({partyFilter: applyPartyFilter, branchFilter: applyBranchFilter, removePartyFilter, removeBranchFilter}) {
    const handlePartyFilter = (event, party) => {
        if (event.target.checked == true) {
            applyPartyFilter(party)
        } else {
            removePartyFilter(party)
        }
    }

    const handleBranchFilter = (event, branch) => {
        if (event.target.checked === true) {
            applyBranchFilter(branch)
        } else {
            removeBranchFilter(branch)
        }
    }
    return (
        <div>
            <div className="sortPartyText">Filter by Party</div>
            <div class="party">
                <label>
                    <input type="checkbox" onChange={event => handlePartyFilter(event, "Democrat")}/>
                    Democrat
                </label>
                <label>
                    <input type="checkbox" value="republican" onChange={event => handlePartyFilter(event, "Republican")}/>
                    Republican
                </label>
            </div>
            <div className="sortBranchText">Filter by Branch</div>
            <div class="branch">
                <label>
                    <input type="checkbox" onChange={event => handleBranchFilter(event, "Executive")}/>
                    Executive
                </label>
                <label>
                    <input type="checkbox" onChange={event => handleBranchFilter(event, "Legislative")}/>
                    Legislative
                </label>
                <label>
                    <input type="checkbox" onChange={event => handleBranchFilter(event, "Judicial")}/>
                    Judicial
                </label>
            </div>
        </div>
    )
    
}
export default CheckBox
