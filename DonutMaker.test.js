import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {

    test("should be able to add a donut and retrieve the total count", () => {
        //Arrange
        const underTest = new DonutMaker(0);
        //Act
        underTest.addDonut();
        //Assert
        expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoClicker with 100 donuts", () => {
        //Arrange
        const underTest = new DonutMaker(100, 1);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClicker).toEqual(1);

    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
        const underTest = new DonutMaker(99, 0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoClicker).toEqual(0);


    })

    test("should increase the cost of an autoclicker by 10%", () => {
        const underTest = new DonutMaker(100, 0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.autoClickerCost).toBe(110);
    })

    test("when activating the autoClicker should add donuts based upon how many autoClickers owned", () => {
        const underTest = new DonutMaker(100, 0);
        expect(underTest.numDonuts).toEqual(100);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        underTest.activateAutoClickerss();
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1);
             
    }) 

    test("when activating the autoClicker should add donuts based upon how many autoClickers owned", () => {
        const underTest = new DonutMaker(500, 2, 0);
        expect(underTest.numDonuts).toEqual(500);
        underTest.addAutoclicker();
        underTest.addAutoclicker();
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(169);
        underTest.activateAutoClickerss();
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(170);
             
    }) 


    test("should be able to purchase a donut multiplier and increase the multiplierCost", () => {
        const underTest = new DonutMaker(10, 0, 0);
        expect(underTest.numDonuts).toEqual(10);
        underTest.addMultipler();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.multiplierCost).toEqual(11);
        expect(underTest.multiplierCount).toEqual(1.2);
        
    }) 

    
    test("should be able to purchase a second donut multiplier and increase the multiplierCost", () => {
        const underTest = new DonutMaker(20, 0, 1);
        expect(underTest.numDonuts).toEqual(20);
        underTest.addMultipler();
        expect(underTest.numDonuts).toEqual(10);
        expect(underTest.multiplierCost).toEqual(11);
        expect(underTest.multiplierCount).toEqual(1.44);
       
    }) 

    
    test("donut multiplier should increase the value of a click by 1.2", () => {
        const underTest = new DonutMaker(10, 0, 0);
        expect(underTest.numDonuts).toEqual(10);
        underTest.addMultipler();
        underTest.activateMultipliers();
        underTest.addMultipler();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.multiplierCount).toEqual(1.2);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1.2);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(2.4);
        
    }) 

    test ("should activate autoClicker and return true", () => {
        const underTest = new DonutMaker(10, 0, 0);
        underTest.activateAutoClickerss();
        expect(underTest.activeClicker).toEqual(true);
    })


})