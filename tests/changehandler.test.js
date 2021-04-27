let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  test('Tests for ChangeHandler', function() {
    //Arrage
    let changehandler = new ChangeHandler(200)
    // Act
// changehandler.insertCoin('penny') - example of act
    // Assert
    expect(changehandler.amountDue).toBe(200);
    expect(changehandler.cashTendered).toBe(0);
  });
});