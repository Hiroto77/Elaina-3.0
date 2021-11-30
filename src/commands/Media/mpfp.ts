import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'mpfp',
            aliases: ['pfp'],
            description: 'Search matching pfp from pintrest.com. ',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}mpfp [name]`
        })
    }
run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
if (!joined) return void M.reply('Provide the keywords you wanna search, Baka!')
        const chitoge = joined.trim()
        console.log(chitoge)
        const { data } = await axios.get(`https://api.ichikaa.xyz/api/ppcouple=${chitoge}`)
        if ((data as { error: string }).error) return void (await M.reply('Sorry, couldn\'t find'))
        const buffer = await request.buffer(data.result[Math.floor(Math.random() * data.result.length)]).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {

const male = pp.data.male;
const female = pp.data.female;

M.reply(male, MessageType.image,
       undefined,
            undefined,
'For him') ;
M.reply(female,MessageType.image,
       undefined,
            undefined,
'For her');
    }
}
