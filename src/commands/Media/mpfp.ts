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
const pp = await axios.get('https://api.ichikaa.xyz/api/ppcouple');

const male = pp.data.male;
const female = pp.data.female;
M.reply(await axios.get(male, { responseType: 'arraybuffer' }), undefined..... 
'For him') ;
M.reply(await axios.get(female, { responseType: 'arraybuffer' }), undefined.....
'For her');
    }
}
