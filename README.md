# discord_bot
This is a poorly written Discord bot for a streaming community server!

## TODO:
-	[X] Slash Commands
-	[ ] Add Poll Command (Vote With Reactions)
-	[ ] Auto Post $going-live
-	[X] Add More Timezone / Language Support
-	[X] Message Members on Joining Server
-	[X] Fix $server-info, Add More Info to Command
-	[X] Add $invite Command
-	[X] Add $rules Command
-	[ ] Add Optional Parameters to $help, Print In-Depth Descriptions for each Command
-	[X] Assign Roles Base on Reactions

## Use Instructions:
1. Install Dependencies
	- Run `npm i`
2. Replace Bot Token
	- Place your bot token in `.config.json` as `{ "token": "token_goes_here" }`
3. Adjust Stream Schedule
	- Adjust the values in /commands/schedule.js to match your stream times
4. Adjust Discord Roles
	- Adjust role names to match the roles of your server