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
            description: 'Search wallpaper from pinterest.com. ',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}pinterest [name]`
        })
    }
const pp = axios.get('https://api.ichikaa.xyz/api/ppcouple');

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
