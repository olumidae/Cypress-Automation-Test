context("Login", () => {
  describe("Visit PFS webmail", () => {
    // beforeEach(() => {
    //   cy.visit("http://webmail.thepfs.biz/");
    //   cy.viewport(1440, 900);
    // });

    it("Should login a user successfully", () => {
      cy.visit("http://webmail.thepfs.biz/");
      cy.viewport(1440, 900);
      cy.get("input#user").type("olumide.omitiran@thepfs.biz");
      cy.get("input#pass").type("*********{enter}");
      cy.wait(4000);
      cy.get("input#launchActiveButton").click();
      cy.wait(3000);
    });
    
  });
});
