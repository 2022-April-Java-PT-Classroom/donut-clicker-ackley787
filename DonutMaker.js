class DonutMaker{

    constructor(numDonuts, numAutoClicker, multiplierCount) {
  
        this.numDonuts = numDonuts;
        this.numAutoClicker = numAutoClicker;
        this.multiplierCount = multiplierCount;
        this.autoClickerCost = 100;
        this.multiplierCost = 10;
        this.activeClicker = false;
        this.activeMultiplier = false;
    }
    
    getNumDonuts() {

        return this.numDonuts;
    }

    getAutoClicker() {

        return this.numAutoClicker;
    }

    getMultiplerCount() {

        return this.multiplierCount;
    }

    addDonut() {

        if ((this.multiplierCount > 0) && (this.numAutoClicker > 0)) {
            this.numDonuts += ((this.numAutoClicker * this.multiplierCount) 
            + this.multiplierCount);

        } else if (this.numAutoClicker > 0) {
            this.numDonuts += (this.numAutoClicker * 1);

        } else if (this.multiplierCount > 0) {
            this.numDonuts += (this.multiplierCount * 1);

        } else {
            this.numDonuts += 1;
        }
    
        }

    addAutoclicker() {
        // let currentAutoClickerCost = (this.autoClickerCost *(this.numAutoClicker + 1));
        
         if (this.numDonuts >= this.autoClickerCost) {
            this.numDonuts -= this.autoClickerCost;
            this.numAutoClicker += 1;
            this.increaseAutoClickerCost();
            }
        }


    increaseAutoClickerCost() {
       
        for (let i = 0; i =  this.numAutoClicker; i++) {
            this.autoClickerCost += (this.autoClickerCost * 1.1)
       }
    }
    addMultipler() {
      
        if (this.numDonuts >= this.multiplierCost) {
            this.numDonuts -= this.multiplierCost;
            this.multiplierCount += 1;
            this.multiplierCount = (Math.pow(1.2, this.multiplierCount));
            
            }
        }

    increaseMultiplierCost() { 

        this.multiplierCost = (Math.round(this.multiplierCost * 1.1)); 

        } 

    activateAutoClickers() {

            this.activeClicker = true;  
        }
    
    activateMultipliers() {

            this.activeMultiplier = true;
        }
    

      
}

export default DonutMaker;
