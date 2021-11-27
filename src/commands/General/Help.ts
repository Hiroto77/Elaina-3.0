import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from "@adiwajshing/baileys";
export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help",
			description:
				"Displays the help menu or shows the info of the command provided",
			category: "general",
			usage: `${client.config.prefix}help (command_name)`,
			aliases: ["h"],
			baseXp: 30,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		parsedArgs: IParsedArgs
	): Promise<void> => {
		const n = ["./assets/videos/Chitoge/chitoge.mp4"];
		const chitoge = n[Math.floor(Math.random() * n.length)];
		if (!parsedArgs.joined) {
			const commands = this.handler.commands.keys();
			const categories: { [key: string]: ICommand[] } = {};
			for (const command of commands) {
				const info = this.handler.commands.get(command);
				if (!command) continue;
				if (!info?.config?.category || info.config.category === "dev") continue;
				if (Object.keys(categories).includes(info.config.category))
					categories[info.config.category].push(info);
				else {
					categories[info.config.category] = [];
					categories[info.config.category].push(info);
				}
			}
			let text = `*Hello👋@${M.sender.username}*.I'm ${
                this.client.user.notify || this.client.user.vname || this.client.user.name || this.client.config.name
            },a bot to make_your_Work_easy                       \n\n`
            const keys = 
🄰🄽🄸🄼🄴 〽
- ${this.client.config.prefix}𝙖𝙣𝙞𝙢𝙚𝙦𝙪𝙤𝙩𝙚 
- ${this.client.config.prefix}𝙖𝙣𝙞𝙢𝙚𝙘𝙝𝙖𝙧 
- ${this.client.config.prefix}𝙝𝙪𝙨𝙗𝙖𝙣𝙙𝙤 
- ${this.client.config.prefix}𝙡𝙤𝙡𝙞 
- ${this.client.config.prefix}𝙣𝙚𝙠𝙤 
- ${this.client.config.prefix}𝙬𝙖𝙞𝙛𝙪
🄼🄴🄳🄸🄰 〽
- ${this.client.config.prefix}𝙥𝙡𝙖𝙮 
- ${this.client.config.prefix}𝙨𝙥𝙤𝙩𝙞𝙛𝙮 
- ${this.client.config.prefix}𝙮𝙩𝙖𝙪𝙙𝙞𝙤 
- ${this.client.config.prefix}𝙮𝙩𝙨𝙚𝙖𝙧𝙘𝙝 
- ${this.client.config.prefix}𝙮𝙩𝙫𝙞𝙙𝙚𝙤 
- ${this.client.config.prefix}𝙜𝙤𝙤𝙜𝙡𝙚 
- ${this.client.config.prefix}𝙡𝙮𝙧𝙞𝙘𝙨
🄵🅄🄽 〽
- ${this.client.config.prefix}𝙗𝙤𝙣𝙠 
- ${this.client.config.prefix}𝙘𝙝𝙚𝙨𝙨 
- ${this.client.config.prefix}𝙧𝙚𝙖𝙘𝙩 
- ${this.client.config.prefix}𝙩𝙧𝙞𝙜𝙜𝙚𝙧 
- ${this.client.config.prefix}𝙘𝙝𝙖𝙩 
- ${this.client.config.prefix}𝙛𝙖𝙘𝙩 
- ${this.client.config.prefix}𝙧𝙥𝙖𝙥𝙚𝙧 
- ${this.client.config.prefix}𝙨𝙖𝙛𝙚𝙟𝙤𝙠𝙚 
- ${this.client.config.prefix}𝙨𝙝𝙞𝙥
🄶🄴🄽🄴🅁🄰🄻 〽
- ${this.client.config.prefix}𝙖𝙙𝙢𝙞𝙣𝙨 
- ${this.client.config.prefix}𝙚𝙫𝙚𝙧𝙮𝙤𝙣𝙚 
- ${this.client.config.prefix}𝙝𝙚𝙡𝙥 
- ${this.client.config.prefix}𝙢𝙤𝙙𝙨 
- ${this.client.config.prefix}𝙥𝙧𝙤𝙛𝙞𝙡𝙚 
- ${this.client.config.prefix}𝙍𝙖𝙣𝙠
- ${this.client.config.prefix}𝙞𝙣𝙫𝙞𝙩𝙚𝙡𝙞𝙣𝙠 
- ${this.client.config.prefix}𝙨𝙘𝙧𝙚𝙚𝙣𝙨𝙝𝙤𝙩 
- ${this.client.config.prefix}𝙙𝙚𝙡𝙚𝙩𝙚
🄼🄸🅂🄲 〽
- ${this.client.config.prefix}𝙧𝙚𝙩𝙧𝙞𝙚𝙫𝙚 
- ${this.client.config.prefix}𝙝𝙞 
- ${this.client.config.prefix}𝙮𝙖𝙩𝙤𝙧𝙞
🄼🄾🄳🄴🅁🄰🅃🄸🄾🄽 〽
- ${this.client.config.prefix}𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚 
- ${this.client.config.prefix}𝙙𝙚𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚 
- ${this.client.config.prefix}𝙙𝙚𝙢𝙤𝙩𝙚 
- ${this.client.config.prefix}𝙥𝙧𝙤𝙢𝙤𝙩𝙚 
- ${this.client.config.prefix}𝙥𝙪𝙧𝙜𝙚 
- ${this.client.config.prefix}𝙧𝙚𝙢𝙤𝙫𝙚 
- ${this.client.config.prefix}𝙘𝙡𝙤𝙨𝙚 
- ${this.client.config.prefix}𝙤𝙥𝙚𝙣 
- ${this.client.config.prefix}𝙧𝙚𝙫𝙤𝙠𝙚
🅄🅃🄸🄻🅂 〽
- ${this.client.config.prefix}𝙗𝙡𝙪𝙧 
- ${this.client.config.prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧 
- ${this.client.config.prefix}𝙨𝙪𝙗𝙧𝙚𝙙 
- ${this.client.config.prefix}𝙨𝙩𝙚𝙖𝙡
🄴🄳🅄🄲🄰🅃🄸🅅🄴 〽
- ${this.client.config.prefix}𝙘𝙤𝙫𝙞𝙙 
- ${this.client.config.prefix}𝙙𝙚𝙛𝙞𝙣𝙚 
- ${this.client.config.prefix}𝙜𝙞𝙩𝙝𝙪𝙗 
🍁 𝙉𝙤𝙩𝙚: 𝙐𝙨𝙚 !𝙝𝙚𝙡𝙥 <𝙘𝙤𝙢𝙢𝙖𝙣𝙙_𝙣𝙖𝙢𝙚> 𝙩𝙤 𝙫𝙞𝙚𝙬 𝙩𝙝𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 𝙞𝙣𝙛𝙤.` }

              ♾️ Elaina ♾️

           🎗 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
		const key = parsedArgs.joined.toLowerCase();
		const command =
			this.handler.commands.get(key) || this.handler.aliases.get(key);
		if (!command) return void M.reply(`No Command of Alias Found | "${key}"`);
		const state = await this.client.DB.disabledcommands.findOne({
			command: command.config.command,
		});
		M.reply(
			`🚀 *Command:* ${this.client.util.capitalize(
				command.config?.command
			)}\n📉 *Status:* ${
				state ? "Disabled" : "Available"
			}\n⛩ *Category:* ${this.client.util.capitalize(
				command.config?.category || ""
			)}${
				command.config.aliases
					? `\n♦️ *Aliases:* ${command.config.aliases
							.map(this.client.util.capitalize)
							.join(", ")}`
					: ""
			}\n🎐 *Group Only:* ${this.client.util.capitalize(
				JSON.stringify(!command.config.dm ?? true)
			)}\n💎 *Usage:* ${command.config?.usage || ""}\n\n📒 *Description:* ${
				command.config?.description || ""
			}`
		);
	};
}
