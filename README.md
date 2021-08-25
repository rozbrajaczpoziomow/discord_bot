# discord_bot
This is a poorly written Discord bot for a streaming community server!

## TODO:
-	[X] Move to Discord.js v13
-	[X] Slash Commands
-	[X] Add Poll Command (Vote With Reactions)
-	[ ] Auto Post $going-live
-	[X] Add More Timezone / Language Support
-	[ ] Message Members on Joining Server
-	[X] Fix /server-info, Add More Info to Command
-	[X] Add /invite Command
-	[X] Add /rules Command
-	[X] Assign Roles Based on Buttons

## Use Instructions:
1. Install Dependencies
	- Run `npm i`
2. Replace Bot Token
	- Place your bot token in `.config.json` as `{ "token": "token_goes_here" }`
3. Adjust Stream Schedule
	- Adjust the values in /commands/schedule.js to match your stream times
4. Adjust Discord Roles
	- Adjust role names to match the roles of your server