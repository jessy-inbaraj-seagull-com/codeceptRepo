import path from "path";
import * as fs from "fs";
import {exec} from "child_process";
import installer from "../pages/installer.page";
import installerPage from "../pages/installer.page";

const {I} = inject();

Given(/^The user has installed a driver on the system$/, function () {
    const exeName = "Zebra_2024.3.exe";
    const downloadsPath = path.join(process.env.USERPROFILE || "", "Downloads", exeName);

    if (!fs.existsSync(downloadsPath)) {
        console.log(`The file ${exeName} does not exist in: ${downloadsPath}`);
        return;
    }

    console.log("Opening file...");
    exec(`"${downloadsPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error Trying open the file: ${error.message}`);
            return;
        }
        console.log(stdout);
    });
    I.wait(3);
    I.pressKey(["Alt","a"]);
    I.click(installerPage.nextButton);
    I.click(installerPage.nextButton);
    I.click(installerPage.finishButton);
    I.click(installerPage.nextButton);
    /* I.click("//Button[@Name='Next >']")
    I.click("//Button[@Name='Next >']")
    I.click("//Button[@Name='Finish']")
    I.click("//Button[@Name='Next >']")*/
   // I.click("//RadioButton[@Name='I accept the terms in the license agreement']");
});