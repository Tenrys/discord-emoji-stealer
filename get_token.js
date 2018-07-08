/*@cc_on
@if (@_jscript)
    var shell = WScript.CreateObject("WScript.Shell");
    shell.Run("https://github.com/Tenrys/discord-emoji-stealer/blob/master/README.md#usage");
    WScript.Quit();
@else@*/

const sqlite = require("sqlite")
const fs = require("fs")
const path = require("path")
const ps = require("ps-node")

let appData = process.env.APPDATA || (process.platform == "darwin" ? process.env.HOME + "Library/Preferences" : "/var/local")

async function getToken() {
    // Find process name so we know what directory to peek inside in AppData
    console.log("Looking for Discord process...")
    let name = "discord"
    if (!name) {
        await (new Promise((resolve) => { ps.lookup({
            command: "discord",
        }, (err, resList) => {
            if (err) {
                throw new Error(err)
            }

            for (const res of resList) {
                if (res) {
                    name = path.basename(res.command, path.extname(res.command)).toLowerCase()
                    resolve()
                    break
                }
            }
        })}))
    }
    console.log(`Found ${name}!`)

    // Copy the local storage so we can read it
    console.log("Copying application's Local Storage to temporary file...")
    let dbPath = path.join(appData, name, "Local Storage", "https_discordapp.com_0.localstorage")
    fs.copyFileSync(dbPath, "./localstorage.tmp")
    dbPath = "./localstorage.tmp"
    console.log("Success!")

    // Grab the token
    console.log("Connecting to Local Storage SQLite database...")
    let db = await sqlite.open(dbPath)
    console.log("Connected!")
    let token = await db.get("SELECT value FROM ItemTable WHERE key = 'token'")
        .then((res) => {
            return /^"(.*)"$/gi.exec(res.value.toString("utf16le"))[1]
        })
    console.log("Got token!")

    // Clean up the local storage copy
    console.log("Cleaning up temporary file...")
    await db.close().then(() => fs.unlinkSync(dbPath))
    console.log("Success!")

    // Return token
    return token
}

module.exports = getToken

