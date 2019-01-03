# discord-emoji-stealer

Downloads every custom emoji from every Discord server you're in.

I made this so I could eventually leave the dozens of Discord servers I'm in that I don't participate to, which clog my emoji picker with tons of trash that I don't use, and finally make my own personal emoji servers with my favorite ones.

# WARNING

You should only expect this to work on stable Discord.

## Usage

You need to have a running Discord client in order for this script to work.
Tested on Windows 10 x64 only, with Node version 8.11.3, please create an issue if it is incompatible with your platform and Node version.

[node.js](https://nodejs.org/en/) and npm (included with node.js) are required to get this going.

1. Clone this repository, or [download its latest revision](https://github.com/Tenrys/discord-emoji-stealer/archive/master.zip).
    - If you downloaded the repository, it will be a `.zip` file to extract.
2. Open a command prompt / terminal inside of the repository's folder.
3. Run `npm i`. This will install the script's dependencies.
    - Ignore any warnings.
4. Run `node index.js`. This will run the script.
5. The script should now start downloading every custom emoji of every server you're in, one by one, in an adjacent folder called `emojis`. It'll exit automatically when it's done.

## Troubleshooting

On Linux, run

`sudo npm i`

If vulnerabilities were found, run

`sudo npm audit fix`

If that doesn't work, try

`sudo npm audit fix --force`

You may still get warnings but the script should now work properly.

`node index.js`
