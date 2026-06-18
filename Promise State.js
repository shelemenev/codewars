/*As you know, a promise is in one of these states: pending, fulfilled, rejected.

Implement the async function getState that determines a state of a promise.

const p = Promise.resolve();
const state = await getState(p); // === "fulfilled"

const p = Promise.reject();
const state = await getState(p); // === "rejected"

const p = new Promise(() => {});
const state = await getState(p); // === "pending"*/

async function getState(promise) {
  
  const raceResult = await Promise.race([
    promise.then(() => 'fulfilled', () => 'rejected'),
    new Promise(resolve => setTimeout(() => resolve('pending'), 0))
  ])

  return raceResult
}

const p = new Promise(() => {})
const state = await getState(p)
console.log(state)
