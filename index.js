const donutMaker = new DonutMaker();

const aboutUs = document.querySelector(".about-us");
const dev = document.querySelector(".dev");
const resetButton = document.querySelector(".reset");


const numDonuts = document.querySelector(".donut-count");
const donutButton = document.querySelector(".make-donut");
const donutValue = document.querySelector(".donut-value");

const numAutoClicker = document.querySelector(".autoClicker-count");
const buyAutoClickerButton = document.querySelector(".autoClicker-btn");
const autoClickerCost = document.querySelector(".autoClicker-cost");

const multiplierCount = document.querySelector(".multiplier-count");
const buyMultiplierButton = document.querySelector(".multiplier-button");
const multiplierCost = document.querySelector(".multiplier-cost");

const about = () => {
  if (aboutUs.style.display === "block") {
    aboutUs.style.display = "none"
  } else {
    aboutUs.style.display = "block"
  }
}

const showDev = () => {
  if (dev.style.display === "block") {
    dev.style.display = "none"
  } else {
    dev.style.display = "block"
  }
}

const reset = resetButton => {
  resetButton.addEventListener("click", () => {
    location.reload();
  })
}

const updateNumDonuts = (numDonuts, donutMaker) => {
  numDonuts.textContent = Math.round(donutMaker.getNumDonuts());
}

const updateAutoClickerCount = (numAutoClicker, donutMaker) => {
  numAutoClicker.textContent = Math.round(donutMaker.getAutoClicker());
}

const updateAutoClickerCost = (autoClickerCost, donutMaker) => {
  autoClickerCost.textContent = Math.round(donutMaker.getAutoClickerCost());
}

const updateMultiplierCount = (multiplierCount, donutMaker) => {
  multiplierCount.textContent = Math.round(donutMaker.getMultiplierCount());
}

const updateMultiplierCost = (multiplierCost, donutMaker) => {
  multiplierCost.textContent = Math.round(donutMaker.getMultiplierCost());
}

const updateDonutValue = (donutValue, donutMaker) => {
  donutValue.textContent = donutMaker.getNumDonuts().toFixed(1);
}

const autoClicker = setInterval(autoClick, 1000);

function autoClick() {
  updateNumDonuts(numDonuts, donutMaker);
  donutMaker.makeAutoClickerWork();
  enableAutoClickerButton();
  enableMultiplierButton();
}

const makeDonutsButton = (donutButton, numDonuts, donutMaker) => {
  donutButton.addEventListener("click", () => {
    donutMaker. addDonut();
    updateDonutCount(numDonuts, donutMaker);
  })
}

const makeBuyAutoClickerButton = (numAutoClicker, buyAutoClickerButton, autoClickerCost, donutMaker) => {
  buyAutoClickerButton.addEventListener("click", () => {
    donutMaker.addAutoClicker();
    updateAutoClickerCount(numAutoClicker, donutMaker);
    updateAutoClickerCost(autoClickerCost, donutMaker);
  })
}

const makeBuyMultiplierButton = (multiplierCount, buyMultiplierButton, multiplierCost,
  donutMaker) => {
  buyMultiplierButton.addEventListener("click", () => {
    donutMaker.addMultiplier();
    updateMultiplierCount(multiplierCount, donutMaker);
    updateMultiplierCost(multiplierCost, donutMaker);
    updateDonutValue(donutValue, donutMaker);
  })
}

function enableAutoClickerButton() {
  if (donutMaker.donutClick >= donutMaker.autoClickerCost) {
    buyAutoClickerButton.removeAttribute("disabled")
  } else {
    acBtn.disabled = true
  }
}

function enableMultiplierButton() {
  if (donutMaker.donutClick >= donutMaker.multiplierCost) {
    buyMultiplierButton.removeAttribute("disabled")
  } else {
    buyMultiplierButton.disabled = true
  }
}

makeDonutsButton(donutButton, numDonuts, donutMaker);

makeBuyAutoClickerButton(numAutoClicker, buyAutoClickerButton, autoClickerCost, donutMaker);

makeBuyMultiplierButton(multiplierCount, buyMultiplierButton, multiplierCost, donutMaker);

updateDonutValue(donutValue, donutMaker);

reset(resetButton);