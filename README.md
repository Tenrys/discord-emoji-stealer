# discord-emoji-stealer

Downloads every custom emoji from every Discord server you're in.

## Usage

1. Install node.js
2. Clone the repository
3. Run `node index.js token` in the cloned repository's folder.
    - `token` is your account's token, used in order to log in to your account and know what servers you're on, as well as the URLs to their emojis.
    - You can get your token by pressing `Ctrl+Shift+I` in your Discord client, going to the `Application` tab, then `Local Storage`, `https://discordapp.com`.
    From there, just copy the `token` field, and paste it in the command.
4. The script should now start downloading every custom emoji of every server you're in, one by one, in an adjacent folder called `emojis`. It'll exit automatically when it's done.

## [Donate](https://paypal.me/Tenrys)

If you found this useful, don't hesitate to give me a tip! I really appreciate it.
