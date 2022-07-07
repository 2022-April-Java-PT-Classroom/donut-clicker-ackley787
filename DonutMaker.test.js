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
        const underTest = new DonutMaker(100, 0, 0);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect(underTest.autoClickerCost).toEqual(100);
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClicker).toEqual(1);

    });

    // test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
    //     const underTest = new DonutMaker(99, 0);
    //     underTest.addAutoclicker();
    //     expect(underTest.numDonuts).toEqual(99);
    //     expect(underTest.numAutoClicker).toEqual(0);


    // })

        // Next Auto Clicker Purchase	Cost
        // 1	100 donuts
        // 2	110 donuts
        // 3	121 donuts
        // 4	133 donuts

    // test("should increase the cost of an autoclicker by 10%", () => {
    //     const underTest = new DonutMaker(100, 0, 0);
    //     underTest.addAutoclicker();
    //     expect(underTest.numDonuts).toEqual(0);
    //     expect(underTest.autoClickerCost).toEqual(110);
    //     expect(underTest.numAutoClicker).toEqual(1);
    // })

    // test("should increase the cost of a 2nd autoclicker by 10%", () => {
    //     const underTest = new DonutMaker(121, 2, 0);
    //     expect(underTest.autoClickerCost).toEqual(100);
    //     underTest.addAutoclicker();
    //     expect(underTest.numDonuts).toEqual(21);
    //     expect(underTest.autoClickerCost).toEqual(110);
    //     underTest.addAutoclicker();
    //     underTest.addAutoclicker();
    //     expect(underTest.numAutoClicker).toEqual(3);
    //     expect(underTest.autoClickerCost).toEqual(121);
    // })

    // test("when activating the autoClicker should add donuts based upon how many autoClickers owned", () => {
    //     const underTest = new DonutMaker(100, 0);
    //     expect(underTest.numDonuts).toEqual(100);
    //     underTest.addAutoclicker();
    //     expect(underTest.numDonuts).toEqual(0);
    //     underTest.activateAutoClickers();
    //     underTest.addDonut();
    //     expect(underTest.numDonuts).toEqual(1);
             
    // }) 

    // test("when activating the autoClicker should add donuts based upon how many autoClickers owned", () => {
    //     const underTest = new DonutMaker(500, 2, 0);
    //     expect(underTest.numDonuts).toEqual(500);
    //     underTest.addAutoclicker();
    //     underTest.addAutoclicker();
    //     underTest.addAutoclicker();
    //     expect(underTest.numDonuts).toEqual(169);
    //     underTest.activateAutoClickers();
    //     underTest.addDonut();
    //     expect(underTest.numDonuts).toEqual(171);
             
    // }) 

    

    
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

    // test("should be able to purchase a donut multiplier and increase the multiplierCost", () => {
    //     const underTest = new DonutMaker(10, 0, 0);
    //     expect(underTest.numDonuts).toEqual(10);
    //     underTest.addMultipler();
    //     expect(underTest.numDonuts).toEqual(0);
    //     expect(underTest.multiplierCost).toEqual(11);
    //     expect(underTest.multiplierCount).toEqual(1.2);
        
    // }) 

    
    // test("should be able to purchase a second donut multiplier and increase the multiplierCost", () => {
    //     const underTest = new DonutMaker(20, 0, 1);
    //     expect(underTest.numDonuts).toEqual(20);
    //     underTest.addMultipler();
    //     expect(underTest.numDonuts).toEqual(10);
    //     expect(underTest.multiplierCost).toEqual(11);
    //     expect(underTest.multiplierCount).toEqual(1.44);
       
    // }) 
    

    
    // test("donut multiplier should increase the value of a click by 1.2", () => {
    //     const underTest = new DonutMaker(10, 0, 0);
    //     expect(underTest.numDonuts).toEqual(10);
    //     underTest.addMultipler();
    //     underTest.activateMultipliers();
    //     underTest.addMultipler();
    //     expect(underTest.numDonuts).toEqual(0);
    //     expect(underTest.multiplierCount).toEqual(1.2);
    //     underTest.addDonut();
    //     expect(underTest.numDonuts).toEqual(1.2);
    //     underTest.addDonut();
    //     expect(underTest.numDonuts).toEqual(2.4);
        
    // }) 

    // test ("should activate autoClicker and return true", () => {
    //     const underTest = new DonutMaker(10, 0, 0);
    //     underTest.activateAutoClickers();
    //     expect(underTest.activeClicker).toEqual(true);
    // })

    // test("increase click value by 1.2 with a donut multiplier", () => {
    //     const underTest = new DonutMaker(10, 0, 1);
    //     underTest.addDonut();
    //     expect(underTest.numDonuts).toEqual(11.2);
    // });

    // test("increase click value by 1.44 with a second donut multiplier", () => {
    //     const underTest = new DonutMaker(10, 0, 2);
    //     underTest.addDonut();
    //     expect(underTest.numDonuts).toEqual(11.44);
    // });


})