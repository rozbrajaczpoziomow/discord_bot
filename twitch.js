const fetch = require('node-fetch');
const { twitch } = require('./.config.json');

module.exports = async main => {
	return new Promise( async ( res, rej ) => {
		const resp = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${twitch.id}&client_secret=${twitch.secret}&grant_type=client_credentials`, { method: 'POST' });
		const json = await resp.json();
		const token = json.access_token;
		res(
			setInterval(async () => {
				const stream = await fetch('https://api.twitch.tv/helix/streams?user_login=saltaxatlas&first=1', { headers: { 'Client-Id': twitch.id, Authorization: `Bearer ${token}` } });
				const stream_json = await stream.json();
				// console.log(stream, stream_json)
				const is_streaming = Object.keys(stream_json.data).length !== 0;
				let name = stream_json.data[0]?.user_name;
				main.exports.twitch(is_streaming);
			}, twitch.interval)
		)
	});
};