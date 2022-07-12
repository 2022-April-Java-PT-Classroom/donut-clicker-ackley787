import DonutMaker from "./DonutMaker";

// queryselectors

const aboutUs = document.querySelector(".about-us");
const dev = document.querySelector(".dev");
const resetButton = document.querySelector(".reset");

const numDonuts = document.querySelector(".donut-count");
const donutButton = document.querySelector(".make-donut");
const donutValue = document.querySelector(".donut-value");

const numAutoClicker = document.querySelector(".autoClicker-count");
const buyAutoClickerButton = document.querySelector(".autoClicker-button");
const autoClickerCost = document.querySelector(".autoClicker-cost");

const multiplierCount = document.querySelector(".multiplier-count");
const buyMultiplierButton = document.querySelector(".multiplier-button");
const multiplierCost = document.querySelector(".multiplier-cost");

const DonutMaker = new DonutMaker(numDonuts, numAutoClicker, multiplierCount);

const reset = resetButton => {
    resetButton.addEventListener("click", () => {
    location.reload();
  })
}

const updateNumDonuts = (numDonuts, DonutMaker) => {
    numDonuts.innerHTML = Math.round(DonutMaker.getNumDonuts());
}

const updateAutoClickerCount = (numAutoClicker, DonutMaker) => {
    numAutoClicker.innerHTML = Math.round(DonutMaker.getAutoClicker());
}

const updateAutoClickerCost = (autoClickerCost, DonutMaker) => {
    autoClickerCost.innerHTML = Math.round(DonutMaker.getAutoClickerCost());
}

const updateMultiplierCount = (multiplierCount, DonutMaker) => {
    multiplierCount.innerHTML = Math.round(DonutMaker.getMultiplierCount());
}

const updateMultiplierCost = (multiplierCost, DonutMaker) => {
    multiplierCost.innerHTML = Math.round(DonutMaker.getMultiplierCost());
}

const autoClicker = setInterval(autoClick, 1000);

function autoClick() {
    updateNumDonuts(numDonuts, DonutMaker);
    DonutMaker.makeAutoClickerWork();
    enableAutoClickerButton();
    enableMultiplierButton();
}

const makeDonutsButton = (donutButton, numDonuts, DonutMaker) => {
    donutButton.addEventListener("click", () => {
    DonutMaker.addDonut();
    updateNumDonuts(numDonuts, DonutMaker);

  })
}

const makeBuyAutoClickerButton = (numAutoClicker, buyAutoClickerButton, autoClickerCost, DonutMaker) => {
    buyAutoClickerButton.addEventListener("click", () => {
    DonutMaker.addAutoClicker();
    updateAutoClickerCount(numAutoClicker, DonutMaker);
    updateAutoClickerCost(autoClickerCost, DonutMaker);
  })
}

const makeBuyMultiplierButton = (multiplierCount, buyMultiplierButton, multiplierCost,
    DonutMaker) => {
    buyMultiplierButton.addEventListener("click", () => {
    DonutMaker.addMultiplier();
    updateMultiplierCount(multiplierCount, DonutMaker);
    updateMultiplierCost(multiplierCost, DonutMaker);
    updateNumDonuts(donutValue, DonutMaker);
    
  })
}

function enableAutoClickerButton() {
  if (DonutMaker.numDonuts >= DonutMaker.autoClickerCost) {
    buyAutoClickerButton.removeAttribute("disabled")
  } else {
    buyAutoClickerButton.disabled = true
  }
}

function enableMultiplierButton() {
  if (DonutMaker.numDonuts >= DonutMaker.multiplierCost) {
    buyMultiplierButton.removeAttribute("disabled")
  } else {
    buyMultiplierButton.disabled = true
  }
}

makeDonutsButton(donutButton, numDonuts, DonutMaker);

makeBuyAutoClickerButton(numAutoClicker, buyAutoClickerButton, autoClickerCost, DonutMaker);

makeBuyMultiplierButton(multiplierCount, buyMultiplierButton, multiplierCost, DonutMaker);

updateNumDonuts(numDonuts, DonutMaker);

reset(resetButton);