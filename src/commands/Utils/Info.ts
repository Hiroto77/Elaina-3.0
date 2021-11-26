import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'info',
            description: 'showing total Groups',
            category: 'moderation',
            usage: `${client.config.prefix}infog`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const chats: any = this.client.chats
			
		await M.reply(`━━━━❰ 💙ELAINA💙 ❱━━━━\n\n🔮Groups: *${this.client.chats.all().filter(chat => chat.jid.endsWith('g.us')).length}\n\n *🚦Uptime* const  formatTime = (seconds) => {
        const hrs = Math.floor(seconds / (60 * 60))
        const mins = Math.floor((seconds % (60 * 60)) / 60)
        const secs = Math.floor(seconds % 60)
        return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
    }

const pad = (s) => (s < 10 ? '0' : '') + s

const uptime = () => formatTime(process.uptime())

M.reply(uptime())*`) 
    }
}
