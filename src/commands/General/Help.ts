import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h','?','elaina','menu']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Chitoge/chitoge.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `¬ hello! *@${M.sender.username}* I'm Elaina💙, my prefix is ${WAClient.config.prefix}


🄰🄽🄸🄼🄴 〽

- ${this.client.config.prefix}𝙖𝙣𝙞𝙢𝙚𝙦𝙪𝙤𝙩𝙚 
- ${this.client.config.prefix}𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧
- ${this.client.config.prefix}𝙖𝙣𝙞𝙢𝙚𝙘𝙝𝙖𝙧 
- ${this.client.config.prefix}𝙝𝙪𝙨𝙗𝙖𝙣𝙙𝙤 
- ${this.client.config.prefix}𝙡𝙤𝙡𝙞 
- ${this.client.config.prefix}𝙣𝙚𝙠𝙤 
- ${this.client.config.prefix}𝙬𝙖𝙞𝙛𝙪
- ${this.client.config.prefix}𝙜𝙚𝙣𝙨𝙝𝙞𝙣𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧
- ${this.client.config.prefix}𝙨𝙖𝙪𝙘𝙚
- ${this.client.config.prefix}𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧 
- ${this.client.config.prefix}𝙝𝙖𝙞𝙜𝙪𝙨𝙝𝙖
- ${this.client.config.prefix}𝙖𝙣𝙞𝙢𝙚 
- ${this.client.config.prefix}𝙧𝙥𝙖𝙥𝙚𝙧
- ${this.client.config.prefix}𝙫𝙩𝙪𝙗𝙚𝙧 
- ${this.client.config.prefix}𝙢𝙖𝙣𝙜𝙖

🄼🄴🄳🄸🄰 〽

- ${this.client.config.prefix}𝙥𝙡𝙖𝙮 
- ${this.client.config.prefix}𝙥𝙞𝙣
- ${this.client.config.prefix}𝙢𝙞𝙘𝙤𝙣
- ${this.client.config.prefix}𝙞𝙜𝙪𝙨𝙚𝙧
- ${this.client.config.prefix}𝙞𝙜𝙥𝙧
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
- ${this.client.config.prefix}𝙢𝙚𝙢𝙚
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
- ${this.client.config.prefix}𝙞𝙣𝙛𝙤

🄼🄾🄳🄴🅁🄰🅃🄸🄾🄽 〽

- ${this.client.config.prefix}𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚 
- ${this.client.config.prefix}𝙙𝙚𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚 
- ${this.client.config.prefix}𝙙𝙚𝙢𝙤𝙩𝙚 
- ${this.client.config.prefix}𝙥𝙧𝙤𝙢𝙤𝙩𝙚
- ${this.client.config.prefix}𝙖𝙙𝙙 
- ${this.client.config.prefix}𝙥𝙪𝙧𝙜𝙚 
- ${this.client.config.prefix}𝙧𝙚𝙢𝙤𝙫𝙚 
- ${this.client.config.prefix}𝙘𝙡𝙤𝙨𝙚 
- ${this.client.config.prefix}𝙤𝙥𝙚𝙣 
- ${this.client.config.prefix}𝙧𝙚𝙫𝙤𝙠𝙚

🅄🅃🄸🄻🅂 〽
- ${this.client.config.prefix}𝙨𝙪𝙥𝙥𝙤𝙧𝙩
- ${this.client.config.prefix}𝙗𝙡𝙪𝙧
- ${this.client.config.prefix}𝙙𝙤𝙜𝙜𝙤
- ${this.client.config.prefix}𝙠𝙞𝙩𝙩𝙚𝙣
- ${this.client.config.prefix}𝙩𝙧𝙖𝙣𝙙𝙞𝙣𝙜𝙜𝙤𝙤𝙜𝙡𝙚
- ${this.client.config.prefix}𝙩𝙧𝙖𝙣𝙙𝙞𝙣𝙜𝙮𝙩
- ${this.client.config.prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧
- ${this.client.config.prefix}𝙞𝙢𝙖𝙜𝙚 
- ${this.client.config.prefix}𝙨𝙪𝙗𝙧𝙚𝙙 
- ${this.client.config.prefix}𝙩𝙖𝙠𝙚

🄴🄳🅄🄲🄰🅃🄸🅅🄴 〽
- ${this.client.config.prefix}𝙘𝙖𝙡𝙘𝙪𝙡𝙖𝙩𝙤𝙧
- ${this.client.config.prefix}𝙚𝙡𝙚𝙢𝙚𝙣𝙩𝙨
- ${this.client.config.prefix}𝙘𝙤𝙫𝙞𝙙 
- ${this.client.config.prefix}𝙪𝙧𝙗𝙖𝙣𝙙𝙞𝙘𝙩𝙞𝙤𝙣𝙖𝙧𝙮 
- ${this.client.config.prefix}𝙜𝙞𝙩𝙝𝙪𝙗 

💙𝙉𝙤𝙩𝙚: 𝙐𝙨𝙚 !𝙝𝙚𝙡𝙥 <𝙘𝙤𝙢𝙢𝙖𝙣𝙙_𝙣𝙖𝙢𝙚> 𝙩𝙤 𝙫𝙞𝙚𝙬 𝙩𝙝𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 𝙞𝙣𝙛𝙤.` }
        )
    }
}
       
