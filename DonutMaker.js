class DonutMaker{

    constructor(numDonuts, numAutoClicker, multiplierCount) {
  
        this.numDonuts = numDonuts;
        this.numAutoClicker = 0;
        this.multiplierCount = 0;
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

    getMultiplierCount() {

        return this.multiplierCount;
    }

    getMultiplierCost() {
        
        return this.multiplierCost;
    }

    addDonut() {

            this.numDonuts += 1;
        }
    
    addAutoclicker() {
   
         if (this.numDonuts >= this.autoClickerCost) {
            this.numDonuts -= this.autoClickerCost;
            this.numAutoClicker += 1;
            this.increaseAutoClickerCost();
            }
        }

    increaseAutoClickerCost() {
        this.autoClickerCost = Math.round(this.autoClickerCost * 1.1)
   
    }
    addMultiplier() {
      
        if (this.numDonuts >= this.multiplierCost) {
            this.numDonuts -= this.multiplierCost;
            this.multiplierCount += 1;
            this.increaseMultiplierCost();
            
            }
        }

    increaseMultiplierCost() { 

        this.multiplierCost = Math.round(this.multiplierCost * 1.1) 

        } 

    activateAutoClickers() {

        if (this.multiplierCount >= 0) {

            this.numDonuts += ((this.numAutoClicker * 1) * Math.pow(1.2, this.multiplierCount));
            
        } else { 
            
            this.numDonuts += (this.numAutoClicker * 1); 
        
        }
    }
    
    activateMultipliers() {

        this.numDonuts += Math.pow(1.2, this.multiplierCount);
           
        }
    
    // combinedAutoClickerAndMultiplier() {
        
    //     this.activateAutoClickers();
    //     this.activateMultipliers();    

    // }
}

export default DonutMaker;
