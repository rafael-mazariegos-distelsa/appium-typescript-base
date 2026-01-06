describe("Native App Test", () => {
  it("should open the app", async () => {
    const element = await $("//android.widget.TextView[@text='Continuar']");
    await element.waitForDisplayed({ timeout: 5000 });
  });
});