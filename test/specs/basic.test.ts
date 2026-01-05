describe("Native App Test", () => {
  it("should open the app", async () => {
    const element = await $("//android.view.View[@content-desc='Inicio']");
    await element.waitForDisplayed({ timeout: 5000 });
  });
});