// Proxies in JavaScript?

// q: can you explain to me what are proxies in javascript as a 12 year old?
// a: proxies are a way to intercept operations on objects, and to change the behavior of those operations.

// a proxy is a special objects that watches the actions we are performing on objects and it can change the behavior of those actions.

// creating a proxy:

const richard = {status: 'looking for work', age: 27};
var agent = new Proxy(richard, {});

// we create proxy by using the using the proxy constructor with the new keyword and then we pass in the object we want our proxy to take care of followed with a handler object.

// console.log(agent.status);

// working with proxies:
// the proxy object has methods tha acts on it and with those method the procy object is able to watch and change the behavior of the object it is watching or representing.

// those methods are called traps:

// the Get Trap:
// the get trap is used to intercept calls to properties:

const handler = {
    get(target, propName) {
        // console.log(target);
        console.log(`${propName} => ${target[propName]}`);
    }
};

const agent1 = new Proxy(richard, handler);
agent1.status; // logs out the richard object (the target) and the accessed property (propName), status.
agent1.age; // logs out the richard object (the target) and the accessed property (propName), age.

// the get trap returning immediately:

const handler1 = {
    get(target, propName) {
        return `give him a contract`;
    }
};

const agent2 = new Proxy(richard, handler1);
console.log(agent2.status); // returns give him a contract

// so the get trap comes in when we simply want to access the properties of the original objec // -> get trap helps us to access the properties and thats it.

// the set trap:

// the set trap is used to intercept calls to properties to assign values to them or simply to change their values.

const handler2 = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the property we are trying to set is payRate
           value = value * 0.85; // we will set it to 85% of the value
        } 
        target[propName] = value; // then we set the property to the value
    }
}

const agent3 = new Proxy(richard, handler2);
agent3.pay = 1000; // we set the payRate to 1000



// game object


const gameSettings = { date: '2023-4-08', difficulty: 'medium' };

const gameSettingsProxy = new Proxy(gameSettings, {
  get: (obj, property) => {
    return property in obj ? obj[property] : 'no property';
  },
  set: (obj, property, value) => {
    if (property === 'difficulty' && !['easy', 'medium', 'hard'].includes(value.toLowerCase())) {
      throw new Error('DIFFICULTY NOT FOUND');
    }
    obj[property] = value;
  },
});

const allGames = [
  { name: 'Game1', date: '2023-4-08' },
  { name: 'Game2', date: '2023-4-09' },
  // ... more game objects
];

function generateAllGamesDate(date) {
  if (typeof date !== 'string') {
    return null;
  }

  const dateFilter = game => game.date === date;
  return Array.from(allGames).filter(dateFilter).map(game => game.name);
}

const gamesOnDate = generateAllGamesDate(gameSettingsProxy.date);
console.log(gamesOnDate); // Output: ['Game1']



gameSettingsProxy.difficulty = 'easy';
gameSettingsProxy.score = 0;
gameSettingsProxy.creator = 'James';

// console.log(gameSettingsProxy.date);
console.log(gameSettingsProxy.difficulty);
console.log(gameSettings);