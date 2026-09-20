import {test, expect} from '@playwright/test'

test('Spice Jet Sign in and Login User', async ({page}) =>
{

    await page.goto("https://www.spicejet.com/");  // launching the url

    //windows Opening new window and creating new account

    const childwindow = page.waitForEvent("popup");

    await page.getByText("Signup", {exact:true}).click()
    const newWindow = await childwindow

    //Drop Down for Title
    const titleDropDown = newWindow.locator(".form-control.form-select").first()
    await titleDropDown.selectOption('Ms')

    // First Name
    await newWindow.locator("#first_name").fill("Ankita");
    await expect(newWindow.locator("#first_name")).toHaveValue("Ankita")

    //Last Name
    await newWindow.locator("#last_name").fill("Shetty");
    await expect(newWindow.locator("#last_name")).toHaveValue("Shetty")

    //Country Selection
    const countryDropdown = newWindow.locator(".form-control.form-select").last()
    await countryDropdown.selectOption("India")

    // Drop Down for Date of Birth
    const Date = "12/09/1996"
    await newWindow.locator("#dobDate").click();
    const monthBirthSelect = newWindow.locator(".react-datepicker__month-select")
    await monthBirthSelect.selectOption('December')  // Month

    const yearSelect = newWindow.locator(".react-datepicker__year-select")
    await yearSelect.selectOption('1996') // Year

    await newWindow.getByText("9", {exact: true}).click() // Date

    await expect(newWindow.locator("#dobDate")).toHaveValue(Date); // Assertion 

    await newWindow.getByPlaceholder("+91 01234 56789").fill("9012345678")
    await newWindow.locator("#email_id").fill("shettyankita199612@gmail.com")

    await newWindow.locator("#new-password").fill("Test@1234")
    await newWindow.locator("#c-password").fill("Test@1234")

    await newWindow.locator("[type='checkbox']").click()
    await newWindow.locator("button[class='btn btn-red']").click();
    await page.screenshot({path :"screenshot/accountfullpage.jpeg", fullPage : true})
    await newWindow.locator(".login-link-pad").click();
  

    // Login User
   await newWindow.getByRole("radio", {name: "Email Id"}).click()
    await newWindow.locator("input[type='email']").fill("akshayshetty68@gmail.com")
    await newWindow.locator("#password").fill("Test@1234")
    await newWindow.locator(".btn.btn-red.plr-50").click()
    await newWindow.screenshot({path :"screenshot/Spiceloginfullpage.jpeg", fullPage : true})
    await newWindow.waitForTimeout(2000)
})


