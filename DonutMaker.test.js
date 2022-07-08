import DonutMaker from "w /DonutMaker";

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
        const underTest = new DonutMaker(100, 0, 0);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect(underTest.autoClickerCost).toEqual(110);
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClicker).toEqual(1);

    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
        const underTest = new DonutMaker(99, 0, 0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoClicker).toEqual(0);


    })

        // Next Auto Clicker Purchase	Cost
        // 1	100 donuts
        // 2	110 donuts
        // 3	121 donuts
        // 4	133 donuts

    test("should increase the cost of an autoclicker by 10%", () => {
        const underTest = new DonutMaker(100, 0, 0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.autoClickerCost).toEqual(110);
        expect(underTest.numAutoClicker).toEqual(1);
    })

    test("should increase the cost of a 2nd autoclicker by 10%", () => {
        const underTest = new DonutMaker(221, 0, 0);
        expect(underTest.autoClickerCost).toEqual(100);    
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(121);
        expect(underTest.autoClickerCost).toEqual(110);
        expect(underTest.numAutoClicker).toEqual(1);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(11);
        expect(underTest.autoClickerCost).toEqual(121);
        expect(underTest.numAutoClicker).toEqual(2);
       
    })

    
    test("should increase the cost of a 3rd autoclicker by 10%", () => {
        const underTest = new DonutMaker(331, 0, 0);
        expect(underTest.autoClickerCost).toEqual(100);    
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(231);
        expect(underTest.autoClickerCost).toEqual(110);
        expect(underTest.numAutoClicker).toEqual(1);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(121);
        expect(underTest.autoClickerCost).toEqual(121);
        expect(underTest.numAutoClicker).toEqual(2);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.autoClickerCost).toEqual(133);
        expect(underTest.numAutoClicker).toEqual(3);
       
    })

    test("when activating the autoClicker should add donuts based upon how many autoClickers owned", () => {
        const underTest = new DonutMaker(100, 0, 0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        underTest.activateAutoClickers();
        expect(underTest.numAutoClicker).toEqual(1);
        expect(underTest.numDonuts).toEqual(1);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(2);
             
    }) 

    test("when activating 2 autoClickers it should add donuts based upon how many autoClickers owned", () => {
        const underTest = new DonutMaker(210, 0, 0);
        underTest.addAutoclicker();
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        underTest.activateAutoClickers();
        expect(underTest.numAutoClicker).toEqual(2);
        expect(underTest.numDonuts).toEqual(2);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(4);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(6) ;
             
    }) 

    test("when activating 3 autoClickers it should add donuts based upon how many autoClickers owned", () => {
        const underTest = new DonutMaker(331, 0, 0);
        underTest.addAutoclicker();
        underTest.addAutoclicker();
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        underTest.activateAutoClickers();
        expect(underTest.numAutoClicker).toEqual(3);
        expect(underTest.numDonuts).toEqual(3);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(6);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(9) ;
             
    }) 

    test("should be able to purchase 1 donut multiplier and increase the multiplierCost", () => {
        const underTest = new DonutMaker(10, 0, 0);
        expect(underTest.numDonuts).toEqual(10);
        expect(underTest.multiplierCost).toEqual(10);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(0);
        underTest.activateMultipliers();
        expect(underTest.multiplierCost).toEqual(11);
        expect(underTest.numDonuts).toEqual(1.2);
        
    }) 

    
    test("should be able to purchase a 2nd donut multiplier and increase the multiplierCost", () => {
        const underTest = new DonutMaker(21, 0, 0);
        expect(underTest.numDonuts).toEqual(21);
        expect(underTest.multiplierCost).toEqual(10);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(11);
        expect(underTest.multiplierCost).toEqual(11);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.multiplierCost).toEqual(12);
        underTest.activateMultipliers();
        expect(underTest.numDonuts).toEqual(1.44);
       
    }) 

    test("should be able to purchase a 3rd donut multiplier and increase the multiplierCost", () => {
        const underTest = new DonutMaker(33, 0, 0);
        expect(underTest.numDonuts).toEqual(33);
        expect(underTest.multiplierCost).toEqual(10);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(23);
        expect(underTest.multiplierCost).toEqual(11);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(12);
        expect(underTest.multiplierCost).toEqual(12);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(0);
        underTest.activateMultipliers();
        expect(underTest.numDonuts).toEqual(1.7279999999999998);
    }) 
    
    
// Donut Multipliers Purchased	Donuts Earned per Click
// 1	1.2
// 2	1.44
// 3	1.728
// 4	2.0736


// Next Donut Multiplier Purchase	Cost
// 1	10 donuts
// 2	11 donuts
// 3	12.1 donuts
// 4	13.31 donuts

    test("bonus from active Multiplier should apply to the number of AutoClickers Owned", () => {
        const underTest = new DonutMaker(110, 0, 0);
        expect(underTest.numDonuts).toEqual(110);
        expect(underTest.numAutoClicker).toEqual(0);
        expect(underTest.multiplierCount).toEqual(0);
        underTest.addMultipler();
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClicker).toEqual(1);
        expect(underTest.multiplierCount).toEqual(1);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(1.2);


    }) 

    test("bonus from active Multiplier should apply to the number of AutoClickers Owned", () => {
        const underTest = new DonutMaker(231, 0, 0);
        expect(underTest.numDonuts).toEqual(231);
        expect(underTest.numAutoClicker).toEqual(0);
        expect(underTest.multiplierCount).toEqual(0);
        underTest.addMultipler();
        underTest.addAutoclicker();
        underTest.addMultipler();
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClicker).toEqual(2);
        expect(underTest.multiplierCount).toEqual(2);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(2.88);


    }) 


// test("should be able inrease the numDonuts with 1 activeAutoClicker and 1 activeMultiplier", () => {
//     const underTest = new DonutMaker(110, 0, 0);
//     expect(underTest.numDonuts).toEqual(110);
//     expect(underTest.multiplierCost).toEqual(10);
//     underTest.addMultipler();
//     expect(underTest.multiplierCount).toEqual(1);
//     expect(underTest.numDonuts).toEqual(100);
//     expect(underTest.autoClickerCost).toEqual(100);
//     underTest.addAutoclicker();
//     expect(underTest.numAutoClicker).toEqual(1);
//     expect(underTest.numDonuts).toEqual(0);
//     underTest.combinedAutoClickerAndMultiplier();
//     expect(underTest.numDonuts).toEqual(11);
   
// }) 

})