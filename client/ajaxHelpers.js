// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2206-FTB-ET-WEB-FT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`)
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.players;
    } catch (err) {
        console.log('Uh oh, trouble fetching player!', err);
    }
    
};

export const fetchSinglePlayer = async (playerId) => {
    try {
    const responseOne = await fetch(`${APIURL}/players/${playerId}`)
    const resultOne = await responseOne.json();
    const successfulResult = resultOne.data.player
    return successfulResult
    }
    catch (err) {
        console.log ('Uh oh, trouble fetching player!', err)
    }
};



export const addNewPlayer = async (playerObj) => {
    try {
    const responseTwo = await fetch(
      `${APIURL}/players`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (playerObj),
      }
    );
    const newPlayerAdd = await responseTwo.json();
    return newPlayerAdd.data.players
    }
    catch (err) {
        console.log ('Uh oh, trouble fetching player!', err)
    }
};

export const removePlayer = async (playerId) => {
        try {
         const responseThree = await fetch(`${APIURL}/players/${playerId}`, {
           method: 'DELETE',
         });
         const resultThree = await responseThree.json();
         if (resultThree.error) throw resultThree.error;
         return;
        } catch (err) {
         console.error(
           `Whoops, trouble removing player #${playerId} from the roster!`,
           err
         );
        }
    };
