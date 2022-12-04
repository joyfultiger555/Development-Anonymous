import "../App.css"

function CheckBox({party1: applyParty, branch: applyBranch, removeParty, removeBranch}) {
    const handlePartyFilter = (event, party) => {
        if (event.target.checked == true) {
            applyParty(party)
        } else {
            removeParty(party)
        }
    }

    const handleBranchFilter = (event, branch) => {
        if (event.target.checked === true) {
            applyBranch(branch)
        } else {
            removeBranch(branch)
        }
    }
    return (
        <div>
            <div className="sortPartyText">Filter by Party</div>
            <div class="party">
                <input type="checkbox" onChange={event => handlePartyFilter(event, "Democrat")}/>
                Democrat
                
                <input type="checkbox" value="republican" onChange={event => handlePartyFilter(event, "Republican")}/>
                Republican
            </div>
            <div className="sortBranchText">Filter by Branch</div>
            <div class="branch">
                
                <input type="checkbox" onChange={event => handleBranchFilter(event, "Executive")}/>
                Executive
                <input type="checkbox" onChange={event => handleBranchFilter(event, "Legislative")}/>
                 Legislative
                <input type="checkbox" onChange={event => handleBranchFilter(event, "Judicial")}/>
                Judicial
            </div>
        </div>
    )
    
}
export default CheckBox