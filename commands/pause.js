const Command = require("../structures/command.js");

module.exports = new Command({
	name: "pause",
	aliases: [],
	description: "Pauses the queue",
	permission: "SEND_MESSAGES",
	async run(message, args, client, slash) {
        const queue = client.player.getQueue(message.guild);
        if (!queue || !queue.playing) return;
        const paused = queue.setPaused(true);
		if(paused)
			slash ? message.reply({embeds: [{ description: `⏸️ Track paused.`, color: 0x36393e }]}) : message.react('⏸️');
	}
});